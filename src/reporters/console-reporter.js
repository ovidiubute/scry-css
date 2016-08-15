const _ = require('lodash')

function noSuggestions() {
  return 'Sorry, no suggestions available.'
}

function countSuggestions(results) {
  return _.reduce(results.suggestionData, (totalCount, { propertyDefinitions }) => (
    totalCount + _.reduce(propertyDefinitions, (localCount, { suggestions }) => (
      localCount + suggestions.filter(({ suggestions: localSuggestions }) => (
        !_.isEmpty(localSuggestions)
      )).length
    ), 0)
  ), 0)
}

module.exports = (results) => {
  if (_.isEmpty(results) || _.isEmpty(results.suggestionData)) {
    throw new Error('Cannot format data!')
  }

  const resultCount = countSuggestions(results)

  if (resultCount === 0) {
    return noSuggestions()
  }

  return 'not implemented'
}
