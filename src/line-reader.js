const readline = require('readline')
const fs = require('fs')
const path = require('path')
const Deferred = require("promised-io/promise").Deferred

function lines(filePath) {
  let deferred = new Deferred()
  let lineReader = readline.createInterface({
    input: fs.createReadStream(path.resolve(filePath))
  })

  let data = []
  lineReader.on('line', (line) => {
    data.push(line)
  })

  lineReader.on('close', () => {
    deferred.resolve(data)
  })

  return deferred.promise
}

module.exports = {
  lines
}
