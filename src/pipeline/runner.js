const _ = require('lodash')
const Promise = require('bluebird')

const { intelInput, intelExtract } = require('./intelli')
const findCandidates = require('./find-candidates')
const findSuggestions = require('./find-suggestions')
const extractLines = require('./extract-lines')
const summary = require('./summary')
const techConfig = require('../config')

function getFilePathExtension(filePath) {
  return filePath.substr(filePath.lastIndexOf('.') + 1)
}

function run(reporterType, dirPath, ...filePaths) {
  const extension = getFilePathExtension(filePaths[0])
  const runnerConfig = techConfig[extension]
  const supportedExtensions = _.keys(_.omit(techConfig, ['blacklist']))

  if (_.isEmpty(runnerConfig)) {
    throw new Error(`Unsupported extensions: ${supportedExtensions}`)
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
