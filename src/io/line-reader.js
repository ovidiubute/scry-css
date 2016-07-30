const readline = require('readline')
const fs = require('fs')
const path = require('path')
const Deferred = require('promised-io/promise').Deferred
const _ = require('lodash')

function lines(filePath) {
  let deferred = new Deferred()
  let lineReader = readline.createInterface({
    input: fs.createReadStream(path.resolve(filePath))
  })

  let data = []
  lineReader.on('line', (line) => {
    const trimmed = line.trim()
    if (!_.isEmpty(trimmed)) {
      data.push(trimmed)
    }
  })

  lineReader.on('close', () => {
    deferred.resolve(data)
  })

  return deferred.promise
}

module.exports = {
  lines
}
