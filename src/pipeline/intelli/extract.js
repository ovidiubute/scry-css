const _ = require('lodash')
const Promise = require('promised-io/promise')
const LessVariableParser = require('../../parsers/less-variable')
const { LineReader } = require('../../io')

module.exports = (filesByDirectory, intelliConfig) => {
  if (intelliConfig.stack !== 'LESS') {
    throw new Error('Unsupported stack, only LESS is supported!')
  }
  const deferred = new Promise.Deferred()

  const promises = _.reduce(filesByDirectory, (result, filePaths) => {
    _.forEach(filePaths, (filePath) => {
      result[filePath] = LineReader.lines(filePath)
    })

    return result
  }, {})
  Promise.allKeys(promises).then((linesByFile) => {
    deferred.resolve(_.reduce(linesByFile, (result, fileLines, filePath) => {
      const lessVariables = fileLines
        .map((fileLine) => LessVariableParser.parse(fileLine))
        .filter((fileLine) => !_.isEmpty(fileLine))

      result[filePath] = lessVariables
      return result
    }, {}))
  })

  return deferred.promise
}
