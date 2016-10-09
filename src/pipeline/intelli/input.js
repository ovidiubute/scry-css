const { files } = require('../../io/dir-walker')
const Promise = require('bluebird')

module.exports = (dirPaths, intelliConfig) =>
  new Promise((resolve) => {
    const filesByDirectory = {}
    Promise.all(dirPaths.map((dirPath) => files(dirPath, intelliConfig.fileExtension)))
      .then((results) => {
        results.forEach((fileList, index) => {
          filesByDirectory[dirPaths[index]] = fileList
        })

        resolve(filesByDirectory)
      })
  })
