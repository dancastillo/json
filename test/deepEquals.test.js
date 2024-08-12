import { describe, test } from 'node:test'
import { deepEqual } from '../lib/deepEqual.js'

describe('deepEquals', () => {
  const a = { a: 1 }
  const b = { a: 1 }
  const c = { c: 'foo' }

  test('passing test', (t) => {
    t.plan(1)
    t.assert.strictEqual(deepEqual(a, b), true)
  })

  test('failing test', (t) => {
    t.plan(1)
    t.assert.strictEqual(deepEqual(a, c), false)
  })

  test('return false for not typeof a', (t) => {
    t.plan(1)
    t.assert.strictEqual(deepEqual(null, b), false)
  })

  test('return false for not typeof b', (t) => {
    t.plan(1)
    t.assert.strictEqual(deepEqual(a, null), false)
  })

  test('return false for unequal obj lens', (t) => {
    t.plan(1)
    t.assert.strictEqual(deepEqual(a, { a: true, b: true, c: true }), false)
  })
})
