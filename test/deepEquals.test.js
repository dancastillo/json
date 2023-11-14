import test, { describe } from 'node:test'
import assert from 'node:assert/strict';
import { deepEqual } from '../lib/deepEqual.js'

describe('deepEquals', () => {
  const a = { a: 1 }
  const b = { a: 1 }
  const c = { c: 'foo' }

  test('passing test', () => {
    assert.strictEqual(deepEqual(a, b), true)
  })

  test('failing test', () => {
    assert.strictEqual(deepEqual(a, c), false)
  })
})
