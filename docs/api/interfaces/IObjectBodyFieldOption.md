---
id: "IObjectBodyFieldOption"
title: "Interface: IObjectBodyFieldOption"
sidebar_label: "IObjectBodyFieldOption"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`ICommonFieldOption`](ICommonFieldOption.md)

  ↳ **`IObjectBodyFieldOption`**

## Properties

### encode

• `Optional` **encode**: `boolean`

Do encodeURIComponent execution, this option only executed in query parameter

#### Inherited from

[ICommonFieldOption](ICommonFieldOption.md).[encode](ICommonFieldOption.md#encode)

#### Defined in

[jin-frame/src/interfaces/ICommonFieldOption.ts:3](https://github.com/imjuni/jin-frame/blob/e005d9d/src/interfaces/ICommonFieldOption.ts#L3)

___

### formatters

• `Optional` **formatters**: [`TSingleObjectBodyFormatter`](../#tsingleobjectbodyformatter) \| [`TMultipleObjectBodyFormatter`](../#tmultipleobjectbodyformatter)

formatter configuration, use convert date type or transform data shape

`formatters` field only work when have valid input type.

`formatters` fields operate in order of string formatter, dateTime formatter. So You can change a string to
JavaScript Date instance using by string formatter and a converted Date instance to string using by dateTime
formatter.

**`Remarks`**

If you use the string formatter to change to JavaScript Date instance and then do not change to a string,
the formatters setting is: automatically convert to iso8601 string

**`Example`**

ordered example.

```
{
  findFrom: 'data.more.birthday',
  string: (value: string) => parse(value, "yyyy-MM-dd'T'HH:mm:ss", new Date()),
  dateTime: (value: Date) => format(value, 'yyyy-MM-dd HH:mm:ss'),
}
```

#### Defined in

[jin-frame/src/interfaces/body/IObjectBodyFieldOption.ts:51](https://github.com/imjuni/jin-frame/blob/e005d9d/src/interfaces/body/IObjectBodyFieldOption.ts#L51)

___

### order

• `Optional` **order**: `number`

merge order of object-body. Sorted in ascending order. Objects with fast numbers are overwritten by
object with slow number.

**`Default`**

0

#### Defined in

[jin-frame/src/interfaces/body/IObjectBodyFieldOption.ts:25](https://github.com/imjuni/jin-frame/blob/e005d9d/src/interfaces/body/IObjectBodyFieldOption.ts#L25)

___

### type

• **type**: ``"object-body"``

#### Defined in

[jin-frame/src/interfaces/body/IObjectBodyFieldOption.ts:17](https://github.com/imjuni/jin-frame/blob/e005d9d/src/interfaces/body/IObjectBodyFieldOption.ts#L17)
