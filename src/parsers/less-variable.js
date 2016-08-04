const _ = require('lodash')

const LESS_VARIABLE_REGEX = /^@([a-z0-9\-_]*):(\s*)([#\(\):,%a-z0-9]*);/i

function parse(line) {
  const { 0: all, 1: variable, 3: value } = LESS_VARIABLE_REGEX.exec(line.string) || []
  if (_.isEmpty(all)) {
    return null
  }

  return {
    variable,
    value,
    lineNumber: line.lineNumber
  }
}

module.exports = {
  parse,
}
