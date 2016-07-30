const _ = require('lodash')

function filter(propertyDefinitions) {
  return propertyDefinitions.filter((propertyDef) => {
    return !_.startsWith(propertyDef.value, '@')
  })
}

module.exports = {
  filter
}
