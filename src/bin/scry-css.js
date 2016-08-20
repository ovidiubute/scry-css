#! /usr/bin/env node

const program = require('commander')
const PipelineRunner = require('../pipeline/runner')

program
  .version('scry-css 0.2.0')
  .usage('[options] <type> <dir> <file...>')
  .option('-r --reporter [reporter]', 'Reporter', /^(console|json)$/i)
  .parse(process.argv)

if (!program.args.length) {
  program.help()
} else {
  PipelineRunner.run(program.reporter || 'console', ...program.args).then((summary) => {
    console.log(summary) // eslint-disable-line no-console
  })
}
