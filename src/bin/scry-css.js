#! /usr/bin/env node

const program = require('commander')
const PipelineRunner = require('../pipeline/runner')
const _ = require('lodash')
const pkg = require('../../package.json')

program
  .version(`${pkg.name} ${pkg.version}`)
  .usage('<dir> <file...>')
  .option(
    '-r --reporter [reporter]',
    'reporter (json/console), defaults to console', /^(console|json)$/i
  )
  .parse(process.argv)

if (!program.args.length || program.args.length < 2) {
  program.help()
} else {
  PipelineRunner.run(
    !_.isEmpty(program.reporter) ? program.reporter.trim().toLowerCase() : 'console',
    ...program.args.map(arg => (
      !_.isEmpty(arg) ? arg.trim().toLowerCase() : arg
    ))
  ).then((summary) => {
    console.log(summary) // eslint-disable-line no-console
  })
}
