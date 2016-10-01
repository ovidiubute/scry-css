const { less: LessVariableParser } = require('../../src/parsers')

describe('LESS Variable parser', function () {
  describe('#parse', function () {
    it('should parse variable with a hex color value', function () {
      expect(LessVariableParser.parse({
        string: '@link-color:        #428bca;',
        lineNumber: 2
      })).to.deep.equal({
        variable: 'link-color',
        value: '#428bca',
        lineNumber: 2
      })
    })

    it('should parse variable with a text color value', function () {
      expect(LessVariableParser.parse({
        string: '@some-color: red;',
        lineNumber: 24
      })).to.deep.equal({
        variable: 'some-color',
        value: 'red',
        lineNumber: 24
      })
    })

    it('should parse variable with a rgba color value', function () {
      expect(LessVariableParser.parse({
        string: '@widget-b-color:     rgba(0,0,0,255);',
        lineNumber: 51
      })).to.deep.equal({
        variable: 'widget-b-color',
        value: 'rgba(0,0,0,255)',
        lineNumber: 51
      })
    })

    it('should parse variable with a px value', function () {
      expect(LessVariableParser.parse({
        string: '@normal-line-height:   12px;',
        lineNumber: 32
      })).to.deep.equal({
        variable: 'normal-line-height',
        value: '12px',
        lineNumber: 32
      })
    })

    it('should parse variable with a percentage value', function () {
      expect(LessVariableParser.parse({
        string: '@widget-min-width: 50%;',
        lineNumber: 10
      })).to.deep.equal({
        variable: 'widget-min-width',
        value: '50%',
        lineNumber: 10
      })
    })

    it('should parse variable with a text value', function () {
      expect(LessVariableParser.parse({
        string: '@widget-align: normal;',
        lineNumber: 42
      })).to.deep.equal({
        variable: 'widget-align',
        value: 'normal',
        lineNumber: 42
      })
    })

    it('should not parse a non variable declaration line', function () {
      expect(LessVariableParser.parse({
        string: '.icon-a {',
        lineNumber: 2
      })).to.equal(null)
    })
  })
})
