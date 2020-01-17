/* eslint-env jest */
const solitaire = require('./index')

describe('card flipping game(solitaire)', () => {
  it('returns no solution', () => {
    expect(solitaire('000')).toBe('no solution')
    expect(solitaire('0101.00')).toBe('no solution')
    expect(solitaire('...00')).toBe('no solution')
  })

  it('returns no solution for invalid input', () => {
    expect(solitaire('')).toBe('no solution')
    expect(solitaire([])).toBe('no solution')
    expect(solitaire(false)).toBe('no solution')
    expect(solitaire(true)).toBe('no solution')
    expect(solitaire(undefined)).toBe('no solution')
    expect(solitaire(null)).toBe('no solution')
    expect(solitaire('uuuu')).toBe('no solution')
  })

  it('returns a solution sequence', () => {
    expect(solitaire('0100110')).not.toBe('no solution')
    expect(solitaire('010')).toBe('1 0 2')
    expect(solitaire('0101')).toBe('1 0 2 3')
  })
})
