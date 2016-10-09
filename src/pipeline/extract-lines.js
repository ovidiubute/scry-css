const { LineReader } = require('../io')
const Promise = require('bluebird')

module.exports = (inputFilePaths) =>
  new Promise((resolve) => {
    const result = { files: {} }

    const promises = inputFilePaths.map((inputFilePath) => (LineReader.lines(inputFilePath)))
    Promise.all(promises).then((results) => {
      inputFilePaths.forEach((inputFilePath, index) => {
        result.files[inputFilePath] = results[index]
      })
      resolve(result)
    })
  })
