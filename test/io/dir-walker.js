const DirWalker = require('../../src/io/dir-walker')
const fixture = require('../fixtures/walk-directory/base')

describe('DirWalker', () => {
  describe('#parse', () => {
    it('should return all LESS file names from a directory', (done) => {
      DirWalker.files('test/fixtures/walk-directory', '.less').then((files) => {
        expect(files.length).to.equal(fixture.files.length)
        for (let i = 0; i < files.length; i++) {
          expect(files[i]).to.have.string(fixture.files[i])
        }

        done()
      }, (err) => {
        assert.fail(false, true, err)
      })
    })

    it('should return error given a non-existent directory', (done) => {
      DirWalker.files('test/fixtures/no-way-this-exists', '.less').then((files) => {
        assert.fail(false, true, 'Should have rejected the promise.')
      }, (err) => {
        expect(err).to.be.instanceof(Error)

        done()
      })
    })

    it('should throw error if not given an extension', () => {
      expect(DirWalker.files.bind(DirWalker, 'test/fixtures/walk-directory')).to.throw(Error)
    })
  })
})
