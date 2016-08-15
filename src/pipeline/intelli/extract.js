const _ = require('lodash')
const Promise = require('promised-io/promise')
const { parse } = require('../../parsers/less-variable')
const { LineReader } = require('../../io')

module.exports = (filesByDirectory, intelliConfig) => {
  const deferred = new Promise.Deferred()

  const promises = _.reduce(filesByDirectory, (result, filePaths) => {
    _.forEach(filePaths, (filePath) => {
      result[filePath] = LineReader.lines(filePath)
    })

    return result
  }, {})
  Promise.allKeys(promises).then((linesByFile) => {
    deferred.resolve(_.reduce(linesByFile, (result, fileLines, filePath) => {
      result[filePath] = _
        .chain(fileLines)
        .map((fileLine) => parse(fileLine))
        .filter((fileLine) => !_.isEmpty(fileLine))
        .value()

      return result
    }, {}))
  })

  return deferred.promise
}
