/* eslint-disable camelcase */
const _ = require('ramda')

const greater = (a, b) => a > b ? a : b
const max = _.reduce(greater, -Infinity)
const count = _.reduce((acc, cur) => {
  return { ...acc, [cur]: (acc[cur] || 0) + 1 }
}, {})
const timesPair = ([key, value]) => parseInt(key) * value

/**
 * Transform the input like this
 * [2, 3, 5, 5, 6]
 * -> { 2: 1, 3: 1, 5: 2, 6: 1 }
 * -> [['2',1], ['3', 1], ['5', 2], ['6', 1]]
 * -> [2, 3, 10, 6]
 * -> 10
 */
const yahtzee_upper = _.compose(max, _.map(timesPair), _.toPairs, count)

module.exports = yahtzee_upper
