/* eslint-env jest */
const smorse = require('./index')

describe('smooshed-morse-code', () => {
  it('returns the morse code', () => {
    expect(smorse('sos')).toBe('...---...')
    expect(smorse('daily')).toBe('-...-...-..-.--')
    expect(smorse('programmer')).toBe('.--..-.-----..-..-----..-.')
    expect(smorse('bits')).toBe('-.....-...')
    expect(smorse('three')).toBe('-.....-...')
  })
})
