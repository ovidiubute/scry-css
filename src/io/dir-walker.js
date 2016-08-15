const dir = require('node-dir')
const Promise = require('promised-io/promise')
const path = require('path')
const _ = require('lodash')

function files(dirPath, fileExtension) {
  if (_.isEmpty(fileExtension)) {
    throw new Error('fileExtension is mandatory!')
  }

  const deferred = new Promise.Deferred()

  dir.files(path.resolve(dirPath), (err, fileList) => {
    if (err) {
      deferred.reject(err)
      return
    }

    deferred.resolve(
      fileList.filter(file => !_.startsWith(file, '.') && _.endsWith(file, fileExtension))
    )
  })

  return deferred.promise
}

module.exports = {
  files,
}
