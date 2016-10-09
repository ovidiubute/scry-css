const { isBlacklisted } = require('../../src/parsers/blacklist')

describe('parsers/blacklist', () => {
  describe('#isBlacklisted', () => {
    it('should filter out blacklisted properties', () => {
      expect(isBlacklisted({
        property: 'display',
        value: 'none',
        lineNumber: 23,
      }, [
        'display',
        'somethingelse',
      ])).to.equal(true)
    })

    it('should not filter out non-blacklisted properties', () => {
      expect(isBlacklisted({
        property: 'display',
        value: 'none',
        lineNumber: 23,
      }, [
        'position',
        'margin-left',
      ])).to.equal(false)
    })
  })
})
