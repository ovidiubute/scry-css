const CssPropertyParser = require('../parsers/css-property')
const CssPropertyCandidates = require('../candidates/css-properties')
const _ = require('lodash')

module.exports = (linesByFile) => {
  return _
    .chain(linesByFile)
    .flatMap((lines, filePath) => {
      return {
        filePath,
        propertyDefinitions: lines
          .map((line, lineNumber) => {
            // Small trick so we don't lose line numbers in the next map
            // Also note we're counting line numbers starting from 1
            return [lineNumber + 1, CssPropertyParser.parse(line)]
          })
          // Remove lines that could not be parsed
          .filter((propertyDefinition) => !_.isEmpty(_.last(propertyDefinition)))
          // Restore line numbers
          .map((propertyDefinition) => {
            return Object.assign(_.last(propertyDefinition), {
              lineNumber: _.head(propertyDefinition)
            })
          })
      }
    })
    .map((propertyDefinitionsByFile) => {
      return {
        filePath: propertyDefinitionsByFile.filePath,
        propertyDefinitions: CssPropertyCandidates.filter(propertyDefinitionsByFile.propertyDefinitions)
      }
    })
    .value()
}
