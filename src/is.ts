import { toString } from './base'

/**
 * 判断 val 是否是 undefined
 *
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export const isUndefined = (val: any): val is undefined => toString(val) === '[object Undefined]'

/**
 * 判断 val 是否是 null
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export const isNull = (val: any): val is null => toString(val) === '[object Null]'

/**
 * 判断 val 是否是 symbol
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export const isSymbol = (val: any): val is symbol => typeof val === 'symbol'

/**
 * 判断 val 是否是字符串类型
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export const isString = (val: any): val is string => typeof val === 'string'

/**
 * 判断 val 是否是布尔类型
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'

/**
 * 判断 val 是否是 BigInt 类型
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export const isBigInt = (val: any): val is bigint => typeof val === 'bigint'

/**
 * 判断 val 是否是数字类型 (非 NaN)
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export const isNumber = (val: any): val is number => typeof val === 'number' && !isNaN(val)

/**
 * 判断 val 是否是整数 (非 NaN)
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export const isInt = (val: any): val is number => isNumber(val) && val % 1 === 0

/**
 * 判断 val 是否是浮点数 (非 NaN)
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export const isFloat = (val: any): val is number => isNumber(val) && val % 1 !== 0

/**
 * 判断 val 是否是数组类型
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export const isArray = (val: any): val is unknown[] => Array.isArray(val)

/**
 * 判断 val 是否是对象类型，但不包括 null。
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export const isObject = (val: any): val is object => !!val && val.constructor === Object

/**
 * 判断 val 是否是函数类型
 * @param val 要判断的值
 * @returns {boolean} 判断结果
 */
export const isFunction = <T extends Function>(val: any): val is T => typeof val === 'function'

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
 * 判断是否在浏览器环境下运行
 * @returns {boolean} 判断结果
 */
// @ts-ignore
export const isBrowser = typeof window !== 'undefined'

/**
 * 判断一个值是否为原始类型（undefined、null、number、string、boolean、symbol、bitint）。
 * @param value 要检查的值
 * @returns {boolean} 检查结果
 */
export const isPrimitive = (value: any): boolean =>
  value === undefined ||
  value === null ||
  (typeof value !== 'object' && typeof value !== 'function')

/**
 * 判断一个值是否为空（没有属性或长度为 0）。
 * @param value 要检查的值
 * @returns {boolean} 检查结果
 */
export const isEmpty = (value: any) => {
  if (value === true || value === false) return false
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

/**
 * 判断两个值是否相等
 * @param x 要比较的第一个值
 * @param y 要比较的第二个值
 * @returns {boolean} 判断结果
 */
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
