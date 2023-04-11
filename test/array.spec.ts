import { iterate } from '../src'
import { describe, expect, it } from 'vitest'

describe('iterate', () => {
  it('should iterate a callback n times', () => {
    const result = iterate(5, (acc, idx) => acc + idx, 0)
    expect(result).toBe(15)
  })
})
