const _ = require('Ramda')

/**
 * Flip the adjacent zeros of input[cur] to 1, mark input[cur] as empty by inserting '.'
 * @example
 * // returns [1, '.', 1, 0]
 * flip(1, [0,1,0,0])
 */
const flip = _.curry((cur, input) => input.map((v, i) => {
  if (i === cur - 1 && v === 0) return 1
  else if (i === cur + 1 && v === 0) return 1
  else if (i === cur) return '.'
  return v
}))

/**
 * Returns empty string if input is not a string
 * @example
 * // returns ''
 * safeInput(null)
 * @exmaple
 * // returns '0101'
 * safeInput('0101')
 */
const safeInput = (input) => {
  if (!input) {
    return ''
  }

  if (typeof input === 'string') {
    return input
  }

  return ''
}

/**
 * Prepare array for _solitaire. Convert string 1s and 0s to number type.
 * Keep '.' as is. Remove other characters.
 * @example
 * // returns [1,0,1,1]
 * parseInput('1011')
 * @example
 * // returns []
 * parseInput('something')
 * @example
 * // returns [1,0,1,'.',1]
 * parseInput('101.1')
 */
const parseInput = input => input.split('').reduce((acc, v) => {
  if (v === '1') return acc.concat([1])
  else if (v === '0') return acc.concat([0])
  else if (v === '.') return acc.concat(['.'])
  return acc
}, [])

/**
 * Prepares output for solitaire.
 * if result array is empty, it means there is no solution
 * otherwise, pretty print solution steps
 * @example
 * // returns 'no solution'
 * parseOutput([])
 * @example
 * // returns '1 0 2 3'
 * parseOutput([1,0,2,3])
 */
const parseOutput = result => result.length ? result.join(' ') : 'no solution'

/**
 * Check if there is any possible solutions by looking into presentance of 1s
 */
const hasSolution = input => input.indexOf(1) !== -1

/**
 * Remove 1s and flip adjacents 0s into 1s. Repeats utils every item is removed.
 * If there are no more 1s to remove and 0 still remains, it has no solution.
 * In this of no solution, returns an empty array
 * If there is a solution, returns the index of 1s removed in their removed order.
 * @example
 * // returns []
 * _solitaire([0,0,'.'])
 * @example
 * // returns [1,0,2,3]
 * _solitaire([0,1,0,1])
 */
function _solitaire (input, cur = 0, steps = []) {
  if (!hasSolution(input)) {
    return []
  }

  // if every item is 1, we can just return the items' indexes as solution
  if (input.every(v => v === 1)) {
    return input.map((_, i) => i)
  }

  if (input[cur] === 0) {
    return _solitaire(input, input.indexOf(1), steps)
  }

  if (input[cur] === 1) {
    const flipped = flip(cur, input)
    const newSteps = steps.concat([cur])

    if (flipped.every(v => v === '.')) {
      return newSteps
    }

    if (!hasSolution(flipped)) {
      return []
    }

    return _solitaire(flipped, flipped.indexOf(1), newSteps)
  }
}

/**
 * Solitaire, a card flipping game
 */
const solitaire = _.compose(parseOutput, _solitaire, parseInput, safeInput)

module.exports = solitaire
