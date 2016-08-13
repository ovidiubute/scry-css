const Promise = require('promised-io/promise')
const _ = require('lodash')
const path = require('path')
const { match } = require('../suggestions/variables')

module.exports = (options) => {
  const { candidatesByFile, intelliByFile, config } = options

  return {
    suggestionData: candidatesByFile.map(({ filePath, propertyDefinitions }) => {
      return {
        propertyDefinitions: propertyDefinitions.map((propDef) => {
          return _.extend(propDef, {
            suggestions: _.map(intelliByFile, (variables, filePath) => {
              return {
                filePath,
                suggestions: match(propDef.property, variables, 'variable'),
              }
            })
          })
        }),
        filePath: path.resolve(filePath),
      }
    }),
  }
}
