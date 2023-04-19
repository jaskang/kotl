export const toString = (v: any) => Object.prototype.toString.call(v)

/**
 * 获取一个值的原始类型
 * extract "RawType" from strings like "[object RawType]"
 * @param v 要判断的值
 * @returns {string} 原始类型
 */
export function toRawType(
  v: any
): 'Object' | 'Array' | 'ArrayBuffer' | 'Date' | 'RegExp' | 'Map' | 'Set' | string {
  if (v === null) return 'null'
  const type = toString(v).slice(8, -1).toLowerCase()
  return typeof v === 'object' || typeof v === 'function' ? type : typeof v
}

/**
 * 一个空函数
 */
export const NOOP = () => {}
