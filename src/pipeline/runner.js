const _ = require('lodash')
const Promise = require('promised-io/promise')

const { intelInput, intelExtract } = require('./intelli')
const findCandidates = require('./find-candidates')
const findSuggestions = require('./find-suggestions')
const extractLines = require('./extract-lines')
const summary = require('./summary')
const techConfig = require('../config')

function run(reporterType, techType, dirPath, ...filePaths) {
  const runnerConfig = techConfig[techType]
  if (_.isEmpty(runnerConfig)) {
    throw new Error(`Unsupported techType: ${techType}`)
  }

  return Promise.allKeys({
    intelliByFile: Promise.seq([
      intelInput.bind(null, [dirPath], runnerConfig),
      (filesByDirectory) => intelExtract(filesByDirectory, runnerConfig),
    ]),
    candidatesByFile: Promise.seq([
      extractLines.bind(null, filePaths),
      ({ files: linesByFile }) => findCandidates(linesByFile),
    ]),
  }).then((data) => {
    return summary(reporterType, findSuggestions(_.extend(data, { config: runnerConfig })))
  })
}

module.exports = {
  run,
}
