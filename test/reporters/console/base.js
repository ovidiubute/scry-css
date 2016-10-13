const consoleReporter = require('../../../src/reporters/console-reporter')
const fixture = require('../../fixtures/reporters/console/base')

describe('/fixtures/reporters/console/base', () => {
  it('should return formatted description of results', () => {
    const actual = consoleReporter(fixture.input)
    expect(actual).to.deep.equal(fixture.output)
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
