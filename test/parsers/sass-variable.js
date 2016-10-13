/* global describe */
/* global expect */
/* global it */
const SassParser = require('../../src/parsers/sass-variable')

describe('SASS Variable parser', () => {
  describe('/parsers/sass-variable', () => {
    it('should parse variable with a hex color value', () => {
      expect(SassParser.parse({
        string: '$link-color:        #428bca;',
        lineNumber: 2,
      })).to.deep.equal({
        variable: 'link-color',
        value: '#428bca',
        lineNumber: 2,
      })
    })

    it('should parse variable with a text color value', () => {
      expect(SassParser.parse({
        string: '$some-color: red;',
        lineNumber: 24,
      })).to.deep.equal({
        variable: 'some-color',
        value: 'red',
        lineNumber: 24,
      })
    })

    it('should parse variable with a rgba color value', () => {
      expect(SassParser.parse({
        string: '$widget-b-color:     rgba(0,0,0,255);',
        lineNumber: 51,
      })).to.deep.equal({
        variable: 'widget-b-color',
        value: 'rgba(0,0,0,255)',
        lineNumber: 51,
      })
    })

    it('should parse variable with a px value', () => {
      expect(SassParser.parse({
        string: '$normal-line-height:   12px;',
        lineNumber: 32,
      })).to.deep.equal({
        variable: 'normal-line-height',
        value: '12px',
        lineNumber: 32,
      })
    })

    it('should parse variable with a percentage value', () => {
      expect(SassParser.parse({
        string: '$widget-min-width: 50%;',
        lineNumber: 10,
      })).to.deep.equal({
        variable: 'widget-min-width',
        value: '50%',
        lineNumber: 10,
      })
    })

    it('should parse variable with a text value', () => {
      expect(SassParser.parse({
        string: '$widget-align: normal;',
        lineNumber: 42,
      })).to.deep.equal({
        variable: 'widget-align',
        value: 'normal',
        lineNumber: 42,
      })
    })

    it('should not parse a non variable declaration line', () => {
      expect(SassParser.parse({
        string: '.icon-a {',
        lineNumber: 2,
      })).to.equal(null)
    })
  })
})
