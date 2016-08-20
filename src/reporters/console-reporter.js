const _ = require('lodash')
const os = require('os')

function noSuggestions() {
  return 'Sorry, no suggestions available.'
}

function countSuggestions(results) {
  return _.reduce(results.suggestionData, (totalCount, { propertyDefinitions }) => (
    totalCount + _.reduce(propertyDefinitions, (localCount, { suggestions }) => (
      localCount + suggestions.filter(({ suggestions: localSuggestions }) => (
        !_.isEmpty(localSuggestions)
      )).length
    ), 0)
  ), 0)
}

module.exports = (results) => {
  if (_.isEmpty(results) || !_.isArray(results.suggestionData)) {
    throw new Error('Cannot format data!')
  }

  const resultCount = countSuggestions(results)

  if (resultCount === 0) {
    return noSuggestions()
  }

  return results.suggestionData.reduce((output, resultsByFile) => (
    _.concat(
      output,
      resultsByFile.propertyDefinitions.map((propDef) => {
        // Count suggestions in case we can print a single line
        const suggestionCount = propDef.suggestions.reduce((count, { suggestions }) => (
          count + suggestions.length
        ), 0)

        if (!suggestionCount) {
          return `    Line #${propDef.lineNumber} : ` +
            `[${propDef.property}: ${propDef.value};]` +
            ' : No suggestions!'
        }

        return _.concat(
          `--> ${resultsByFile.filePath}`,
          `    Line #${propDef.lineNumber} : [${propDef.property}: ${propDef.value};]`,
          propDef.suggestions.map((suggestion) => {
            const realSuggestions = suggestion.suggestions.map((suggestionDef) => (
              `        Line #${suggestionDef.lineNumber} : ` +
                `@${suggestionDef.variable}: ${suggestionDef.value}`
            )).join(os.EOL)

            if (realSuggestions.length) {
              return _.concat(
                `    ==> ${suggestion.filePath}`,
                realSuggestions
              ).join(os.EOL)
            }

            return _.concat(
              `    ==> ${suggestion.filePath}`,
              '        No suggestions!'
            ).join(os.EOL)
          })
        ).join(os.EOL)
      })
    )
  ), []).join(os.EOL)
}
