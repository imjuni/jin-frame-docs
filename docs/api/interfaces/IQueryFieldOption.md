---
id: "IQueryFieldOption"
title: "Interface: IQueryFieldOption"
sidebar_label: "IQueryFieldOption"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`ICommonFieldOption`](ICommonFieldOption.md)

- [`IQueryParamCommonFieldOption`](IQueryParamCommonFieldOption.md)

  ↳ **`IQueryFieldOption`**

## Properties

### bit

• **bit**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | enable bitwised operator using by array |
| `withZero` | `boolean` | If this configuration set enable, bitwised operation result are zero after submit zero value |

#### Inherited from

[IQueryParamCommonFieldOption](IQueryParamCommonFieldOption.md).[bit](IQueryParamCommonFieldOption.md#bit)

#### Defined in

[jin-frame/src/interfaces/IQueryParamCommonFieldOption.ts:15](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IQueryParamCommonFieldOption.ts#L15)

___

### comma

• **comma**: `boolean`

"comma" option only working querystring. If you want to process array parameter of querystring
using by comma seperated string, set this option

Comma seperated array parameter on querystring

#### Inherited from

[IQueryParamCommonFieldOption](IQueryParamCommonFieldOption.md).[comma](IQueryParamCommonFieldOption.md#comma)

#### Defined in

[jin-frame/src/interfaces/IQueryParamCommonFieldOption.ts:13](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IQueryParamCommonFieldOption.ts#L13)

___

### encode

• `Optional` **encode**: `boolean`

Do encodeURIComponent execution, this option only executed in query parameter

#### Inherited from

[IQueryParamCommonFieldOption](IQueryParamCommonFieldOption.md).[encode](IQueryParamCommonFieldOption.md#encode)

#### Defined in

[jin-frame/src/interfaces/ICommonFieldOption.ts:3](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/ICommonFieldOption.ts#L3)

___

### formatter

• `Optional` **formatter**: [`IFormatter`](IFormatter.md)

#### Inherited from

[IQueryParamCommonFieldOption](IQueryParamCommonFieldOption.md).[formatter](IQueryParamCommonFieldOption.md#formatter)

#### Defined in

[jin-frame/src/interfaces/IQueryParamCommonFieldOption.ts:5](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IQueryParamCommonFieldOption.ts#L5)

___

### type

• **type**: ``"query"``

#### Defined in

[jin-frame/src/interfaces/IQueryFieldOption.ts:5](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IQueryFieldOption.ts#L5)
