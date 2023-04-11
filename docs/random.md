# random 随机

## random

生成随机数

**Signature:**

```typescript
random: (min: number, max: number) => number
```

## draw variable

从数组中随机抽取一个元素

**Signature:**

```typescript
draw: <T>(array: readonly T[]) => T | null
```

## shuffle variable

随机打乱一个数组。

**Signature:**

```typescript
shuffle: <T>(array: readonly T[]) => T[]
```

## uid variable

生成唯一标识符

**Signature:**

```typescript
uid: (length: number, specials?: string) => string
```
