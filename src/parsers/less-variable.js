const LESS_VARIABLE_REGEX = /^@([a-z0-9\-_]*):(\s*)([#\(\):,%a-z0-9]*);/i

function parse(line) {
  if (LESS_VARIABLE_REGEX.test(line)) {
    const [all, variable, separator, value] = LESS_VARIABLE_REGEX.exec(line)
    return {
      variable,
      value
    }
  }
  return null
}

module.exports = {
  parse
}
