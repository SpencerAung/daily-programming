/* eslint-disable camelcase */
const _ = require('ramda')

const greater = (a, b) => a > b ? a : b
const max = _.reduce(greater, -Infinity)
const count = _.reduce((acc, cur) => ({ ...acc, [cur]: (acc[cur] || 0) + cur }), {})

/**
 * Transform the input like this
 * [2, 3, 5, 5, 6]
 * -> { 2: 2, 3: 3, 5: 10, 6: 6 }
 * -> [2, 3, 10, 6]
 * -> 10
 */
const yahtzee_upper = _.compose(max, _.values, count)

module.exports = yahtzee_upper
