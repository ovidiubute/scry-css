const isBlacklisted = (parsedProperty, blacklist) => blacklist.includes(parsedProperty.property)

module.exports = {
  isBlacklisted,
}
