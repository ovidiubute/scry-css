const dir = require('node-dir')
const Deferred = require('promised-io/promise').Deferred
const path = require('path')
const _ = require('lodash')

function files(dirPath, fileExtension) {
  if (_.isEmpty(fileExtension)) {
    throw new Error('fileExtension is mandatory!')
  }

  let deferred = new Deferred()

  dir.files(path.resolve(dirPath), (err, files) => {
    if (err) {
      deferred.reject(err)
      return
    }

    deferred.resolve(files.filter((file) => {
      return !_.startsWith(file, '.') && _.endsWith(file, fileExtension)
    }))
  })

  return deferred.promise
}

module.exports = {
  files
}
