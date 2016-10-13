const _ = require('lodash')
const Promise = require('bluebird')

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

  return Promise.all([
    intelInput([dirPath], runnerConfig).then((filesByDirectory) => (
      intelExtract(filesByDirectory, runnerConfig)
    )),
    extractLines(filePaths).then(({ files: linesByFile }) => (
      findCandidates(linesByFile)
    )),
  ]).then((promiseResults) => {
    const [intelliByFile, candidatesByFile] = promiseResults

    return {
      intelliByFile,
      candidatesByFile,
    }
  }).then((data) => (
    summary(
      reporterType,
      findSuggestions(
        _.extend(
          data, {
            config: runnerConfig,
          }
        )
      )
    )
  ))
}

module.exports = {
  run,
}
