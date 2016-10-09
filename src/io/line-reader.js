const readline = require('readline')
const fs = require('fs')
const _ = require('lodash')
const path = require('path')
const Promise = require('bluebird')

function lines(filePath) {
  return new Promise((resolve) => {
    const lineReader = readline.createInterface({
      input: fs.createReadStream(path.resolve(filePath)),
    })

    const data = []
    let lineNumber = 1
    lineReader.on('line', (line) => {
      const value = line.trim()
      data.push({
        string: value,
        isEmpty: _.isEmpty(value),
        lineNumber: lineNumber++,
      })
    })

    lineReader.on('close', () => {
      resolve(data)
    })
  })
}

module.exports = {
  lines,
}
