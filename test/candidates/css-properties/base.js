const CssPropertyCandidates = require('../../../src/candidates/css-properties')
const inputFixture = require('../../fixtures/candidates/css-properties/base/input')
const outputFixture = require('../../fixtures/candidates/css-properties/base/output')

describe('candidates/css-properties', () => {
  describe('fixtures/candidates/css-properties/base', () => {
    describe('#filter', () => {
      it('should return properties with anything other than LESS variables as values', () => {
        expect(CssPropertyCandidates.filter(inputFixture.data)).to.deep.equal(outputFixture.data)
      })
    })
  })
})
