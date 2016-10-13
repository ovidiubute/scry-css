const findSuggestions = require('../../src/pipeline/find-suggestions')
const fixture = require('../fixtures/pipeline/find-suggestions/base')

describe('pipeline/find-suggestions', () => {
  it('should suggest LESS variables', () => {
    expect(findSuggestions(fixture.input)).to.deep.equal(fixture.output)
  })
})
