import { describe, expect, it } from 'vitest'

import {
  isArray,
  isBigInt,
  isBoolean,
  isDate,
  isEmpty,
  isEqual,
  isFloat,
  isFunction,
  isInt,
  isNull,
  isNumber,
  isObject,
  isPrimitive,
  isRegExp,
  isString,
  isSymbol,
  isUndefined,
} from '../src'

describe('数据类型判断函数测试', () => {
  it('isUndefined', () => {
    expect(isUndefined(undefined)).toBe(true)
    expect(isUndefined(null)).toBe(false)
  })
  it('isNull', () => {
    expect(isNull(null)).toBe(true)
    expect(isNull(undefined)).toBe(false)
  })

  it('isSymbol', () => {
    expect(isSymbol(Symbol('foo'))).toBe(true)
    expect(isSymbol('foo')).toBe(false)
  })
  it('isString', () => {
    expect(isString('foo')).toBe(true)
    expect(isString(123)).toBe(false)
  })
  it('isBoolean', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
    expect(isBoolean(0)).toBe(false)
  })
  it('isBigInt', () => {
    expect(isBigInt(BigInt(123))).toBe(true)
    expect(isBigInt(123)).toBe(false)
  })
  it('isNumber', () => {
    expect(isNumber(123)).toBe(true)
    expect(isNumber(1.23)).toBe(true)
    expect(isNumber(BigInt(123))).toBe(false)
    expect(isNumber('123')).toBe(false)
    expect(isNumber(NaN)).toBe(false)
  })

  it('isInt', () => {
    expect(isInt(42)).toBe(true)
    expect(isInt(4.2)).toBe(false)
    expect(isInt(NaN)).toBe(false)
  })

  it('isFloat', () => {
    expect(isFloat(4.2)).toBe(true)
    expect(isFloat(42)).toBe(false)
    expect(isFloat(NaN)).toBe(false)
  })

  it('isArray', () => {
    expect(isArray([1, 2, 3])).toBe(true)
    expect(isArray({ a: 1 })).toBe(false)
  })

  it('isObject', () => {
    expect(isObject({ a: 1 })).toBe(true)
    expect(isObject(null)).toBe(false)
  })

  it('isFunction', () => {
    expect(isFunction(() => {})).toBe(true)
    expect(isFunction(undefined)).toBe(false)
  })

  it('isRegExp', () => {
    expect(isRegExp(/ab+c/i)).toBe(true)
    expect(isRegExp('/ab+c/i')).toBe(false)
  })

  it('isDate', () => {
    expect(isDate(new Date())).toBe(true)
    expect(isDate('2022-05-18')).toBe(false)
  })

  it('isPrimitive', () => {
    expect(isPrimitive('foo')).toBe(true)
    expect(isPrimitive({})).toBe(false)
    expect(isPrimitive(() => {})).toBe(false)
    expect(isPrimitive(Symbol('bar'))).toBe(true)
    expect(isPrimitive(BigInt(1n))).toBe(true)
    expect(isPrimitive(undefined)).toBe(true)
    expect(isPrimitive(null)).toBe(true)
  })

  it('isEmpty', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty('')).toBe(true)
    expect(isEmpty(0)).toBe(true)
    expect(isEmpty([])).toBe(true)
    expect(isEmpty({})).toBe(true)
    expect(isEmpty(new Set())).toBe(true)

    expect(isEmpty(false)).toBe(false)
    expect(isEmpty([1, 2, 3])).toBe(false)
    expect(isEmpty({ a: 1 })).toBe(false)
    expect(isEmpty('   ')).toBe(false)
    expect(isEmpty(42)).toBe(false)
    expect(isEmpty(true)).toBe(false)
    expect(isEmpty(() => {})).toBe(false)
  })

  it('isEqual', () => {
    expect(isEqual({ a: 1 }, { a: 1 })).toBe(true)
    expect(isEqual({ a: 1 }, { a: 2 })).toBe(false)
    expect(isEqual(new Date('1970-01-01'), new Date('1970-01-01'))).toBe(true)
    expect(isEqual(/ab+c/i, /ab+c/i)).toBe(true)
    expect(
      isEqual(
        () => {},
        () => {
          console.log()
        }
      )
    ).toBe(false)
    expect(isEqual({ a: { b: 2 } }, { a: { b: 2 } })).toBe(true)
  })
})
