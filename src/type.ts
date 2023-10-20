
import type { Func } from './types'

export function toString (v: unknown):string {
  return Object.prototype.toString.call(v)
}

/**
 * 获取一个值的原始类型
 * @param v 要判断的值
 * @returns {string} 原始类型
 * @example
 * rawType(null) // => 'Null'
 * rawType(undefined) // => 'Undefined'
 * rawType(0) // => 'Number'
 * rawType('') // => 'String'
 * rawType(false) // => 'Boolean'
 * rawType({}) // => 'Object'
 * rawType([]) // => 'Array'
 * rawType(() => {}) // => 'Function'
 * rawType(/a/) // => 'RegExp'
 */
export function rawType(
  val: unknown
):
  | 'Null'
  | 'Undefined'
  | 'Number'
  | 'String'
  | 'Boolean'
  | 'Object'
  | 'Array'
  | 'Function'
  | 'RegExp'
  | 'ArrayBuffer'
  | 'Date'
  | 'Map'
  | 'Set'
  | string {
  return val === null
    ? 'Null'
    : val === undefined
    ? 'Undefined'
    : Object.prototype.toString.call(val).slice(8, -1)
}



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
export function isNil<T>(data: T): data is Extract<T, null | undefined> {
  return data == null
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
  return toString(val) === '[object Null]'
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
  return typeof val === 'string' || val instanceof String
}

/**
 * 判断 val 是否是布尔类型
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isBoolean(val: any): val is boolean {
  return typeof val === 'boolean'
}

/**
 * 判断 val 是否是 BigInt 类型
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isBigInt(val: any): val is bigint {
  return typeof val === 'bigint'
}

/**
 * 判断 val 是否是数字类型 (非 NaN)
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isNumber(val: any): val is number {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * 判断 val 是否是整数 (非 NaN)
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isInt(val: any): val is number {
  return isNumber(val) && val % 1 === 0
}

/**
 * 判断 val 是否是浮点数 (非 NaN)
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isFloat(val: any): val is number {
  return isNumber(val) && val % 1 !== 0
}

/**
 * 判断 val 是否是数组类型
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isArray(val: any): val is unknown[] {
  return Array.isArray(val)
}

/**
 * 判断 val 是否是对象类型，不包括 null。
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isObject(val: any): val is Record<any, any> {
  return val !== null && typeof val === 'object'
}

/**
 * 判断 val 是否是函数类型
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isFunction<T extends Func = Func>(val: any): val is T {
  return typeof val === 'function'
}

/**
 * 判断 val 是否是 Promise 类型
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

/**
 * 判断 val 是否是 RegExp 类型
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export const isRegExp = (val: any): val is RegExp => toString(val) === '[object RegExp]'

/**
 * 判断 val 是否是 Date 类型
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export const isDate = (val: any): val is Date => toString(val) === '[object Date]'

/**
 * 判断一个值是否为原始类型（undefined、null、number、string、boolean、symbol、bitint）。
 * @param value 要检查的值
 * @returns {boolean} 检查结果
 */
export function isPrimitive(value: any): boolean {
  return (
    value === undefined ||
    value === null ||
    (typeof value !== 'object' && typeof value !== 'function')
  )
}

/**
 * 判断一个值是否为空（空字符串、空数组、空对象、空 Set/Map、null、undefined）。
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
export function isEmpty(value: unknown) {
  if (isNil(value)) return true
  if (isString(value)) return value.length === 0
  if (isArray(value)) return value.length === 0
  if (isObject(value)) return Object.keys(value).length === 0
  return false
}

/**
 * 判断两个值是否相等
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
    return val1.every((item: any, i: number) => isEqual(item, val2[i]))
  } else {
    const keyArr = Object.keys(val1)
    if (keyArr.length !== Object.keys(val2).length) return false
    return keyArr.every((key: string) => {
      return isEqual(val1[key], val2[key])
    })
  }
}
