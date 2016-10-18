#! /usr/bin/env node

const pkg = require('../../package.json')
const PipelineRunner = require('../pipeline/runner')
const argv = require('yargs')
  .usage('Usage: $0 [options] <dir> <file...>')
  .demand(2)
  .option('reporter', {
    alias: 'r',
    describe: 'output reporter',
    choices: ['console', 'json'],
    default: 'console',
  })
  .version(() => `${pkg.name} ${pkg.version}`)
  .help()
  .argv

PipelineRunner.run(argv.reporter, ...argv._)
  .then((summary) => process.stdout.write(`${summary}\n`))
