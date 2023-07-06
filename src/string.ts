/**
 * 去除字符串两端的空格
 * @param str - 要处理的字符串
 * @param charsToTrim - 要去除的字符，默认为空格
 * @returns string
 */
export const trim = (str: string | null | undefined, charsToTrim: string = ' ') => {
  if (!str) return ''
  const regex = new RegExp(`^[${charsToTrim}]+|[${charsToTrim}]+$`, 'g')
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