const { LineReader } = require('../io')
const Promise = require('promised-io/promise')

module.exports = (inputFilePaths) => {
  const result = { files: {} }
  const deferred = new Promise.Deferred()

  const promises = inputFilePaths.map((inputFilePath) => (LineReader.lines(inputFilePath)))
  Promise.all(promises).then((results) => {
    inputFilePaths.forEach((inputFilePath, index) => {
      result.files[inputFilePath] = results[index]
    })
    deferred.resolve(result)
  })

  return deferred.promise
}
