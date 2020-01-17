/* eslint-env jest */
const solitaire = require('./index')
const { flip, parseOutput, parseInput, _solitaire, safeInput, hasSolution } = require('./helpers')

describe('card flipping game(solitaire)', () => {
  describe('flip', () => {
    it('flips adjacent zeros', () => {
      expect(flip(1, [0, 1, 0])).toEqual([1, '.', 1])
      expect(flip(1, ['.', 1, 0])).toEqual(['.', '.', 1])
    })

    it('flips adjacent ones', () => {
      expect(flip(1, [1, 1, 1])).toEqual([0, '.', 0])
      expect(flip(1, ['.', 1, 1])).toEqual(['.', '.', 0])
    })
  })

  describe('parseOutput', () => {
    it('returns no solution for empty array', () => {
      expect(parseOutput([])).toBe('no solution')
    })

    it('pretty prints solution', () => {
      expect(parseOutput([1, 2, 3])).toBe('1 2 3')
    })
  })

  describe('parseInput', () => {
    it('returns empty array for empty string', () => {
      expect(parseInput('')).toEqual([])
    })

    it('returns array with ones, zeros and dots', () => {
      expect(parseInput('101')).toEqual([1, 0, 1])
      expect(parseInput('1.0')).toEqual([1, '.', 0])
      expect(parseInput('1a.0so')).toEqual([1, '.', 0])
    })
  })

  describe('safeInput', () => {
    it('returns an empty string if input is not string', () => {
      expect(safeInput(null)).toBe('')
      expect(safeInput(undefined)).toBe('')
      expect(safeInput([])).toBe('')
      expect(safeInput({ a: 'a' })).toBe('')
      expect(safeInput(true)).toBe('')
    })

    it('returns orignal string', () => {
      expect(safeInput('hello')).toBe('hello')
      expect(safeInput('false')).toBe('false')
      expect(safeInput(String(123))).toBe('123')
    })
  })

  describe('hasSolution', () => {
    it('returns true if array contains 1', () => {
      expect(hasSolution([1, 0, 0])).toBe(true)
      expect(hasSolution([1, '.'])).toBe(true)
    })

    it('retuns false if array does not contain 1', () => {
      expect(hasSolution([0, 0])).toBe(false)
      expect(hasSolution(['.', 0])).toBe(false)
    })
  })

  describe('_solitaire', () => {
    it('returns an empty array', () => {
      expect(_solitaire([0, 0, 0])).toEqual([])
      expect(_solitaire(['.', '.', 0])).toEqual([])
      expect(_solitaire([0, 1, 0, 1, '.', 0, 0])).toEqual([])
      expect(_solitaire([0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1])).toEqual([])
    })

    it('returns solution', () => {
      expect(_solitaire([0, 1, 0, 0, 1, 1, 0])).toEqual([1, 0, 2, 3, 5, 4, 6])
      expect(_solitaire([0, 1, 0])).toEqual([1, 0, 2])
    })
  })

  describe('solitaire', () => {
    it('returns no solution', () => {
      expect(solitaire('000')).toBe('no solution')
      expect(solitaire('0101.00')).toBe('no solution')
      expect(solitaire('...00')).toBe('no solution')
      expect(solitaire('01001100111')).toBe('no solution')
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
      expect(solitaire('0100110')).toBe('1 0 2 3 5 4 6')
      expect(solitaire('100001100101000')).toBe('0 1 2 3 4 6 5 7 8 11 10 9 12 13 14')
    })
  })
})
