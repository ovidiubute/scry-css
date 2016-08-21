#! /usr/bin/env node

const program = require('commander')
const PipelineRunner = require('../pipeline/runner')

program
  .version('scry-css 0.2.1')
  .usage('[options] <type> <dir> <file...>')
  .option(
    '-r --reporter [reporter]',
    'reporter (json/console), defaults to console', /^(console|json)$/i
  )
  .parse(process.argv)

if (!program.args.length || program.args.length < 3) {
  program.help()
} else {
  PipelineRunner.run(program.reporter || 'console', ...program.args).then((summary) => {
    console.log(summary) // eslint-disable-line no-console
  })
}
