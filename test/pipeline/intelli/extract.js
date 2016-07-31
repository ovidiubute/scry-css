const extract = require('../../../src/pipeline/intelli/extract')
const fixture = require('../../fixtures/pipeline/intelli/extract/base')

describe('#extract', () => {
  it('should extract LESS variables from given directories', (done) => {
    extract(fixture.input, {stack: 'LESS'}).then((result) => {
      expect(result).to.deep.equal(fixture.output)

      done()
    })
  })
})
