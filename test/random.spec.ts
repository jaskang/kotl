import { describe, expect, it } from 'vitest'
import { random, draw, shuffle, uid } from '../src'

describe('random', () => {
  it('生成一个随机数', () => {
    const result = random(0, 10)
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(10)
  })
  it('数组中随机抽取一个元素', () => {
    const result = draw([1, 2, 3, 4, 5])
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(5)
  })

  it('随机打乱一个数组', () => {
    const result = shuffle([1, 2, 3, 4, 5])
    expect(result).not.toEqual([1, 2, 3, 4, 5])
  })
  it('随机打乱一个数组：随机后长度必须一致', () => {
    const result = shuffle([1, 2, 3, 4, 5])
    expect(result.length).toBe(5)
  })

  it('生成唯一标识符', () => {
    const result = uid(10, '!@#$%^&*()')
    expect(result.length).toBe(10)
  })
  it('生成唯一标识符，包含特殊字符', () => {
    const result = uid(100, '!@#$%^&*()')
    expect(result).toMatch(/^[A-Za-z0-9!@#$%^&*()]+$/)
  })
})
