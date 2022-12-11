---
id: "JinEitherFrame"
title: "Class: JinEitherFrame<PASS, FAIL>"
sidebar_label: "JinEitherFrame"
sidebar_position: 0
custom_edit_url: null
---

Definition HTTP Request

**`Type Param`**

AxiosResponse type argument case of valid status.
eg. `AxiosResponse<TPASS>`

**`Type Param`**

AxiosResponse type argument case of invalid status.
eg. `AxiosResponse<TFAIL>`

## Type parameters

| Name | Type |
| :------ | :------ |
| `PASS` | `unknown` |
| `FAIL` | `PASS` |

## Hierarchy

- [`AbstractJinFrame`](AbstractJinFrame.md)

  ↳ **`JinEitherFrame`**

## Implements

- [`IJinFrameFunction`](../interfaces/IJinFrameFunction.md)<`PASS`, `FAIL`\>

## Constructors

### constructor

• **new JinEitherFrame**<`PASS`, `FAIL`\>(`«destructured»`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PASS` | `unknown` |
| `FAIL` | `PASS` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | - |
| › `contentType?` | `string` | content-type of API Request endpoint |
| › `customBody?` | `Object` | custom object of POST Request body data |
| › `host?` | `string` | host of API Request endpoint |
| › `method` | `Method` | method of API Request endpoint |
| › `path?` | `string` | pathname of API Request endpoint |

#### Overrides

[AbstractJinFrame](AbstractJinFrame.md).[constructor](AbstractJinFrame.md#constructor)

#### Defined in

[jin-frame/src/frames/JinEitherFrame.ts:38](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/JinEitherFrame.ts#L38)

## Properties

### contentType

• `Readonly` **contentType**: `string`

content-type of API Request endpoint

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[contentType](AbstractJinFrame.md#contenttype)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:114](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L114)

___

### customBody

• `Optional` `Readonly` **customBody**: `Object`

custom object of POST Request body data

#### Index signature

▪ [key: `string`]: `any`

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[customBody](AbstractJinFrame.md#custombody)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:117](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L117)

___

### host

• `Optional` `Readonly` **host**: `string`

host of API Request endpoint

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[host](AbstractJinFrame.md#host)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:105](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L105)

___

### method

• `Readonly` **method**: `Method`

method of API Request endpoint

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[method](AbstractJinFrame.md#method)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:111](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L111)

___

### path

• `Optional` `Readonly` **path**: `string`

pathname of API Request endpoint

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[path](AbstractJinFrame.md#path)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:108](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L108)

___

### transformRequest

• `Optional` `Readonly` **transformRequest**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

transformRequest function of POST Request

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[transformRequest](AbstractJinFrame.md#transformrequest)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:120](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L120)

___

### BodySymbolBox

▪ `Static` **BodySymbolBox**: `symbol`

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[BodySymbolBox](AbstractJinFrame.md#bodysymbolbox)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:63](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L63)

___

### HeaderSymbolBox

▪ `Static` **HeaderSymbolBox**: `symbol`

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[HeaderSymbolBox](AbstractJinFrame.md#headersymbolbox)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:67](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L67)

___

### ObjectBodySymbolBox

▪ `Static` **ObjectBodySymbolBox**: `symbol`

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[ObjectBodySymbolBox](AbstractJinFrame.md#objectbodysymbolbox)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:65](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L65)

___

### ParamSymbolBox

▪ `Static` **ParamSymbolBox**: `symbol`

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[ParamSymbolBox](AbstractJinFrame.md#paramsymbolbox)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:59](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L59)

___

### QuerySymbolBox

▪ `Static` **QuerySymbolBox**: `symbol`

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[QuerySymbolBox](AbstractJinFrame.md#querysymbolbox)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:61](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L61)

## Methods

### create

▸ **create**(`option?`): () => `Promise`<`PassFailEither`<[`IFailReplyJinEitherFrame`](../interfaces/IFailReplyJinEitherFrame.md)<`FAIL`\> \| [`IFailExceptionJinEitherFrame`](../interfaces/IFailExceptionJinEitherFrame.md)<`FAIL`\>, [`TPassJinEitherFrame`](../#tpassjineitherframe)<`PASS`\>\>\>

Generate an AxiosRequestConfig value and use it to return a functions that invoke HTTP APIs

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option?` | [`IJinFrameRequestConfig`](../interfaces/IJinFrameRequestConfig.md) & [`IJinFrameCreateConfig`](../interfaces/IJinFrameCreateConfig.md) | same with AxiosRequestConfig, bug exclude some filed ignored |

#### Returns

`fn`

Functions that invoke HTTP APIs

▸ (): `Promise`<`PassFailEither`<[`IFailReplyJinEitherFrame`](../interfaces/IFailReplyJinEitherFrame.md)<`FAIL`\> \| [`IFailExceptionJinEitherFrame`](../interfaces/IFailExceptionJinEitherFrame.md)<`FAIL`\>, [`TPassJinEitherFrame`](../#tpassjineitherframe)<`PASS`\>\>\>

Generate an AxiosRequestConfig value and use it to return a functions that invoke HTTP APIs

##### Returns

`Promise`<`PassFailEither`<[`IFailReplyJinEitherFrame`](../interfaces/IFailReplyJinEitherFrame.md)<`FAIL`\> \| [`IFailExceptionJinEitherFrame`](../interfaces/IFailExceptionJinEitherFrame.md)<`FAIL`\>, [`TPassJinEitherFrame`](../#tpassjineitherframe)<`PASS`\>\>\>

Functions that invoke HTTP APIs

#### Implementation of

[IJinFrameFunction](../interfaces/IJinFrameFunction.md).[create](../interfaces/IJinFrameFunction.md#create)

#### Defined in

[jin-frame/src/frames/JinEitherFrame.ts:60](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/JinEitherFrame.ts#L60)

___

### execute

▸ **execute**(`option?`): `Promise`<`PassFailEither`<[`IFailReplyJinEitherFrame`](../interfaces/IFailReplyJinEitherFrame.md)<`FAIL`\> \| [`IFailExceptionJinEitherFrame`](../interfaces/IFailExceptionJinEitherFrame.md)<`FAIL`\>, [`TPassJinEitherFrame`](../#tpassjineitherframe)<`PASS`\>\>\>

Generate an AxiosRequestConfig value and invoke HTTP APIs

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option?` | [`IJinFrameRequestConfig`](../interfaces/IJinFrameRequestConfig.md) & [`IJinFrameCreateConfig`](../interfaces/IJinFrameCreateConfig.md) | same with AxiosRequestConfig, bug exclude some filed ignored |

#### Returns

`Promise`<`PassFailEither`<[`IFailReplyJinEitherFrame`](../interfaces/IFailReplyJinEitherFrame.md)<`FAIL`\> \| [`IFailExceptionJinEitherFrame`](../interfaces/IFailExceptionJinEitherFrame.md)<`FAIL`\>, [`TPassJinEitherFrame`](../#tpassjineitherframe)<`PASS`\>\>\>

AxiosResponse With PassFailEither

#### Implementation of

[IJinFrameFunction](../interfaces/IJinFrameFunction.md).[execute](../interfaces/IJinFrameFunction.md#execute)

#### Defined in

[jin-frame/src/frames/JinEitherFrame.ts:140](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/JinEitherFrame.ts#L140)

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

[jin-frame/src/frames/AbstractJinFrame.ts:175](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L175)

___

### getTransformRequest

▸ **getTransformRequest**(): `undefined` \| `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

#### Returns

`undefined` \| `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[getTransformRequest](AbstractJinFrame.md#gettransformrequest)

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

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[request](AbstractJinFrame.md#request)

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

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[body](AbstractJinFrame.md#body)

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

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[header](AbstractJinFrame.md#header)

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

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[objectBody](AbstractJinFrame.md#objectbody)

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

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[param](AbstractJinFrame.md#param)

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

#### Inherited from

[AbstractJinFrame](AbstractJinFrame.md).[query](AbstractJinFrame.md#query)

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:80](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L80)
