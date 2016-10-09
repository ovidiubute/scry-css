const dir = require('node-dir')
const Promise = require('bluebird')
const path = require('path')
const _ = require('lodash')

function files(dirPath, fileExtension) {
  if (_.isEmpty(fileExtension)) {
    throw new Error('fileExtension is mandatory!')
  }

  return new Promise((resolve, reject) => {
    dir.files(path.resolve(dirPath), (err, fileList) => {
      if (err) {
        reject(err)
        return
      }

      resolve(
        fileList.filter(file => !_.startsWith(file, '.') && _.endsWith(file, fileExtension))
      )
    })
  })
}

module.exports = {
  files,
}
