const findSuggestions = require('../../src/pipeline/find-suggestions')
const fixture = require('../fixtures/pipeline/find-suggestions/base')

describe('#findSuggestions', () => {
  it('should suggest LESS variables', (done) => {
    findSuggestions(fixture.input).then((result) => {
      expect(result).to.deep.equal(fixture.output)

      done()
    })
  })
})
