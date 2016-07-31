const LineReader = require('../io/line-reader')
const Promise = require('promised-io/promise')

module.exports = (inputFilePaths) => {
  let result = { files: {} }
  let deferred = new Promise.Deferred()

  let promises = inputFilePaths.map((inputFilePath) => {
    return LineReader.lines(inputFilePath)
  })
  Promise.all(promises).then((results) => {
    inputFilePaths.map((inputFilePath, index) => {
      result.files[inputFilePath] = results[index]
    })
    deferred.resolve(result)
  })

  return deferred.promise
}
