---
id: "index"
title: "jin-frame"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [AbstractJinFrame](classes/AbstractJinFrame.md)
- [JinCreateError](classes/JinCreateError.md)
- [JinEitherFrame](classes/JinEitherFrame.md)
- [JinFile](classes/JinFile.md)
- [JinFrame](classes/JinFrame.md)
- [JinRequestError](classes/JinRequestError.md)

## Interfaces

- [IBodyField](interfaces/IBodyField.md)
- [IBodyFieldOption](interfaces/IBodyFieldOption.md)
- [ICommonFieldOption](interfaces/ICommonFieldOption.md)
- [IDebugInfo](interfaces/IDebugInfo.md)
- [IFailExceptionJinEitherFrame](interfaces/IFailExceptionJinEitherFrame.md)
- [IFailJinEitherFrame](interfaces/IFailJinEitherFrame.md)
- [IFailReplyJinEitherFrame](interfaces/IFailReplyJinEitherFrame.md)
- [IFormatter](interfaces/IFormatter.md)
- [IHeaderField](interfaces/IHeaderField.md)
- [IHeaderFieldOption](interfaces/IHeaderFieldOption.md)
- [IJinFrameCreateConfig](interfaces/IJinFrameCreateConfig.md)
- [IJinFrameFunction](interfaces/IJinFrameFunction.md)
- [IJinFrameRequestConfig](interfaces/IJinFrameRequestConfig.md)
- [IObjectBodyFieldOption](interfaces/IObjectBodyFieldOption.md)
- [IParamFieldOption](interfaces/IParamFieldOption.md)
- [IQueryFieldOption](interfaces/IQueryFieldOption.md)
- [IQueryParamCommonFieldOption](interfaces/IQueryParamCommonFieldOption.md)

## Type Aliases

### ConstructorType

