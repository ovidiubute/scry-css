const _ = require('lodash')
const os = require('os')
const colour = require('colour') // eslint-disable-line no-unused-vars

const reporterUtils = require('./console-reporter-utils')

module.exports = (results) => {
  if (_.isEmpty(results) || !_.isArray(results.suggestionData)) {
    throw new Error('Cannot format data!')
  }

  const resultCount = reporterUtils.countSuggestions(results)

  if (!resultCount) {
    return reporterUtils.formatNoSuggestions()
  }

  return results.suggestionData.reduce((output, resultsByFile) => {
    if (!resultsByFile.propertyDefinitions.length) {
      output.push(`--> ${resultsByFile.filePath.underline}`)
      output.push(reporterUtils.formatNoSuggestions())

      return output
    }

    const formatted = resultsByFile.propertyDefinitions.map((propDef) => {
      // Count suggestions in case we can print a single line
      const suggestionCount = reporterUtils.countCssPropertySuggestions(propDef)

      // No suggestions for this CSS property
      if (!suggestionCount) {
        return [
          reporterUtils.formatCssProperty(propDef),
          `    ${reporterUtils.formatNoSuggestions()}`,
        ].join(os.EOL)
      }

      return _.concat(
        reporterUtils.formatCssProperty(propDef),
        propDef.suggestions
          .filter(({ suggestions }) => suggestions.length > 0)
          .map(reporterUtils.formatSuggestionDefinition)
      ).join(os.EOL)
    }).join(os.EOL)

    output.push(`--> ${resultsByFile.filePath.underline}`)
    output.push(formatted)

    return output
  }, []).join(os.EOL)
}
