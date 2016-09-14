const consoleReporter = require('../../../src/reporters/console-reporter')
const fixture = require('../../fixtures/reporters/console/empty')

describe('Console Reporter', () => {
  it('should return description for no results', () => {
    expect(consoleReporter(fixture.input)).to.deep.equal(fixture.output)
  })
})
