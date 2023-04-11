import { iterate } from './array'

/**
 * 生成随机数
 * @param min 最小值 (包含)
 * @param max 最大值 (包含)
 * @returns 随机数
 */
export const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * 从数组中随机抽取一个元素
 * @param array 数组
 * @returns 随机抽取的元素
 */
export const draw = <T>(array: readonly T[]): T | null => {
  const max = array.length
  if (max === 0) {
    return null
  }
  const index = random(0, max - 1)
  return array[index]
}

/**
 * 随机打乱一个数组。
 * @param array 数组
 * @returns 随机打乱的数组 (新数组)
 */
export const shuffle = <T>(array: readonly T[]): T[] => {
  return array
    .map(a => ({ rand: Math.random(), value: a }))
    .sort((a, b) => a.rand - b.rand)
    .map(a => a.value)
}

/**
 * 生成唯一标识符
 * @param length 长度
 * @param specials 特殊字符
 * @returns 唯一标识符
 */
export const uid = (length: number, specials: string = '') => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' + specials
  return iterate(
    length,
    acc => {
      return acc + characters.charAt(random(0, characters.length - 1))
    },
    ''
  )
}
