const _ = require('lodash')

function noSuggestions() {
  return 'Sorry, no suggestions available.'
}

module.exports = (results) => {
  if (_.isEmpty(results.suggestionData)) {
    throw new Error('Cannot format data!')
  }

  const resultCount = _.reduce(results.suggestionData, (totalCount, { propertyDefinitions }) => (
    totalCount + _.reduce(propertyDefinitions, (localCount, { suggestions }) => (
      localCount + suggestions.filter(({ suggestions: localSuggestions }) => (
        !_.isEmpty(localSuggestions)
      )).length
    ), 0)
  ), 0)

  if (resultCount === 0) {
    return noSuggestions()
  }

  return 'not implemented'
}
