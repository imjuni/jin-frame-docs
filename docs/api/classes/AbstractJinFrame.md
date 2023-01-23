---
id: "AbstractJinFrame"
title: "Class: AbstractJinFrame"
sidebar_label: "AbstractJinFrame"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`AbstractJinFrame`**

  ↳ [`JinEitherFrame`](JinEitherFrame.md)

  ↳ [`JinFrame`](JinFrame.md)

## Constructors

### constructor

• **new AbstractJinFrame**(`args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.contentType?` | `string` |
| `args.customBody?` | `Object` |
| `args.host?` | `string` |
| `args.method` | `Method` |
| `args.path?` | `string` |
| `args.transformRequest?` | `AxiosRequestTransformer` \| `AxiosRequestTransformer`[] |

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:104](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L104)

## Properties

### contentType

• `Readonly` **contentType**: `string`

content-type of API Request endpoint

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:87](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L87)

___

### customBody

• `Optional` `Readonly` **customBody**: `Object`

custom object of POST Request body data

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:90](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L90)

___

### host

• `Optional` `Readonly` **host**: `string`

host of API Request endpoint

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:78](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L78)

___

### method

• `Readonly` **method**: `Method`

method of API Request endpoint

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:84](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L84)

___

### path

• `Optional` `Readonly` **path**: `string`

pathname of API Request endpoint

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:81](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L81)

___

### startAt

• `Protected` **startAt**: `Date`

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:95](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L95)

___

### transformRequest

• `Optional` `Readonly` **transformRequest**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

transformRequest function of POST Request

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:93](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L93)

___

### BodySymbolBox

▪ `Static` **BodySymbolBox**: `symbol`

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:36](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L36)

___

### HeaderSymbolBox

▪ `Static` **HeaderSymbolBox**: `symbol`

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:40](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L40)

___

### ObjectBodySymbolBox

▪ `Static` **ObjectBodySymbolBox**: `symbol`

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:38](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L38)

___

### ParamSymbolBox

▪ `Static` **ParamSymbolBox**: `symbol`

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:32](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L32)

___

### QuerySymbolBox

▪ `Static` **QuerySymbolBox**: `symbol`

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:34](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L34)

## Methods

### getFormData

▸ **getFormData**(`bodies`): `Record`<`string`, `any`\> \| `FormData`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bodies` | `Record`<`string`, `any`\> |

#### Returns

`Record`<`string`, `any`\> \| `FormData`

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:143](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L143)

___

### getTransformRequest

▸ **getTransformRequest**(): `undefined` \| `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

#### Returns

`undefined` \| `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:125](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L125)

___

### request

▸ **request**(`option?`): `AxiosRequestConfig`<`any`\>

AxiosRequestConfig create using by class member variable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option?` | [`IJinFrameRequestConfig`](../interfaces/IJinFrameRequestConfig.md) & [`IJinFrameCreateConfig`](../interfaces/IJinFrameCreateConfig.md) | same with AxiosRequestConfig, bug exclude some filed ignored |

#### Returns

`AxiosRequestConfig`<`any`\>

created AxiosRequestConfig

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:186](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L186)

___

### body

▸ `Static` **body**(`option?`): (`target`: `Function`) => `void`(`target`: `Object`, `propertyKey`: `string` \| `symbol`) => `void`

decorator to set class variable to HTTP API body parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option?` | `Partial`<`Except`<[`IBodyFieldOption`](../interfaces/IBodyFieldOption.md), ``"type"``\>\> | body parameter option |

#### Returns

`fn`

▸ (`target`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Function` |

##### Returns

`void`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `propertyKey` | `string` \| `symbol` |

##### Returns

`void`

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:60](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L60)

___

### header

▸ `Static` **header**(`option?`): (`target`: `Function`) => `void`(`target`: `Object`, `propertyKey`: `string` \| `symbol`) => `void`

decorator to set class variable to HTTP API header parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option?` | `Partial`<`Except`<[`IHeaderFieldOption`](../interfaces/IHeaderFieldOption.md), ``"type"``\>\> | header parameter option |

#### Returns

`fn`

▸ (`target`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Function` |

##### Returns

`void`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `propertyKey` | `string` \| `symbol` |

##### Returns

`void`

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:74](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L74)

___

### objectBody

▸ `Static` **objectBody**(`option?`): (`target`: `Function`) => `void`(`target`: `Object`, `propertyKey`: `string` \| `symbol`) => `void`

decorator to set class variable to HTTP API body parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option?` | `Partial`<`Except`<[`IObjectBodyFieldOption`](../interfaces/IObjectBodyFieldOption.md), ``"type"``\>\> | body parameter option |

#### Returns

`fn`

▸ (`target`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Function` |

##### Returns

`void`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `propertyKey` | `string` \| `symbol` |

##### Returns

`void`

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:67](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L67)

___

### param

▸ `Static` **param**(`option?`): (`target`: `Function`) => `void`(`target`: `Object`, `propertyKey`: `string` \| `symbol`) => `void`

decorator to set class variable to HTTP API path parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option?` | `Partial`<`Omit`<[`IParamFieldOption`](../interfaces/IParamFieldOption.md), ``"type"``\>\> | path parameter option |

#### Returns

`fn`

▸ (`target`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Function` |

##### Returns

`void`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `propertyKey` | `string` \| `symbol` |

##### Returns

`void`

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:46](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L46)

___

### query

▸ `Static` **query**(`option?`): (`target`: `Function`) => `void`(`target`: `Object`, `propertyKey`: `string` \| `symbol`) => `void`

decorator to set class variable to HTTP API query parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option?` | `Partial`<`Omit`<[`IQueryFieldOption`](../interfaces/IQueryFieldOption.md), ``"type"``\>\> | query parameter option |

#### Returns

`fn`

▸ (`target`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Function` |

##### Returns

`void`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `propertyKey` | `string` \| `symbol` |

##### Returns

`void`

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:53](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L53)
