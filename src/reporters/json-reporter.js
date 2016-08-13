module.exports = (results, pretty = true) => (
  pretty ? JSON.stringify(results, null, 2) : JSON.stringify(results)
)
