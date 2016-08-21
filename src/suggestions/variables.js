const { filter } = require('fuzzaldrin')

function match(property, candidates, fieldName) {
  return filter(candidates, property, {
    key: fieldName,
  })
}

module.exports = {
  match,
}
