const CSS_PROPERTY_REGEX = /^([a-z\-]*):(\s*)(.*);/i

function parse(line) {
  const [all, property, separator, value] = CSS_PROPERTY_REGEX.exec(line) || []
  return all ? {
    property,
    value
  } : null
}

module.exports = {
  parse
}
