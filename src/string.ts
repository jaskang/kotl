import { get } from './object'

/**
 * template is used to replace data by name in template strings.
 * The default expression looks for {{name}} to identify names.
 *
 * Ex. template('Hello, {{name}}', { name: 'ray' })
 * Ex. template('Hello, <name>', { name: 'ray' }, /<(.+?)>/g)
 */
export const template = (
  str: string,
  data: Record<string, any>,
  options: {
    regex?: RegExp
    defaultValue?: string
  }
) => {
  const { regex = /\{\{(.+?)\}\}/g, defaultValue = '' } = options || {}

  return Array.from(str.matchAll(regex)).reduce((acc, match) => {
    return acc.replace(match[0], get(data, match[1]!, defaultValue))
  }, str)
}

/**
 * 去除字符串两端的空格
 * @param str - 要处理的字符串
 * @param charsToTrim - 要去除的字符，默认为空格
 * @returns string
 */
export const trim = (str: string | null | undefined, charsToTrim = ' ') => {
  if (!str) return ''
  const toTrim = charsToTrim.replace(/[\W]{1}/g, '\\$&')
  const regex = new RegExp(`^[${toTrim}]+|[${toTrim}]+$`, 'g')
  return str.replace(regex, '')
}

/**
 * 将 windows 路径字符串中的 '\\' 转换为 '/'
 * @param p 路径字符串
 * @returns string
 */
export function slash(p: string): string {
  return p.replace(/\\/g, '/')
}
