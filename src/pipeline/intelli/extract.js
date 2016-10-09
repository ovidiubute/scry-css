const _ = require('lodash')
const Promise = require('bluebird')
const Parsers = require('../../parsers')
const { lines } = require('../../io').LineReader

module.exports = (filesByDirectory, intelliConfig) =>
  new Promise((resolve) => {
    const promises = _.reduce(filesByDirectory, (result, filePaths) =>
      _.assign(result, _.reduce(filePaths, (linesByFilePath, filePath) => {
        const updateLinesByFilePath = linesByFilePath
        updateLinesByFilePath[filePath] = lines(filePath)

        return updateLinesByFilePath
      }, {}))
    , {})

    const promiseKeys = Object.keys(promises)
    const promPromises = promiseKeys.map(key => promises[key])

    Promise.all(promPromises).then((linesByIndex) => {
      const linesObject = {}
      promiseKeys.forEach((key, index) => {
        linesObject[key] = linesByIndex[index]
      })

      resolve(_.reduce(linesObject, (result, fileLines, filePath) => {
        const updatedResult = result
        updatedResult[filePath] = _
          .chain(fileLines)
          .map((fileLine) => Parsers[intelliConfig.stack].parse(fileLine))
          .filter((fileLine) => !_.isEmpty(fileLine))
          .value()

        return updatedResult
      }, {}))
    })
  })
