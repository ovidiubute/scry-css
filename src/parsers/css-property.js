const CSS_PROPERTY_REGEX = /^([a-z\-]*):(\s*)(.*);/i

function parse(line) {
  const { 0: all, 1: property, 3: value } = CSS_PROPERTY_REGEX.exec(line.string) || []
  return all ? {
    property,
    value,
    lineNumber: line.lineNumber,
  } : null
}

module.exports = {
  parse,
}
