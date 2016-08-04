const Promise = require('promised-io/promise')
const _ = require('lodash')
const path = require('path')
const process = require('process')
const { match } = require('../suggestions/variables')

module.exports = (options) => {
  const { candidatesByFile, intelliByFile, config } = options
  const deferred = new Promise.Deferred()

  if (config.stack !== 'LESS') {
    process.nextTick(() => {
      deferred.reject(new Error('Unsupported stack in configuration!'))
    })

    return deferred.promise
  }

  deferred.resolve({
    suggestionData: candidatesByFile.map(({ filePath, propertyDefinitions }) => ({
      propertyDefinitions: propertyDefinitions.map((propDef) => (
        Object.assign(propDef, {
          suggestions: _.map(intelliByFile, (variables, dirPath) => ({
            dirPath,
            suggestions: match(propDef.property, variables, 'variable'),
          })),
        })
      )),
      filePath: path.resolve(filePath),
    })),
  })

  return deferred.promise
}
