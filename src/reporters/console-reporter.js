const _ = require('lodash')

function noSuggestions() {
  return 'Sorry, no suggestions available.'
}

module.exports = (results) => {
  if (_.isEmpty(results.suggestionData)) {
    throw new Error('Cannot format data!')
  }

  resultCount = _.reduce(results.suggestionData, (totalCount, suggestionsByFile) => {
    return totalCount + _.reduce(suggestionsByFile.propertyDefinitions, (localCount, propertyDef) => {
      return localCount + propertyDef.suggestions.filter(({ suggestions }) => !_.isEmpty(suggestions)).length
    }, 0)
  }, 0)

  if (resultCount === 0) {
    return noSuggestions()
  }
}
