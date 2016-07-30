const LESS_VARIABLE_REGEX = /^@([a-z0-9\-_]*):(\s*)([#\(\):,%a-z0-9]*);/i

function parse(line) {
  const [all, variable, separator, value] = LESS_VARIABLE_REGEX.exec(line) || []
  return all ? {
    variable,
    value
  } : null
}

module.exports = {
  parse
}
