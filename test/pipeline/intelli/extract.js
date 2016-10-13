/* global describe */
/* global expect */
/* global it */
const extract = require('../../../src/pipeline/intelli/extract')
const lessFixture = require('../../fixtures/pipeline/intelli/extract/base')
const sassFixture = require('../../fixtures/pipeline/intelli/extract/sass-base')
const intelliConfig = require('../../../src/config')

describe('pipeline/intelli/extract', () => {
  it('should extract LESS variables from given directories', (done) => {
    extract(lessFixture.input, intelliConfig.less).then((result) => {
      expect(result).to.deep.equal(lessFixture.output)

      done()
    })
  })

  it('should extract SASS variables from given directories', (done) => {
    extract(sassFixture.input, intelliConfig.sass).then((result) => {
      expect(result).to.deep.equal(sassFixture.output)

      done()
    })
  })
})
