const CssPropertyParser = require('../parsers/css-property')
const CssPropertyCandidates = require('../candidates/css-properties')
const _ = require('lodash')

module.exports = (linesByFile) => (
  _
    .chain(linesByFile)
    .flatMap((lines, filePath) => {
      return {
        filePath,
        propertyDefinitions: _
          .chain(lines)
          .map(line => CssPropertyParser.parse(line))
          .filter(propertyDefinition => !_.isEmpty(propertyDefinition))
          .value(),
      }
    })
    .map((propertyDefinitionsByFile) => {
      return {
        filePath: propertyDefinitionsByFile.filePath,
        propertyDefinitions: CssPropertyCandidates.filter(
          propertyDefinitionsByFile.propertyDefinitions
        ),
      }
    })
    .value()
)
