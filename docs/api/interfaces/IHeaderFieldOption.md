---
id: "IHeaderFieldOption"
title: "Interface: IHeaderFieldOption"
sidebar_label: "IHeaderFieldOption"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`ICommonFieldOption`](ICommonFieldOption.md)

  ↳ **`IHeaderFieldOption`**

## Properties

### comma

• `Optional` **comma**: `boolean`

"comma" option only working array type variable. If you want to process array parameter of headers
using by comma seperated string, set this option

Comma seperated array parameter on header

#### Defined in

[jin-frame/src/interfaces/IHeaderFieldOption.ts:23](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IHeaderFieldOption.ts#L23)

___

### encode

• `Optional` **encode**: `boolean`

Do encodeURIComponent execution, this option only executed in query parameter

#### Inherited from

[ICommonFieldOption](ICommonFieldOption.md).[encode](ICommonFieldOption.md#encode)

#### Defined in

[jin-frame/src/interfaces/ICommonFieldOption.ts:3](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/ICommonFieldOption.ts#L3)

___

### formatters

• `Optional` **formatters**: [`IFormatter`](IFormatter.md) \| [`IFormatter`](IFormatter.md)[]

formatter configuration, use convert date type or transform data shape

`formatters` field only work when have valid input type.

`formatters` fields operate in order of string formatter, dateTime formatter. So You can change a string to
JavaScript Date instance using by string formatter and a converted Date instance to string using by dateTime
formatter.

**`Remarks`**

If you use the string formatter to change to JavaScript Date instance and then do not change to a string,
the formatters setting is: automatically convert to iso8601 string

header field don't need a findFrom. HTTP protocol header not treat complex type object and array.

**`Url`**

https://developer.mozilla.org/en-US/docs/Web/API/Headers

**`Example`**

ordered example.

```
{
  string: (value: string) => parse(value, "yyyy-MM-dd'T'HH:mm:ss", new Date()),
  dateTime: (value: Date) => format(value, 'yyyy-MM-dd HH:mm:ss'),
}
```

#### Defined in

[jin-frame/src/interfaces/IHeaderFieldOption.ts:52](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IHeaderFieldOption.ts#L52)

___

### replaceAt

• `Optional` **replaceAt**: `string`

"replaceAt" option only working in body or header. If you want to create depth of body or header,
set this option dot seperated string. See below,

**`Example`**

`data.test.ironman` convert to `{ data: { test: { ironman: "value here" } } }`

#### Defined in

[jin-frame/src/interfaces/IHeaderFieldOption.ts:15](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IHeaderFieldOption.ts#L15)

___

### type

• **type**: ``"header"``

field option discriminator

#### Defined in

[jin-frame/src/interfaces/IHeaderFieldOption.ts:6](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IHeaderFieldOption.ts#L6)
