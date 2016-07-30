const dir = require('node-dir')
const Deferred = require('promised-io/promise').Deferred
const path = require('path')
const _ = require('lodash')

function files(dirPath) {
  let deferred = new Deferred()

  dir.files(path.resolve(dirPath), function(err, files) {
    if (err) {
      deferred.reject(files)
      return
    }

    files = files.filter(function (file) {
       return !_.startsWith(file, '.') && _.endsWith(file, '.less')
    })

    deferred.resolve(files)
  })

  return deferred.promise
}

module.exports = {
  files
}
