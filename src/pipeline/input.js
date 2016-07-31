const _ = require('lodash')
const path = require('path')

function receiveInput(relativeFilePaths, fileExtension = '.less') {
  return _
    .chain(relativeFilePaths)
    .filter((relFilePath) => {
      let resolveData = path.parse(relFilePath)
      return resolveData.ext === fileExtension
    })
    .map((relFilePath) => {
      return path.resolve(relFilePath)
    })
}

module.exports = {
  receiveInput
}
