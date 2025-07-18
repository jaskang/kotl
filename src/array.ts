/**
 * 从数组中移除一个元素
 * @param array - 要移除元素的数组
 * @param value - 要移除的元素
 * @returns {boolean} 移除是否成功
 */
export function remove<T>(array: T[], value: T) {
  const index = array.indexOf(value)
  if (index >= 0) {
    array.splice(index, 1)
    return true
  }
  return false
}

/**
 * 迭代一个回调函数n次
 *
 * 有点像forEach和reduce的结合，用于运行函数 n 次以生成值。
 * iterate 函数接受计数（运行回调的次数），回调函数和初始值。
 * 回调将作为reducer运行计数多次，然后返回累积值。
 *
 * @param count - 运行回调的次数
 * @param func  - 回调函数, 接受当前值和迭代次数 (从1开始)
 * @param initValue - 初始值
 * @returns
 */
export function iterate<T>(count: number, func: (currentValue: T, iteration: number) => T, initValue: T) {
  let value = initValue
  for (let i = 1; i <= count; i++) {
    value = func(value, i)
  }
  return value
}
