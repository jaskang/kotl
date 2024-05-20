export type AugmentedRequired<T extends object, K extends keyof T = keyof T> = Omit<T, K> &
  Required<Pick<T, K>>

export type Func = (...args: unknown[]) => unknown

export type Data = Record<string, unknown>

export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

export type PrettifyNested<T> = {
  [K in keyof T]: T[K] extends Func ? T[K] : T[K] extends object ? PrettifyNested<T[K]> : T[K]
} & {}
