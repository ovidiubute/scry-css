const jsonReporter = require('../../src/reporters/json-reporter')

describe('/reporters/json-reporter', () => {
  it('should output formatted JSON', () => {
    expect(jsonReporter({
      a: 2,
      b: [1, 4]
    })).to.equal(
`{
  "a": 2,
  "b": [
    1,
    4
  ]
}`
    )
  })

  it('should output standard JSON', () => {
    expect(jsonReporter({
      a: 34,
      c: "lakdo"
    }, pretty = false)).to.equal(`{"a":34,"c":"lakdo"}`)
  })
})
