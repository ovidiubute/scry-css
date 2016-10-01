const _ = require('lodash')

const SASS_VARIABLE_REGEX = /^\$([a-z0-9\-_]*):(\s*)([#\(\):,%a-z0-9]*);/i

module.exports = {
  parse: (line) => {
    const { 0: all, 1: variable, 3: value } = SASS_VARIABLE_REGEX.exec(line.string) || []

    return _.isEmpty(all) ? null : {
      variable,
      value,
      lineNumber: line.lineNumber,
    }
  },
}

