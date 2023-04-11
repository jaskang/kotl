# is 判断

## isUndefined

判断 val 是否是 undefined

**Signature:**

```typescript
isUndefined: (val: any) => val is undefined
```

## isNull

判断 val 是否是 null

**Signature:**

```typescript
isNull: (val: any) => val is null
```

## isSymbol

判断 val 是否是 symbol

**Signature:**

```typescript
isSymbol: (val: any) => val is symbol
```

## isString

判断 val 是否是字符串类型

**Signature:**

```typescript
isString: (val: any) => val is string
```

## isBoolean

判断 val 是否是布尔类型

**Signature:**

```typescript
isBoolean: (val: any) => val is boolean
```

## isBigInt

判断 val 是否是 BigInt 类型

**Signature:**

```typescript
isBigInt: (val: any) => val is bigint
```

## isNumber

判断 val 是否是数字类型 (非 NaN)

**Signature:**

```typescript
isNumber: (val: any) => val is number
```

## isInt

判断 val 是否是整数 (非 NaN)

**Signature:**

```typescript
isInt: (val: any) => val is number
```

## isFloat

判断 val 是否是浮点数 (非 NaN)

**Signature:**

```typescript
isFloat: (val: any) => val is number
```

## isArray

判断 val 是否是数组类型

**Signature:**

```typescript
isArray: (val: any) => val is unknown[]
```

## isObject

判断 val 是否是对象类型，但不包括 null。

**Signature:**

```typescript
isObject: (val: any) => val is object
```

## isFunction

判断 val 是否是函数类型

**Signature:**

```typescript
isFunction: <T extends Function>(val: any) => val is T
```

## isRegExp

判断 val 是否是 RegExp 类型

**Signature:**

```typescript
isRegExp: (val: any) => val is RegExp
```

## isDate

判断 val 是否是 Date 类型

**Signature:**

```typescript
isDate: (val: any) => val is Date
```

## isPrimitive

判断一个值是否为原始类型（undefined、null、number、string、boolean、symbol、bitint）。

**Signature:**

```typescript
isPrimitive: (value: any) => boolean
```

## isEmpty

判断一个值是否为空（没有属性或长度为 0）。

**Signature:**

```typescript
isEmpty: (value: any) => boolean
```

## isEqual

判断两个值是否相等

**Signature:**

```typescript
isEqual: <TType>(x: TType, y: TType) => boolean
```

## isBrowser

判断是否在浏览器环境下运行

**Signature:**

```typescript
isBrowser: boolean
```
