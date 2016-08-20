/**
 * Console reporter utilities module.
 * @module console-reporter-utils
 */

const _ = require('lodash')
const os = require('os')
const colour = require('colour') // eslint-disable-line no-unused-vars

/** Returns a formatted info message that no suggestions could be found. */
function formatNoSuggestions() {
  return 'Sorry, no suggestions available.'.italic.grey
}

/**
 * Returns a formatted suggestion variable.
 * @param {object} variableDefinition Variable definition object.
 * @return {String}
 */
function formatVariable(variableDefinition) {
  return [
    ' '.repeat(8),
    `@${variableDefinition.variable}`.red,
    ': '.bold,
    `${variableDefinition.value}`.yellow,
    '; '.bold,
    `(line ${variableDefinition.lineNumber})`.bold,
  ].join('')
}

/**
 * Returns a formatted CSS property.
 * @param {object} propertyDefinition Property definition object.
 * @return {String}
 */
function formatCssProperty(propertyDefinition) {
  return [
    ' '.repeat(4),
    `${propertyDefinition.property}`.blue,
    ': '.bold,
    `${propertyDefinition.value}`.white,
    '; '.bold,
    `(line ${propertyDefinition.lineNumber})`.grey,
  ].join('')
}

/**
 * Format suggestion definition.
 * @param {object} suggestion
 * @param {Array} suggestion.suggestions
 */
function formatSuggestionDefinition(suggestion) {
  return _.concat(
    `    --> ${suggestion.filePath}`.bold,
    suggestion.suggestions.map(formatVariable).join(os.EOL)
  ).join(os.EOL)
}

/**
 * Return total number of suggestions from final pipeline stage output data.
 * @param {object} results
 * @param {Array} results.suggestionData
 * @return {Number} Number of suggestions.
 */
function countSuggestions(results) {
  return _.reduce(results.suggestionData, (totalCount, { propertyDefinitions }) => (
    totalCount + _.reduce(propertyDefinitions, (localCount, { suggestions }) => (
      localCount + suggestions.filter(({ suggestions: localSuggestions }) => (
        !_.isEmpty(localSuggestions)
      )).length
    ), 0)
  ), 0)
}

/**
 * Return number of suggestions a CSS property has from final pipeline output data.
 * @param {object} propDef
 * @param {Array} propDef.suggestions
 * @param {Array} propDef.suggestions.suggestions
 * @return {Number} Number of suggestions.
 */
function countCssPropertySuggestions(propDef) {
  return propDef.suggestions.reduce((count, { suggestions }) => (
    count + suggestions.length
  ), 0)
}

module.exports = {
  formatNoSuggestions,
  formatVariable,
  formatCssProperty,
  formatSuggestionDefinition,
  countSuggestions,
  countCssPropertySuggestions,
}
