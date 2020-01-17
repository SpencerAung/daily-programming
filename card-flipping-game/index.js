const _ = require('Ramda')
const { parseOutput, _solitaire, parseInput, safeInput } = require('./helpers')

/**
 * Solitaire, a card flipping game
 */
const solitaire = _.compose(parseOutput, _solitaire, parseInput, safeInput)

module.exports = solitaire
