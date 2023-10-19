import { rawType } from './base'
import { isArray, isFunction, isPrimitive } from './is'
import { toInt } from './number'

/**
 * 抖动 (shake) 一个对象，删除值为 undefined 的属性
 * @param obj
 * @param filter
 * @returns
 */
export const shake = <RemovedKeys extends string, T>(
  obj: T,
  filter: (key: keyof T, value: any) => boolean = (k, v) => v === undefined
): Omit<T, RemovedKeys> => {
  if (!obj) return {} as T
  const keys = Object.keys(obj) as (keyof T)[]
  return keys.reduce((acc, key) => {
    if (filter(key, obj[key])) {
      return acc
    } else {
      acc[key] = obj[key]
      return acc
    }
  }, {} as T)
}

/**
 * Dynamically get a nested value from an array or
 * object with a string.
 *
 * @example get(person, 'friends[0].name')
 *
 * @link https://github.com/developit/dlv/blob/master/index.js
 */
export function get<T = any>(obj: any, path: string, defaultValue: T | null = null) {
  const keys = path.split(/[\.\[\]]/g).filter(Boolean)
  const len = keys.length
  for (let i = 0; i < len; i++) {
    if (obj === null || obj === undefined) return defaultValue
    obj = obj ? obj[keys[i]] : undefined
  }
  return obj === undefined ? defaultValue : obj
}

/**
 * Opposite of get, dynamically set a nested value into
 * an object using a key path. Does not modify the given
 * initial object.
 *
 * @example
 * set({}, 'name', 'ra') // => { name: 'ra' }
 * set({}, 'cards[0].value', 2) // => { cards: [{ value: 2 }] }
 *
 * @link https://github.com/lukeed/dset/blob/master/src/index.js
 */
export function set<T = any>(obj: T, path: string, val: any) {
  const keys = path.split(/[\.\[\]]/g).filter(Boolean)
  const len = keys.length
  let i = 0
  let t: any = obj
  let x
  for (; i < len; i++) {
    const k = keys[i]
    if (k === '__proto__' || k === 'constructor' || k === 'prototype') break
    if (i === len - 1) {
      t = t[k] = val
    } else {
      t = t[k] =
        typeof (x = t[k]) === typeof keys
          ? x
          : (keys as unknown as number[])[i] * 0 !== 0 || !!~('' + keys[i]).indexOf('.')
          ? {}
          : []
    }
  }
}

function _cloneRegExp(pattern: RegExp) {
  return new RegExp(
    pattern.source,
    (pattern.global ? 'g' : '') +
      (pattern.ignoreCase ? 'i' : '') +
      (pattern.multiline ? 'm' : '') +
      (pattern.sticky ? 'y' : '') +
      (pattern.unicode ? 'u' : '')
  )
}

/**
 * 拷贝一个对象
 * @param val
 * @returns
 */
export function clone(val: any) {
  if (isPrimitive(val)) return val

  const type = rawType(val)

  if (isFunction(val)) {
    return val.bind({})
  } else if (type === 'Date') {
    return new Date(val.valueOf())
  } else if (type === 'RegExp') {
    return _cloneRegExp(val)
  } else if (type === 'Set') {
    const tmp = new Set()
    val.forEach((i: any) => {
      tmp.add(clone(i))
    })
    return tmp
  } else if (type === 'Map') {
    const tmp = new Map()
    val.forEach((val: any, key: any) => {
      tmp.set(clone(key), clone(val))
    })
    return tmp
  } else if (type === 'ArrayBuffer') {
    return val.slice(0)
  } else if (isArray(val)) {
    const tmp: any[] = []
    for (let index = 0; index < val.length; index++) {
      tmp.push(clone(val[index]))
    }
    return tmp
  } else {
    const tmp: any = {} // null
    const keys = Object.keys(val)
    for (const k of keys) {
      tmp[k] = clone(val[k])
    }
    return tmp
  }
}
