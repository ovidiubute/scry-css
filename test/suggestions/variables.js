const { match } = require('../../src/suggestions/variables')

describe('#match', () => {
  it('should match properties with candidates and order desc by score', () => {
    expect(match('width', [
      'global-width',
      'widget-width',
      'some-random-prop-width',
      'color-deep',
      'border-layout',
      'flex',
      'align-position'
    ].map((name) => {
      return {
        prop: name,
        random: 2
      }
    }), 'prop')).to.deep.equal([
      'global-width',
      'some-random-prop-width',
      'widget-width'
    ].map((name) => {
      return {
        prop: name,
        random: 2
      }
    }))
  })

  it('should not match properties with invalid candidates', () => {
    expect(match('width', [
      'color-deep',
      'border-layout',
      'flex',
      'align-position'
    ].map((name) => {
      return {
        prop: name,
        random: 9
      }
    }), 'prop')).to.deep.equal([])
  })
})
