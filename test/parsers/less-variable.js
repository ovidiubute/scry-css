const lvp = require('../../src/parsers/less-variable')

describe('LESS Variable parser', function () {
  describe('#parse', function () {
    it('should parse variable with a hex color value', function () {
      expect(lvp.parse('@link-color:        #428bca;')).to.deep.equal({
        variable: 'link-color', value: '#428bca'
      })
    })

    it('should parse variable with a text color value', function () {
      expect(lvp.parse('@some-color: red;')).to.deep.equal({
        variable: 'some-color', value: 'red'
      })
    })

    it('should parse variable with a rgba color value', function () {
      expect(lvp.parse('@widget-b-color:     rgba(0,0,0,255);')).to.deep.equal({
        variable: 'widget-b-color', value: 'rgba(0,0,0,255)'
      })
    })

    it('should parse variable with a px value', function () {
      expect(lvp.parse('@normal-line-height:   12px;')).to.deep.equal({
        variable: 'normal-line-height', value: '12px'
      })
    })

    it('should parse variable with a percentage value', function () {
      expect(lvp.parse('@widget-min-width: 50%;')).to.deep.equal({
        variable: 'widget-min-width', value: '50%'
      })
    })

    it('should not parse a non variable declaration line', function () {
      expect(lvp.parse('.icon-a {')).to.equal(null)
    })
  })
})
