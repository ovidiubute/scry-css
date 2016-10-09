const CssPropertyParser = require('../parsers/css-property')
const CssPropertyCandidates = require('../candidates/css-properties')
const { isBlacklisted } = require('../candidates/blacklist')
const { blacklist } = require('../config')
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
          .filter(propertyDefinition => (
            !_.isEmpty(propertyDefinition) && !isBlacklisted(propertyDefinition, blacklist)
          ))
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
