const { jsonReporter, consoleReporter } = require('../reporters')

module.exports = (type, results) => {
  const reporter = type === 'json' ? jsonReporter : consoleReporter
  return reporter(results)
}
