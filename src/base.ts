export const toString = (v: unknown) => Object.prototype.toString.call(v)

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
