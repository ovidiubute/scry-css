const _ = require('lodash')
const fuzzy = require('fuzzy')

function match(property, candidates, fieldName) {
  const fuzzyResults = fuzzy.filter(property, candidates, {
    extract: (el) => el[fieldName]
  })

  return _
    .chain(fuzzyResults)
    .orderBy(['score', 'string'], ['desc', 'asc'])
    .map((el) => candidates.find((c) => el.string === c[fieldName]))
    .value()
}

module.exports = {
  match,
}
