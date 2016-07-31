const LESS_VARIABLE_REGEX = /^@([a-z0-9\-_]*):(\s*)([#\(\):,%a-z0-9]*);/i

function parse(line) {
  const { 0: all, 1: variable, 3: value } = LESS_VARIABLE_REGEX.exec(line) || []
  return all ? {
    variable,
    value,
  } : null
}

module.exports = {
  parse,
}
