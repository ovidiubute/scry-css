const extractLines = require('../../src/pipeline/extract-lines')

describe('/pipeline/extract-lines', () => {
  it('should return all lines from a set of file paths', (done) => {
    let fileNames = [
      'test/fixtures/only-variables.less',
      'test/fixtures/typical-stylesheet.less'
    ]
    extractLines(fileNames).then((result) => {
      for (i of [0, 1]) {
        expect(result.files).to.have.ownProperty(fileNames[i])
        expect(result.files[fileNames[i]]).to.be.instanceof(Array)
        expect(result.files[fileNames[i]]).to.have.length.above(1)
      }

      done()
    })
  })
})
