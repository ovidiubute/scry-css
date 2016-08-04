const CssPropertyParser = require('../parsers/css-property')
const CssPropertyCandidates = require('../candidates/css-properties')
const _ = require('lodash')

module.exports = (linesByFile) => (
  _
    .chain(linesByFile)
    .flatMap((lines, filePath) => ({
      filePath,
      propertyDefinitions:
        lines
          .map((line, lineNumber) => CssPropertyParser.parse({
            string: line,
            lineNumber: lineNumber + 1,
          }))
          // Remove lines that could not be parsed
          .filter((propertyDefinition) => !_.isEmpty(propertyDefinition)),
    }))
    .map((propertyDefinitionsByFile) => ({
      filePath: propertyDefinitionsByFile.filePath,
      propertyDefinitions: CssPropertyCandidates.filter(
        propertyDefinitionsByFile.propertyDefinitions
      ),
    }))
    .value()
)
