export const toInt = (value: unknown, defaultValue?: number): number | undefined => {
  if (value === null || value === undefined) {
    return defaultValue
  }
  const result = parseInt(`${value}`)
  return isNaN(result) ? defaultValue : result
}

export const toNumber = (value: unknown, defaultValue?: number): number | undefined => {
  if (value === null || value === undefined) {
    return defaultValue
  }
  const result = parseFloat(`${value}`)
  return isNaN(result) ? defaultValue : result
}
