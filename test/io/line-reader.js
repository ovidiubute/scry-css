const LineReader = require('../../src/io/line-reader')
const fixture = require('../fixtures/only-variables')
const _ = require('lodash')

describe('LineReader', () => {
  describe('#lines', () => {
    it('should parse a file and return an array of lines', (done) => {
      LineReader.lines('test/fixtures/only-variables.less').then((lines) => {
        expect(lines).to.deep.equal(fixture.lines)

        done()
      })
    })

    it('should trim empty lines', (done) => {
      LineReader.lines('test/fixtures/empty-lines.less').then((lines) => {
        expect(lines).to.deep.equal(_.range(0, 4).map(() => ''))

        done()
      })
    })
  })
})
