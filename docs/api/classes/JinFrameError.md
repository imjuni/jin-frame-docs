---
id: "JinFrameError"
title: "Class: JinFrameError<TPASS, TFAIL>"
sidebar_label: "JinFrameError"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `TPASS` | `TPASS` |
| `TFAIL` | `any` |

## Hierarchy

- `Error`

  ↳ **`JinFrameError`**

## Constructors

### constructor

• **new JinFrameError**<`TPASS`, `TFAIL`\>(`«destructured»`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TPASS` | `TPASS` |
| `TFAIL` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `debug` | [`IDebugInfo`](../interfaces/IDebugInfo.md) |
| › `frame` | [`JinFrame`](JinFrame.md)<`TPASS`, `TFAIL`\> |
| › `message` | `string` |
| › `resp?` | `AxiosResponse`<`TFAIL`, `any`\> |

#### Overrides

Error.constructor

#### Defined in

[jin-frame/src/frames/JinFrameError.ts:14](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/JinFrameError.ts#L14)

## Properties

### #debug

• `Private` **#debug**: [`IDebugInfo`](../interfaces/IDebugInfo.md)

#### Defined in

[jin-frame/src/frames/JinFrameError.ts:8](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/JinFrameError.ts#L8)

___

### #frame

• `Private` **#frame**: [`JinFrame`](JinFrame.md)<`TPASS`, `TFAIL`\>

#### Defined in

[jin-frame/src/frames/JinFrameError.ts:10](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/JinFrameError.ts#L10)

___

### #resp

• `Private` `Optional` **#resp**: `AxiosResponse`<`TFAIL`, `any`\>

#### Defined in

[jin-frame/src/frames/JinFrameError.ts:12](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/JinFrameError.ts#L12)

___

### \_\_discriminator

• **\_\_discriminator**: `string` = `'JinFrameError'`

#### Defined in

[jin-frame/src/frames/JinFrameError.ts:6](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/JinFrameError.ts#L6)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

docs/jin-frame-docs/node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

docs/jin-frame-docs/node_modules/typescript/lib/lib.es5.d.ts:1053

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

docs/jin-frame-docs/node_modules/typescript/lib/lib.es5.d.ts:1055

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

jin-frame/node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

jin-frame/node_modules/@types/node/globals.d.ts:13

## Accessors

### debug

• `get` **debug**(): [`IDebugInfo`](../interfaces/IDebugInfo.md)

#### Returns

[`IDebugInfo`](../interfaces/IDebugInfo.md)

#### Defined in

[jin-frame/src/frames/JinFrameError.ts:32](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/JinFrameError.ts#L32)

___

### frame

• `get` **frame**(): [`JinFrame`](JinFrame.md)<`TPASS`, `TFAIL`\>

#### Returns

[`JinFrame`](JinFrame.md)<`TPASS`, `TFAIL`\>

#### Defined in

[jin-frame/src/frames/JinFrameError.ts:36](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/JinFrameError.ts#L36)

___

### resp

• `get` **resp**(): `undefined` \| `AxiosResponse`<`any`, `any`\>

#### Returns

`undefined` \| `AxiosResponse`<`any`, `any`\>

#### Defined in

[jin-frame/src/frames/JinFrameError.ts:40](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/JinFrameError.ts#L40)

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

jin-frame/node_modules/@types/node/globals.d.ts:4
