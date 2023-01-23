---
id: "IQueryParamCommonFieldOption"
title: "Interface: IQueryParamCommonFieldOption"
sidebar_label: "IQueryParamCommonFieldOption"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`ICommonFieldOption`](ICommonFieldOption.md)

  ↳ **`IQueryParamCommonFieldOption`**

  ↳↳ [`IParamFieldOption`](IParamFieldOption.md)

  ↳↳ [`IQueryFieldOption`](IQueryFieldOption.md)

## Properties

### bit

• **bit**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | enable bitwised operator using by array |
| `withZero` | `boolean` | If this configuration set enable, bitwised operation result are zero after submit zero value |

#### Defined in

[jin-frame/src/interfaces/IQueryParamCommonFieldOption.ts:15](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IQueryParamCommonFieldOption.ts#L15)

___

### comma

• **comma**: `boolean`

"comma" option only working querystring. If you want to process array parameter of querystring
using by comma seperated string, set this option

Comma seperated array parameter on querystring

#### Defined in

[jin-frame/src/interfaces/IQueryParamCommonFieldOption.ts:13](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IQueryParamCommonFieldOption.ts#L13)

___

### encode

• `Optional` **encode**: `boolean`

Do encodeURIComponent execution, this option only executed in query parameter

#### Inherited from

[ICommonFieldOption](ICommonFieldOption.md).[encode](ICommonFieldOption.md#encode)

#### Defined in

[jin-frame/src/interfaces/ICommonFieldOption.ts:3](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/ICommonFieldOption.ts#L3)

___

### formatter

• `Optional` **formatter**: [`IFormatter`](IFormatter.md)

#### Defined in

[jin-frame/src/interfaces/IQueryParamCommonFieldOption.ts:5](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IQueryParamCommonFieldOption.ts#L5)
