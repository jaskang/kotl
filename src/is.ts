import { rawType, toString } from './base'
import type { Func } from './types'

/**
 * 判断 val 是否是空值 (null 或 undefined)
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 *
 * @example
 * isNil(null) // => true
 * isNil(undefined) // => true
 * isNil(0) // => false
 * isNil(false) // => false
 */
export function isNullable<T>(val: T): val is Extract<T, null | undefined> {
  return val === null || val === undefined
}

/**
 * 判断 val 是否是 undefined
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isUndefined(val: unknown): val is undefined {
  return typeof val === 'undefined'
}

/**
 * 判断 val 是否是 null
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isNull(val: unknown): val is null {
  return rawType(val) === 'Null'
}

/**
 * 判断 val 是否是 symbol
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isSymbol(val: unknown): val is symbol {
  return typeof val === 'symbol'
}

/**
 * 判断 val 是否是字符串类型
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isString(val: unknown): val is string {
  return typeof val === 'string'
}

/**
 * 判断 val 是否是布尔类型
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isBoolean(val: unknown): val is boolean {
  return typeof val === 'boolean'
}

/**
 * 判断 val 是否是 BigInt 类型
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isBigInt(val: unknown): val is bigint {
  return typeof val === 'bigint'
}

/**
 * 判断 val 是否是数字类型 (非 NaN)
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isNumber(val: unknown): val is number {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * 判断 val 是否是整数 (非 NaN)
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isInt(val: unknown): val is number {
  return isNumber(val) && val % 1 === 0
}

/**
 * 判断 val 是否是浮点数 (非 NaN)
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isFloat(val: unknown): val is number {
  return isNumber(val) && val % 1 !== 0
}

/**
 * 判断 val 是否是数组类型
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isArray(val: unknown): val is unknown[] {
  return Array.isArray(val)
}

/**
 * 判断 val 是否是对象类型，不包括 null。
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isObject<T = unknown>(val: unknown): val is T {
  return val !== null && typeof val === 'object'
}

/**
 * 判断 val 是否是函数类型
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isFunction<T extends Func = Func>(val: unknown): val is T {
  return typeof val === 'function'
}

/**
 * 判断 val 是否是 Promise 类型
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isPromise<T = unknown>(val: any): val is Promise<T> {
  if (!val) return false
  if (!val.then) return false
  if (!isFunction(val.then)) return false
  return true
}

/**
 * 判断 val 是否是 RegExp 类型
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export const isRegExp = (val: unknown): val is RegExp => toString(val) === '[object RegExp]'

/**
 * 判断 val 是否是 Date 类型
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export const isDate = (val: unknown): val is Date => toString(val) === '[object Date]'

/**
 * 判断一个值是否为原始类型（undefined、null、number、string、boolean、symbol、bitint）。
 * @param value 要检查的值
 * @returns {boolean} 检查结果
 */
export function isPrimitive(value: unknown): boolean {
  return (
    value === undefined ||
    value === null ||
    (typeof value !== 'object' && typeof value !== 'function')
  )
}

/**
 * 判断一个值是否为空（空字符串、空数组、空对象、null、undefined）。
 * @param value 要检查的值
 * @returns {boolean} 检查结果
 *
 * @example
 * isEmpty([]); // => true
 * isEmpty(null); // => true
 * isEmpty(undefined); // => true
 * isEmpty({}); // => true
 * isEmpty(''); // => true
 * isEmpty('test'); // => false
 * isEmpty({ a: 5 }); // => false
 * isEmpty([1]); // => false
 * isEmpty(false); // => false
 * isEmpty(true); // => false
 * isEmpty(0); // => false
 */
export function isEmpty(val: unknown) {
  if (isNullable(val)) return true
  if (isString(val)) return val.length === 0
  if (isArray(val)) return val.length === 0
  if (isObject(val)) return Object.keys(val as {}).length === 0
  return false
}

/**
 * 判断两个值是否相等, 支持对象、数组、Set、Map、Date、RegExp 等。
 * @param x 要比较的第一个值
 * @param y 要比较的第二个值
 * @returns {boolean} 判断结果
 */
export function isEqual(val1: any, val2: any): boolean {
  if (val1 === val2) return true

  const type = rawType(val1)
  const type2 = rawType(val2)

  if (type !== type2) return false

  if (typeof val1 !== 'object') {
    return val1 === val2
  } else if (type === 'Date') {
    return val1.getTime() === val2.getTime()
  } else if (type === 'RegExp') {
    return val1.toString() === val2.toString()
  } else if (type === 'Array') {
    if (val1.length !== val2.length) return false
    return val1.every((item: unknown, i: number) => isEqual(item, val2[i]))
  } else {
    const keyArr = Object.keys(val1)
    if (keyArr.length !== Object.keys(val2).length) return false
    return keyArr.every((key: string) => {
      return isEqual(val1[key], val2[key])
    })
  }
}
