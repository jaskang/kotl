/**
 * 判断是否在 Node 环境中
 */
export const isNode = () => typeof process !== 'undefined' && process.versions != null && process.versions.node != null
