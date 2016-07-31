const DirWalker = require('../../io/dir-walker')
const Promise = require('promised-io/promise')

module.exports = (dirPaths, intelliConfig) => {
  const deferred = new Promise.Deferred()

  let filesByDirectory = {}
  Promise.all(dirPaths.map((dirPath) => DirWalker.files(dirPath, intelliConfig.fileExtension))).then((results) => {
    results.map((fileList, index) => {
      filesByDirectory[dirPaths[index]] = fileList
    })
    deferred.resolve(filesByDirectory)
  })

  return deferred.promise
}
