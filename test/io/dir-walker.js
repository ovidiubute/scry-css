const DirWalker = require('../../src/io/dir-walker')
const fixture = require('../fixtures/walk-directory/base')

describe('DirWalker', () => {
  describe('#parse', () => {
    it('should return all LESS file names from a directory', (done) => {
      DirWalker.files('test/fixtures/walk-directory').then((files) => {
        for (let i = 0; i < files.length; i++) {
          expect(files[i]).to.have.string(fixture.files[i])
        }

        done()
      })
    })
  })
})
