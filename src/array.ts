/**
 * Returns a new array with the elements in reverse order
 * @param count - number of times to iterate
 * @param func  - function to call on each iteration
 * @param initValue - initial value to pass to the function
 * @returns
 */
export const iterate = <T>(
  count: number,
  func: (currentValue: T, iteration: number) => T,
  initValue: T
) => {
  let value = initValue
  for (let i = 0; i <= count; i++) {
    value = func(value, i)
  }
  return value
}
