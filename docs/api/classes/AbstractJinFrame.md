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

• **new AbstractJinFrame**(`«destructured»`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | - |
| › `contentType?` | `string` | content-type of API Request endpoint |
| › `customBody?` | `Object` | custom object of POST Request body data |
| › `host?` | `string` | host of API Request endpoint |
| › `method` | `Method` | method of API Request endpoint |
| › `path?` | `string` | pathname of API Request endpoint |
| › `transformRequest?` | `AxiosRequestTransformer` \| `AxiosRequestTransformer`[] | - |

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:129](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L129)

## Properties

### contentType

• `Readonly` **contentType**: `string`

content-type of API Request endpoint

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:114](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L114)

___

### customBody

• `Optional` `Readonly` **customBody**: `Object`

custom object of POST Request body data

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:117](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L117)

___

### host

• `Optional` `Readonly` **host**: `string`

host of API Request endpoint

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:105](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L105)

___

### method

• `Readonly` **method**: `Method`

method of API Request endpoint

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:111](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L111)

___

### path

• `Optional` `Readonly` **path**: `string`

pathname of API Request endpoint

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:108](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L108)

___

### transformRequest

• `Optional` `Readonly` **transformRequest**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

transformRequest function of POST Request

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:120](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L120)

___

### BodySymbolBox

▪ `Static` **BodySymbolBox**: `symbol`

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:63](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L63)

___

### HeaderSymbolBox

▪ `Static` **HeaderSymbolBox**: `symbol`

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:67](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L67)

___

### ObjectBodySymbolBox

▪ `Static` **ObjectBodySymbolBox**: `symbol`

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:65](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L65)

___

### ParamSymbolBox

▪ `Static` **ParamSymbolBox**: `symbol`

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:59](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L59)

___

### QuerySymbolBox

▪ `Static` **QuerySymbolBox**: `symbol`

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:61](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L61)

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

[jin-frame/src/frames/AbstractJinFrame.ts:175](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L175)

___

### getTransformRequest

▸ **getTransformRequest**(): `undefined` \| `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

#### Returns

`undefined` \| `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:157](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L157)

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

[jin-frame/src/frames/AbstractJinFrame.ts:218](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L218)

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

[jin-frame/src/frames/AbstractJinFrame.ts:87](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L87)

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

[jin-frame/src/frames/AbstractJinFrame.ts:101](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L101)

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

[jin-frame/src/frames/AbstractJinFrame.ts:94](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L94)

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

[jin-frame/src/frames/AbstractJinFrame.ts:73](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L73)

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

[jin-frame/src/frames/AbstractJinFrame.ts:80](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L80)
