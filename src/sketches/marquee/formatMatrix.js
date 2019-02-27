import { compose, filter, map, split } from 'ramda'
import { rotate2dArray } from '../../utils/rotate2dArray'
import { SPACER } from './consts'

const flipVals = (arr) =>
  arr.map((arr2) => arr2.map((val) => (val === '0' ? 1 : 0)))

const pad = (arr) => [].concat(arr, [SPACER])

export const formatMatrix = (st) =>
  compose(
    pad,
    rotate2dArray,
    flipVals,
    map(split('')),
    filter(Boolean),
    split(/\n/)
  )(st)
