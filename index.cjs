'use strict'

const deepEqual = function (a, b) {
  if (a === b) return true

  if (typeof a !== 'object' || !a || typeof b !== 'object' || !b) {
    return false
  }

  const keysA = Object.keys(a)
  const keysB = Object.keys(b)

  if (keysA.length !== keysB.length) return false

  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false
  }

  return true
}

exports.deepEqual = deepEqual
