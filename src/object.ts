import { toRawType } from './base'
import { isArray, isFunction, isPrimitive } from './is'
import { toInt } from './number'

/**
 * Dynamically get a nested value from an array or
 * object with a string.
 *
 * @example get(person, 'friends[0].name')
 */
export const get = <T = any>(value: any, path: string, defaultValue: T | null = null): T | null => {
  const segments = path.split(/[\.\[\]]/g)
  let current: any = value
  for (const key of segments) {
    if (current === null) return defaultValue
    if (current === undefined) return defaultValue
    if (key.trim() === '') continue
    current = current[key]
  }
  if (current === undefined) return defaultValue
  return current
}

/**
 * Opposite of get, dynamically set a nested value into
 * an object using a key path. Does not modify the given
 * initial object.
 *
 * @example
 * set({}, 'name', 'ra') // => { name: 'ra' }
 * set({}, 'cards[0].value', 2) // => { cards: [{ value: 2 }] }
 */
export const set = <T extends Record<string, any> = any>(obj: T, path: string, value: any): T => {
  if (!obj) return {} as T
  if (!path || !value) return obj
  const segments = path.split(/[\.\[\]]/g).filter(x => !!x.trim())
  const _set = (node: any) => {
    if (segments.length > 1) {
      const key = segments.shift() as string
      const nextIsNum = toInt(segments[0], null) === null ? false : true
      node[key] = node[key] === undefined ? (nextIsNum ? [] : {}) : node[key]
      _set(node[key])
    } else {
      node[segments[0]] = value
    }
  }
  _set(obj)
  return obj
}

/**
 * 拷贝一个对象
 * @param val
 * @returns
 */
export function clone(val: any) {
  if (isPrimitive(val)) return val

  const type = toRawType(val)

  if (isFunction(val)) {
    const tmp = new val.constructor()
    for (const k in val) {
      if (val.hasOwnProperty(k) && tmp[k] !== val[k]) {
        tmp[k] = clone(val[k])
      }
    }
    return tmp
  } else if (type === 'Date') {
    return new Date(+val)
  } else if (type === 'RegExp') {
    const tmp = new RegExp(val.source, val.flags)
    tmp.lastIndex = val.lastIndex
    return tmp
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
    for (const k in val) {
      if (k === '__proto__') {
        Object.defineProperty(tmp, k, {
          value: clone(val[k]),
          configurable: true,
          enumerable: true,
          writable: true,
        })
      } else {
        tmp[k] = clone(val[k])
      }
    }
    return tmp
  }
}
