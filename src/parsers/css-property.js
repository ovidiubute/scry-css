const CSS_PROPERTY_REGEX = /^([a-z\-]*):(\s*)(.*);/i

function parse(line) {
  const { 0: all, 1: property, 3: value } = CSS_PROPERTY_REGEX.exec(line) || []
  return all ? {
    property,
    value,
  } : null
}

module.exports = {
  parse,
}
