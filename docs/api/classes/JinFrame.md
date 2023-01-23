---
id: "JinFrame"
title: "Class: JinFrame<TPASS, TFAIL>"
sidebar_label: "JinFrame"
sidebar_position: 0
custom_edit_url: null
---

Definition HTTP Request

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TPASS` | `unknown` | AxiosResponse type argument case of valid status. eg. `AxiosResponse<TPASS>` |
| `TFAIL` | `TPASS` | AxiosResponse type argument case of invalid status. eg. `AxiosResponse<TFAIL>` |

## Hierarchy

- [`AbstractJinFrame`](AbstractJinFrame.md)

  ↳ **`JinFrame`**

## Implements

- [`IJinFrameFunction`](../interfaces/IJinFrameFunction.md)<`TPASS`, `TFAIL`\>

## Constructors

### constructor

• **new JinFrame**<`TPASS`, `TFAIL`\>(`args`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TPASS` | `unknown` |
| `TFAIL` | `TPASS` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.contentType?` | `string` |
| `args.customBody?` | `Object` |
| `args.host?` | `string` |
| `args.method` | `Method` |
| `args.path?` | `string` |

#### Overrides

[AbstractJinFrame](AbstractJinFrame.md).[constructor](AbstractJinFrame.md#constructor)

#### Defined in

[jin-frame/src/frames/JinFrame.ts:39](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinFrame.ts#L39)

## Properties

### contentType

• `Readonly` **contentType**: `string`

content-type of API Request endpoint

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[contentType](AbstractJinFrame.md#contenttype)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:87](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L87)

___

### customBody

• `Optional` `Readonly` **customBody**: `Object`

custom object of POST Request body data

#### Index signature

▪ [key: `string`]: `any`

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[customBody](AbstractJinFrame.md#custombody)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:90](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L90)

___

### host

• `Optional` `Readonly` **host**: `string`

host of API Request endpoint

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[host](AbstractJinFrame.md#host)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:78](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L78)

___

### method

• `Readonly` **method**: `Method`

method of API Request endpoint

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[method](AbstractJinFrame.md#method)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:84](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L84)

___

### path

• `Optional` `Readonly` **path**: `string`

pathname of API Request endpoint

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[path](AbstractJinFrame.md#path)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:81](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L81)

___

### startAt

• `Protected` **startAt**: `Date`

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[startAt](AbstractJinFrame.md#startat)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:95](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L95)

___

### transformRequest

• `Optional` `Readonly` **transformRequest**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

transformRequest function of POST Request

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[transformRequest](AbstractJinFrame.md#transformrequest)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:93](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L93)

___

### BodySymbolBox

▪ `Static` **BodySymbolBox**: `symbol`

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[BodySymbolBox](AbstractJinFrame.md#bodysymbolbox)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:36](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L36)

___

### HeaderSymbolBox

▪ `Static` **HeaderSymbolBox**: `symbol`

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[HeaderSymbolBox](AbstractJinFrame.md#headersymbolbox)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:40](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L40)

___

### ObjectBodySymbolBox

▪ `Static` **ObjectBodySymbolBox**: `symbol`

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[ObjectBodySymbolBox](AbstractJinFrame.md#objectbodysymbolbox)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:38](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L38)

___

### ParamSymbolBox

▪ `Static` **ParamSymbolBox**: `symbol`

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[ParamSymbolBox](AbstractJinFrame.md#paramsymbolbox)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:32](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L32)

___

### QuerySymbolBox

▪ `Static` **QuerySymbolBox**: `symbol`

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[QuerySymbolBox](AbstractJinFrame.md#querysymbolbox)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:34](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L34)

## Methods

### create

▸ **create**(`option?`): () => `Promise`<`AxiosResponse`<`TPASS`, `any`\>\>

Generate an AxiosRequestConfig value and use it to return a functions that invoke HTTP APIs

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option?` | [`IJinFrameRequestConfig`](../interfaces/IJinFrameRequestConfig.md) & [`IJinFrameCreateConfig`](../interfaces/IJinFrameCreateConfig.md) | same with AxiosRequestConfig, bug exclude some filed ignored |

#### Returns

`fn`

Functions that invoke HTTP APIs

▸ (): `Promise`<`AxiosResponse`<`TPASS`, `any`\>\>

Generate an AxiosRequestConfig value and use it to return a functions that invoke HTTP APIs

##### Returns

`Promise`<`AxiosResponse`<`TPASS`, `any`\>\>

Functions that invoke HTTP APIs

#### Implementation of

[IJinFrameFunction](../interfaces/IJinFrameFunction.md).[create](../interfaces/IJinFrameFunction.md#create)

#### Defined in

[jin-frame/src/frames/JinFrame.ts:77](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinFrame.ts#L77)

___

### execute

▸ **execute**(`option?`): `Promise`<`AxiosResponse`<`TPASS`, `any`\>\>

Generate an AxiosRequestConfig value and invoke HTTP APIs

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option?` | [`IJinFrameRequestConfig`](../interfaces/IJinFrameRequestConfig.md) & [`IJinFrameCreateConfig`](../interfaces/IJinFrameCreateConfig.md) | same with AxiosRequestConfig, bug exclude some filed ignored |

#### Returns

`Promise`<`AxiosResponse`<`TPASS`, `any`\>\>

AxiosResponse With PassFailEither

#### Implementation of

[IJinFrameFunction](../interfaces/IJinFrameFunction.md).[execute](../interfaces/IJinFrameFunction.md#execute)

#### Defined in

[jin-frame/src/frames/JinFrame.ts:162](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinFrame.ts#L162)

___

### getFormData

▸ **getFormData**(`bodies`): `Record`<`string`, `any`\> \| `FormData`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bodies` | `Record`<`string`, `any`\> |

#### Returns

`Record`<`string`, `any`\> \| `FormData`

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[getFormData](AbstractJinFrame.md#getformdata)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:143](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L143)

___

### getTransformRequest

▸ **getTransformRequest**(): `undefined` \| `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

#### Returns

`undefined` \| `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[getTransformRequest](AbstractJinFrame.md#gettransformrequest)

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

#### Overrides

[AbstractJinFrame](AbstractJinFrame.md).[request](AbstractJinFrame.md#request)

#### Defined in

[jin-frame/src/frames/JinFrame.ts:49](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinFrame.ts#L49)

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

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[body](AbstractJinFrame.md#body)

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

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[header](AbstractJinFrame.md#header)

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

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[objectBody](AbstractJinFrame.md#objectbody)

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

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[param](AbstractJinFrame.md#param)

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

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[query](AbstractJinFrame.md#query)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:53](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/AbstractJinFrame.ts#L53)
