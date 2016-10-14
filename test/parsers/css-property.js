const CssPropertyParser = require('../../src/parsers/css-property')

describe('/parsers/css-property', function () {
  describe('#parse', function () {
    it('should parse a CSS property', function () {
      expect(CssPropertyParser.parse({
        string: 'margin: 1px solid #45efb0;',
        lineNumber: 12
      })).to.deep.equal({
        property: 'margin',
        value: '1px solid #45efb0',
        lineNumber: 12
      })
    })
  })
})
