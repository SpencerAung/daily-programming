const _ = require('Ramda')

const flip = _.curry((cur, input) => input.map((v, i) => {
  if (i === cur - 1 && v === 0) return 1
  else if (i === cur + 1 && v === 0) return 1
  else if (i === cur) return '.'
  return v
}))

const safeInput = (input) => {
  if (!input) {
    return ''
  }

  if (typeof input === 'string') {
    return input
  }

  return ''
}

const parseInput = input => input.split('').reduce((acc, v) => {
  if (v === '1') return acc.concat([1])
  else if (v === '0') return acc.concat([0])
  else if (v === '.') return acc.concat(['.'])
  return acc
}, [])

const parseOutput = result => result.length ? result.join(' ') : 'no solution'

const hasSolution = input => input.indexOf(1) !== -1

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

const solitaire = _.compose(parseOutput, _solitaire, parseInput, safeInput)

module.exports = solitaire
