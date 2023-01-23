---
id: "IBodyFieldOption"
title: "Interface: IBodyFieldOption"
sidebar_label: "IBodyFieldOption"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`ICommonFieldOption`](ICommonFieldOption.md)

  ↳ **`IBodyFieldOption`**

## Properties

### encode

• `Optional` **encode**: `boolean`

Do encodeURIComponent execution, this option only executed in query parameter

#### Inherited from

[ICommonFieldOption](ICommonFieldOption.md).[encode](ICommonFieldOption.md#encode)

#### Defined in

[jin-frame/src/interfaces/ICommonFieldOption.ts:3](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/ICommonFieldOption.ts#L3)

___

### formatters

• `Optional` **formatters**: [`TSingleBodyFormatter`](../#tsinglebodyformatter) \| [`TMultipleBodyFormatter`](../#tmultiplebodyformatter)

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

[jin-frame/src/interfaces/body/IBodyFieldOption.ts:52](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/body/IBodyFieldOption.ts#L52)

___

### replaceAt

• `Optional` **replaceAt**: `string`

If you want to create depth or rename on field of body
set this option dot seperated string. See below,

**`Example`**

`data.test.ironman` convert to `{ data: { test: { ironman: "value here" } } }`

#### Defined in

[jin-frame/src/interfaces/body/IBodyFieldOption.ts:26](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/body/IBodyFieldOption.ts#L26)

___

### type

• **type**: ``"body"``

#### Defined in

[jin-frame/src/interfaces/body/IBodyFieldOption.ts:17](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/body/IBodyFieldOption.ts#L17)
