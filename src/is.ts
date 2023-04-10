import { toString } from './base'

export const isSymbol = (val: any): val is symbol => typeof val === 'symbol'
export const isString = (val: any): val is string => typeof val === 'string'
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isBigInt = (val: any): val is bigint => typeof val === 'bigint'
export const isUndefined = (val: any): val is undefined => toString(val) === '[object Undefined]'
export const isNull = (val: any): val is null => toString(val) === '[object Null]'

export const isInt = (val: any): val is number => isNumber(val) && val % 1 === 0
export const isFloat = (val: any): val is number => isNumber(val) && val % 1 !== 0

export const isArray = (val: any): val is unknown[] => Array.isArray(val)

export const isObject = (val: any): val is object => !!val && val.constructor === Object

export const isFunction = <T extends Function>(val: any): val is T => typeof val === 'function'

export const isRegExp = (val: any): val is RegExp => toString(val) === '[object RegExp]'
export const isDate = (val: any): val is Date => toString(val) === '[object Date]'

// @ts-ignore
export const isBrowser = typeof window !== 'undefined'

/**
 * Checks if the given value is primitive.
 *
 * Primitive Types: number , string , boolean , symbol, bigint, undefined, null
 *
 * @param {*} value value to check
 * @returns {boolean} result
 */
export const isPrimitive = (value: any): boolean =>
  value === undefined ||
  value === null ||
  (typeof value !== 'object' && typeof value !== 'function')

export const isEmpty = (value: any) => {
  if (value === true || value === false) return true
  if (value === null || value === undefined) return true
  if (isNumber(value)) return value === 0
  if (isDate(value)) return isNaN(value.getTime())
  if (isFunction(value)) return false
  if (isSymbol(value)) return false
  const length = (value as any).length
  if (isNumber(length)) return length === 0
  const size = (value as any).size
  if (isNumber(size)) return size === 0
  const keys = Object.keys(value).length
  return keys === 0
}

export const isEqual = <TType>(x: TType, y: TType): boolean => {
  if (Object.is(x, y)) return true
  if (x instanceof Date && y instanceof Date) {
    return x.getTime() === y.getTime()
  }
  if (x instanceof RegExp && y instanceof RegExp) {
    return x.toString() === y.toString()
  }
  if (typeof x !== 'object' || x === null || typeof y !== 'object' || y === null) {
    return false
  }
  const keysX = Reflect.ownKeys(x as unknown as object) as (keyof typeof x)[]
  const keysY = Reflect.ownKeys(y as unknown as object)
  if (keysX.length !== keysY.length) return false
  for (let i = 0; i < keysX.length; i++) {
    if (!Reflect.has(y as unknown as object, keysX[i])) return false
    if (!isEqual(x[keysX[i]], y[keysX[i]])) return false
  }
  return true
}
