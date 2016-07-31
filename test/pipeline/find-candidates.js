const findCandidates = require('../../src/pipeline/find-candidates')
const fixture = require('../fixtures/pipeline/find-candidates/base')

describe('#findCandidates', () => {
  it('should return CSS properties that are candidates', () => {
    expect(findCandidates(fixture.input)).to.deep.equal(fixture.output)
  })
})