Ƭ **ConstructorType**<`T`\>: `OmitType`<`T`, `Function`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[jin-frame/src/tools/ConstructorType.ts:19](https://github.com/imjuni/jin-frame/blob/8c406fc/src/tools/ConstructorType.ts#L19)

___

### JinConstructorType

Ƭ **JinConstructorType**<`T`\>: `Omit`<[`ConstructorType`](#constructortype)<`T`\>, ``"host"`` \| ``"path"`` \| ``"method"`` \| ``"contentType"`` \| ``"customBody"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractJinFrame`](classes/AbstractJinFrame.md) |

#### Defined in

[jin-frame/src/tools/ConstructorType.ts:23](https://github.com/imjuni/jin-frame/blob/8c406fc/src/tools/ConstructorType.ts#L23)

___

### JinOmitConstructorType

Ƭ **JinOmitConstructorType**<`T`, `M`\>: `Omit`<[`ConstructorType`](#constructortype)<`T`\>, ``"host"`` \| ``"path"`` \| ``"method"`` \| ``"contentType"`` \| ``"customBody"`` \| `M`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AbstractJinFrame`](classes/AbstractJinFrame.md) |
| `M` | extends keyof [`ConstructorType`](#constructortype)<`T`\> |

#### Defined in

[jin-frame/src/tools/ConstructorType.ts:28](https://github.com/imjuni/jin-frame/blob/8c406fc/src/tools/ConstructorType.ts#L28)

___

### OmitConstructorType

Ƭ **OmitConstructorType**<`T`, `M`\>: `Omit`<[`ConstructorType`](#constructortype)<`T`\>, `M`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `M` | extends keyof [`ConstructorType`](#constructortype)<`T`\> |

#### Defined in

[jin-frame/src/tools/ConstructorType.ts:21](https://github.com/imjuni/jin-frame/blob/8c406fc/src/tools/ConstructorType.ts#L21)

___

### TFieldRecords

Ƭ **TFieldRecords**: `Record`<[`IParamFieldOption`](interfaces/IParamFieldOption.md)[``"type"``], { `key`: `string` ; `option`: [`IParamFieldOption`](interfaces/IParamFieldOption.md)  }[]\> & `Record`<[`IQueryFieldOption`](interfaces/IQueryFieldOption.md)[``"type"``], { `key`: `string` ; `option`: [`IQueryFieldOption`](interfaces/IQueryFieldOption.md)  }[]\> & `Record`<[`IBodyFieldOption`](interfaces/IBodyFieldOption.md)[``"type"``], { `key`: `string` ; `option`: [`IBodyFieldOption`](interfaces/IBodyFieldOption.md)  }[]\> & `Record`<[`IHeaderFieldOption`](interfaces/IHeaderFieldOption.md)[``"type"``], { `key`: `string` ; `option`: [`IHeaderFieldOption`](interfaces/IHeaderFieldOption.md)  }[]\>

#### Defined in

[jin-frame/src/interfaces/TFieldRecords.ts:6](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/TFieldRecords.ts#L6)

___

### TJinFail

Ƭ **TJinFail**<`T`\>: `IFail`<[`IFailExceptionJinEitherFrame`](interfaces/IFailExceptionJinEitherFrame.md)<`T`\> \| [`IFailReplyJinEitherFrame`](interfaces/IFailReplyJinEitherFrame.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[jin-frame/src/interfaces/IFailJinEitherFrame.ts:29](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IFailJinEitherFrame.ts#L29)

___

### TJinPass

Ƭ **TJinPass**<`T`\>: `IPass`<[`TPassJinEitherFrame`](#tpassjineitherframe)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[jin-frame/src/interfaces/TPassJinEitherFrame.ts:12](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/TPassJinEitherFrame.ts#L12)

___

### TMultipleBodyFormatter

Ƭ **TMultipleBodyFormatter**: { `findFrom?`: `string`  } & [`IFormatter`](interfaces/IFormatter.md)[]

#### Defined in

[jin-frame/src/interfaces/body/IBodyFieldOption.ts:9](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/body/IBodyFieldOption.ts#L9)

___

### TMultipleObjectBodyFormatter

Ƭ **TMultipleObjectBodyFormatter**: { `findFrom`: `string`  } & [`IFormatter`](interfaces/IFormatter.md)[]

#### Defined in

[jin-frame/src/interfaces/body/IObjectBodyFieldOption.ts:9](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/body/IObjectBodyFieldOption.ts#L9)

___

### TPassJinEitherFrame

Ƭ **TPassJinEitherFrame**<`T`\>: `AxiosResponse`<`T`\> & { `$debug`: [`IDebugInfo`](interfaces/IDebugInfo.md) ; `$frame`: [`JinEitherFrame`](classes/JinEitherFrame.md)<`T`, `any`\> ; `$progress`: ``"pass"``  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[jin-frame/src/interfaces/TPassJinEitherFrame.ts:6](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/TPassJinEitherFrame.ts#L6)

___

### TRequestPart

Ƭ **TRequestPart**: [`IQueryFieldOption`](interfaces/IQueryFieldOption.md)[``"type"``] \| [`IParamFieldOption`](interfaces/IParamFieldOption.md)[``"type"``] \| [`IBodyFieldOption`](interfaces/IBodyFieldOption.md)[``"type"``] \| [`IHeaderFieldOption`](interfaces/IHeaderFieldOption.md)[``"type"``]

#### Defined in

[jin-frame/src/interfaces/TRequestPart.ts:6](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/TRequestPart.ts#L6)

___

### TSingleBodyFormatter

Ƭ **TSingleBodyFormatter**: { `findFrom?`: `string`  } & [`IFormatter`](interfaces/IFormatter.md)

#### Defined in

[jin-frame/src/interfaces/body/IBodyFieldOption.ts:4](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/body/IBodyFieldOption.ts#L4)

___

### TSingleObjectBodyFormatter

Ƭ **TSingleObjectBodyFormatter**: { `findFrom`: `string`  } & [`IFormatter`](interfaces/IFormatter.md)

#### Defined in

[jin-frame/src/interfaces/body/IObjectBodyFieldOption.ts:4](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/body/IObjectBodyFieldOption.ts#L4)

## Variables

### defaultJinFrameTimeout

• `Const` **defaultJinFrameTimeout**: ``120000``

#### Defined in

[jin-frame/src/frames/defaultJinFrameTimeout.ts:1](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/defaultJinFrameTimeout.ts#L1)

## Functions

### applyFormatters

▸ **applyFormatters**(`initialValue`, `formatter`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `string` \| `number` \| `boolean` \| `Date` |
| `formatter` | [`IFormatter`](interfaces/IFormatter.md) |

#### Returns

`string`

#### Defined in

[jin-frame/src/tools/applyFormatters.ts:38](https://github.com/imjuni/jin-frame/blob/8c406fc/src/tools/applyFormatters.ts#L38)

▸ **applyFormatters**(`initialValue`, `formatter`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `string`[] \| `Date`[] \| `number`[] \| `boolean`[] |
| `formatter` | [`IFormatter`](interfaces/IFormatter.md) |

#### Returns

`string`[]

#### Defined in

[jin-frame/src/tools/applyFormatters.ts:39](https://github.com/imjuni/jin-frame/blob/8c406fc/src/tools/applyFormatters.ts#L39)

___

### bitwised

▸ **bitwised**(`values`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |

#### Returns

`number`

#### Defined in

[jin-frame/src/tools/bitwised.ts:1](https://github.com/imjuni/jin-frame/blob/8c406fc/src/tools/bitwised.ts#L1)

___

### encode

▸ **encode**(`enable`, `value`): `string` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `undefined` \| ``null`` \| `boolean` |
| `value` | `string` \| `number` |

#### Returns

`string` \| `number`

#### Defined in

[jin-frame/src/tools/encode.ts:1](https://github.com/imjuni/jin-frame/blob/8c406fc/src/tools/encode.ts#L1)

___

### encodes

▸ **encodes**(`enable`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `undefined` \| ``null`` \| `boolean` |
| `values` | `string` \| `number` |

#### Returns

`string`

#### Defined in

[jin-frame/src/tools/encode.ts:9](https://github.com/imjuni/jin-frame/blob/8c406fc/src/tools/encode.ts#L9)

▸ **encodes**(`enable`, `values`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `undefined` \| ``null`` \| `boolean` |
| `values` | `string`[] \| `number`[] |

#### Returns

`string`[]

#### Defined in

[jin-frame/src/tools/encode.ts:10](https://github.com/imjuni/jin-frame/blob/8c406fc/src/tools/encode.ts#L10)

___

### getBodyInfo

▸ **getBodyInfo**<`T`\>(`thisFrame`, `fields`, `strict?`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `thisFrame` | `T` |
| `fields` | [`IBodyField`](interfaces/IBodyField.md)[] |
| `strict?` | `boolean` |

#### Returns

`any`

#### Defined in

[jin-frame/src/processors/getBodyInfo.ts:11](https://github.com/imjuni/jin-frame/blob/8c406fc/src/processors/getBodyInfo.ts#L11)

___

### getDefaultBodyFieldOption

▸ **getDefaultBodyFieldOption**(`option?`): [`IBodyFieldOption`](interfaces/IBodyFieldOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `option?` | `Partial`<[`IBodyFieldOption`](interfaces/IBodyFieldOption.md)\> \| `Except`<`Partial`<[`IBodyFieldOption`](interfaces/IBodyFieldOption.md)\>, ``"type"``\> |

#### Returns

[`IBodyFieldOption`](interfaces/IBodyFieldOption.md)

#### Defined in

[jin-frame/src/processors/getDefaultOption.ts:38](https://github.com/imjuni/jin-frame/blob/8c406fc/src/processors/getDefaultOption.ts#L38)

___

### getDefaultHeaderFieldOption

▸ **getDefaultHeaderFieldOption**(`option?`): [`IHeaderFieldOption`](interfaces/IHeaderFieldOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `option?` | `Partial`<[`IHeaderFieldOption`](interfaces/IHeaderFieldOption.md)\> \| `Omit`<`Partial`<[`IHeaderFieldOption`](interfaces/IHeaderFieldOption.md)\>, ``"type"``\> |

#### Returns

[`IHeaderFieldOption`](interfaces/IHeaderFieldOption.md)

#### Defined in

[jin-frame/src/processors/getDefaultOption.ts:92](https://github.com/imjuni/jin-frame/blob/8c406fc/src/processors/getDefaultOption.ts#L92)

___

### getDefaultObjectBodyFieldOption

▸ **getDefaultObjectBodyFieldOption**(`option?`): [`IObjectBodyFieldOption`](interfaces/IObjectBodyFieldOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `option?` | `Partial`<[`IObjectBodyFieldOption`](interfaces/IObjectBodyFieldOption.md)\> \| `Except`<`Partial`<[`IObjectBodyFieldOption`](interfaces/IObjectBodyFieldOption.md)\>, ``"type"``\> |

#### Returns

[`IObjectBodyFieldOption`](interfaces/IObjectBodyFieldOption.md)

#### Defined in

[jin-frame/src/processors/getDefaultOption.ts:65](https://github.com/imjuni/jin-frame/blob/8c406fc/src/processors/getDefaultOption.ts#L65)

___

### getDefaultParamFieldOption

▸ **getDefaultParamFieldOption**(`option?`): [`IParamFieldOption`](interfaces/IParamFieldOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `option?` | `Partial`<[`IParamFieldOption`](interfaces/IParamFieldOption.md)\> \| `Omit`<`Partial`<[`IParamFieldOption`](interfaces/IParamFieldOption.md)\>, ``"type"``\> |

#### Returns

[`IParamFieldOption`](interfaces/IParamFieldOption.md)

#### Defined in

[jin-frame/src/processors/getDefaultOption.ts:23](https://github.com/imjuni/jin-frame/blob/8c406fc/src/processors/getDefaultOption.ts#L23)

___

### getDefaultQueryFieldOption

▸ **getDefaultQueryFieldOption**(`option?`): [`IQueryFieldOption`](interfaces/IQueryFieldOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `option?` | `Partial`<[`IQueryFieldOption`](interfaces/IQueryFieldOption.md)\> \| `Omit`<`Partial`<[`IQueryFieldOption`](interfaces/IQueryFieldOption.md)\>, ``"type"``\> |

#### Returns

[`IQueryFieldOption`](interfaces/IQueryFieldOption.md)

#### Defined in

[jin-frame/src/processors/getDefaultOption.ts:8](https://github.com/imjuni/jin-frame/blob/8c406fc/src/processors/getDefaultOption.ts#L8)

___

### getDuration

▸ **getDuration**(`start`, `end`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `Date` |
| `end` | `Date` |

#### Returns

`number`

#### Defined in

[jin-frame/src/tools/getDuration.ts:4](https://github.com/imjuni/jin-frame/blob/8c406fc/src/tools/getDuration.ts#L4)

___

### getHeaderInfo

▸ **getHeaderInfo**<`T`\>(`thisFrame`, `fields`, `strict?`): `Record`<`string`, `any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `thisFrame` | `T` |
| `fields` | [`IHeaderField`](interfaces/IHeaderField.md)[] |
| `strict?` | `boolean` |

#### Returns

`Record`<`string`, `any`\>

#### Defined in

[jin-frame/src/processors/getHeaderInfo.ts:7](https://github.com/imjuni/jin-frame/blob/8c406fc/src/processors/getHeaderInfo.ts#L7)

___

### getQueryParamInfo

▸ **getQueryParamInfo**<`T`\>(`origin`, `fields`): `Record`<`string`, `any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | `T` |
| `fields` | { `key`: `string` ; `option`: [`IParamFieldOption`](interfaces/IParamFieldOption.md) \| [`IQueryFieldOption`](interfaces/IQueryFieldOption.md)  }[] |

#### Returns

`Record`<`string`, `any`\>

#### Defined in

[jin-frame/src/processors/getQueryParamInfo.ts:8](https://github.com/imjuni/jin-frame/blob/8c406fc/src/processors/getQueryParamInfo.ts#L8)

___

### isValidArrayType

▸ **isValidArrayType**(`value`): value is string[] \| Date[] \| number[] \| boolean[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is string[] \| Date[] \| number[] \| boolean[]

#### Defined in

[jin-frame/src/tools/typeAssert.ts:16](https://github.com/imjuni/jin-frame/blob/8c406fc/src/tools/typeAssert.ts#L16)

___

### isValidPrimitiveType

▸ **isValidPrimitiveType**(`value`): value is string \| number \| boolean \| Date

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is string \| number \| boolean \| Date

#### Defined in

[jin-frame/src/tools/typeAssert.ts:3](https://github.com/imjuni/jin-frame/blob/8c406fc/src/tools/typeAssert.ts#L3)

___

### isValidateStatusDefault

▸ **isValidateStatusDefault**(`status`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `number` |

#### Returns

`boolean`

#### Defined in

[jin-frame/src/tools/isValidateStatusDefault.ts:3](https://github.com/imjuni/jin-frame/blob/8c406fc/src/tools/isValidateStatusDefault.ts#L3)

___

### processBodyFormatters

▸ **processBodyFormatters**<`T`\>(`strict`, `thisFrame`, `field`, `formatterArgs`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `strict` | `boolean` |
| `thisFrame` | `T` |
| `field` | `Object` |
| `field.key` | `string` |
| `field.option` | [`IBodyFieldOption`](interfaces/IBodyFieldOption.md) |
| `formatterArgs` | [`TSingleBodyFormatter`](#tsinglebodyformatter) \| [`TMultipleBodyFormatter`](#tmultiplebodyformatter) |

#### Returns

`any`

#### Defined in

[jin-frame/src/processors/processBodyFormatters.ts:8](https://github.com/imjuni/jin-frame/blob/8c406fc/src/processors/processBodyFormatters.ts#L8)

___

### processHeaderFormatters

▸ **processHeaderFormatters**<`T`\>(`thisFrame`, `field`, `formatters`): `Record`<`string`, `any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `thisFrame` | `T` |
| `field` | [`IHeaderField`](interfaces/IHeaderField.md) |
| `formatters` | [`IFormatter`](interfaces/IFormatter.md)[] |

#### Returns

`Record`<`string`, `any`\>

#### Defined in

[jin-frame/src/processors/processHeaderFormatters.ts:7](https://github.com/imjuni/jin-frame/blob/8c406fc/src/processors/processHeaderFormatters.ts#L7)

___

### processObjectBodyFormatters

▸ **processObjectBodyFormatters**<`T`\>(`strict`, `thisFrame`, `field`, `formatterArgs`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `strict` | `boolean` |
| `thisFrame` | `T` |
| `field` | `Object` |
| `field.key` | `string` |
| `field.option` | [`IObjectBodyFieldOption`](interfaces/IObjectBodyFieldOption.md) |
| `formatterArgs` | [`TSingleObjectBodyFormatter`](#tsingleobjectbodyformatter) \| [`TMultipleObjectBodyFormatter`](#tmultipleobjectbodyformatter) |

#### Returns

`any`

#### Defined in

[jin-frame/src/processors/processObjectBodyFormatters.ts:8](https://github.com/imjuni/jin-frame/blob/8c406fc/src/processors/processObjectBodyFormatters.ts#L8)

___

### removeBothSlash

▸ **removeBothSlash**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[jin-frame/src/tools/slashUtils.ts:9](https://github.com/imjuni/jin-frame/blob/8c406fc/src/tools/slashUtils.ts#L9)

___

### removeEndSlash

▸ **removeEndSlash**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[jin-frame/src/tools/slashUtils.ts:1](https://github.com/imjuni/jin-frame/blob/8c406fc/src/tools/slashUtils.ts#L1)

___

### removeStartSlash

▸ **removeStartSlash**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[jin-frame/src/tools/slashUtils.ts:5](https://github.com/imjuni/jin-frame/blob/8c406fc/src/tools/slashUtils.ts#L5)

___

### startWithSlash

▸ **startWithSlash**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[jin-frame/src/tools/slashUtils.ts:13](https://github.com/imjuni/jin-frame/blob/8c406fc/src/tools/slashUtils.ts#L13)

___

### typeAssert

▸ **typeAssert**(`strict`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `strict` | `boolean` |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

[jin-frame/src/tools/typeAssert.ts:33](https://github.com/imjuni/jin-frame/blob/8c406fc/src/tools/typeAssert.ts#L33)
