module.exports = (type, results) => {
  const reporter = require(`../reporters/${type}-reporter`)
  return reporter(results)
}
