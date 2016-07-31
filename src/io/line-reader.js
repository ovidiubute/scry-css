const readline = require('readline')
const fs = require('fs')
const path = require('path')
const Deferred = require('promised-io/promise').Deferred

function lines(filePath) {
  const deferred = new Deferred()
  const lineReader = readline.createInterface({
    input: fs.createReadStream(path.resolve(filePath)),
  })

  const data = []
  lineReader.on('line', (line) => {
    data.push(line.trim())
  })

  lineReader.on('close', () => {
    deferred.resolve(data)
  })

  return deferred.promise
}

module.exports = {
  lines,
}
