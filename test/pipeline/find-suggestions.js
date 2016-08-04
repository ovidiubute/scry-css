const findSuggestions = require('../../src/pipeline/find-suggestions')
const fixture = require('../fixtures/pipeline/find-suggestions/base')
const _ = require('lodash')

describe('#findSuggestions', () => {
  it('should suggest LESS variables', (done) => {
    findSuggestions(fixture.input).then((result) => {
      expect(result).to.deep.equal(fixture.output)

      done()
    })
  })

  it('should reject unsupported stack config', (done) => {
    let testInput = _.cloneDeep(fixture.input)
    testInput.config.stack = 'NoManSky'

    findSuggestions(testInput).then((result) => {
      assert.fail(false, true, 'Should have rejected the promise.')
    }, (err) => {
      expect(err).to.be.instanceof(Error)

      done()
    })
  })
})
