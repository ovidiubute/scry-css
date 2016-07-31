const _ = require('lodash')
const path = require('path')

function receiveInput(relativeFilePaths, fileExtension = '.less') {
  return _
    .chain(relativeFilePaths)
    .filter((relFilePath) => {
      const resolveData = path.parse(relFilePath)
      return resolveData.ext === fileExtension
    })
    .map((relFilePath) => path.resolve(relFilePath))
}

module.exports = {
  receiveInput,
}
