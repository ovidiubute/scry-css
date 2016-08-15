const consoleReporter = require('../../../src/reporters/console-reporter')
const fixture = require('../../fixtures/reporters/console/base')

describe('Console Reporter', () => {
  it('should return formatted description of results', () => {
    expect(consoleReporter(fixture.input)).to.deep.equal(fixture.output)
  })

  it('should throw error due to undefined data', () => {
    expect(consoleReporter.bind(null, undefined)).to.throw(Error)
  })

  it('should throw error due to null data', () => {
    expect(consoleReporter.bind(null, null)).to.throw(Error)
  })

  it('should throw error due to invalid data', () => {
    expect(consoleReporter.bind(null, {
      abc: 23
    })).to.throw(Error)
  })
})
