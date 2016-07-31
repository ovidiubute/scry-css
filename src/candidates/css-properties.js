const _ = require('lodash')

function filter(propertyDefinitions) {
  return propertyDefinitions.filter((propertyDef) => !_.startsWith(propertyDef.value, '@'))
}

module.exports = {
  filter,
}
