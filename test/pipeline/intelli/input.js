const receiveInput = require('../../../src/pipeline/intelli/input')

describe('#receiveInput', () => {
  it('should receive a list of directories and return all files matching extension', (done) => {
    const dirs = [
      'test/fixtures/walk-directory',
      'test/fixtures/candidates/css-properties',
    ]

    receiveInput(dirs, {
      fileExtension: '.less'
    }).then((results) => {
      for (dir of dirs) {
        expect(results).to.have.ownProperty(dir)
        expect(results[dir]).to.be.instanceof(Array)
      }
      expect(results[dirs[0]].length).to.equal(2)
      expect(results[dirs[1]].length).to.equal(0)

      done()
    })
  })
})
