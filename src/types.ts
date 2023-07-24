export type AugmentedRequired<T extends object, K extends keyof T = keyof T> = Omit<T, K> &
  Required<Pick<T, K>>

export type Func = (...args: any[]) => any

export type Data = Record<string, any>

export type Flat<T> = T extends Func ? T : T extends object ? { [K in keyof T]: T[K] } : T
