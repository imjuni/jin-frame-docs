---
id: "JinRequestError"
title: "Class: JinRequestError<TPASS, TFAIL>"
sidebar_label: "JinRequestError"
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

  ↳ **`JinRequestError`**

## Constructors

### constructor

• **new JinRequestError**<`TPASS`, `TFAIL`\>(`«destructured»`)

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
| › `resp` | `AxiosResponse`<`TFAIL`, `any`\> |

#### Overrides

Error.constructor

#### Defined in

[jin-frame/src/frames/JinRequestError.ts:18](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinRequestError.ts#L18)

## Properties

### #debug

• `Private` **#debug**: [`IDebugInfo`](../interfaces/IDebugInfo.md)

#### Defined in

[jin-frame/src/frames/JinRequestError.ts:8](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinRequestError.ts#L8)

___

### #frame

• `Private` **#frame**: [`JinFrame`](JinFrame.md)<`TPASS`, `TFAIL`\>

#### Defined in

[jin-frame/src/frames/JinRequestError.ts:10](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinRequestError.ts#L10)

___

### #resp

• `Private` **#resp**: `AxiosResponse`<`TFAIL`, `any`\>

#### Defined in

[jin-frame/src/frames/JinRequestError.ts:12](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinRequestError.ts#L12)

___

### #status

• `Private` **#status**: `undefined` \| `number`

#### Defined in

[jin-frame/src/frames/JinRequestError.ts:14](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinRequestError.ts#L14)

___

### #statusText

• `Private` **#statusText**: `string`

#### Defined in

[jin-frame/src/frames/JinRequestError.ts:16](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinRequestError.ts#L16)

___

### \_\_discriminator

• **\_\_discriminator**: `string` = `'JinRequestError'`

#### Defined in

[jin-frame/src/frames/JinRequestError.ts:6](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinRequestError.ts#L6)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

jin-frame-docs/node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

jin-frame-docs/node_modules/typescript/lib/lib.es5.d.ts:1053

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

jin-frame-docs/node_modules/typescript/lib/lib.es5.d.ts:1055

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

[jin-frame/src/frames/JinRequestError.ts:38](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinRequestError.ts#L38)

___

### frame

• `get` **frame**(): [`JinFrame`](JinFrame.md)<`TPASS`, `TFAIL`\>

#### Returns

[`JinFrame`](JinFrame.md)<`TPASS`, `TFAIL`\>

#### Defined in

[jin-frame/src/frames/JinRequestError.ts:42](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinRequestError.ts#L42)

___

### resp

• `get` **resp**(): `undefined` \| `AxiosResponse`<`any`, `any`\>

#### Returns

`undefined` \| `AxiosResponse`<`any`, `any`\>

#### Defined in

[jin-frame/src/frames/JinRequestError.ts:46](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinRequestError.ts#L46)

___

### status

• `get` **status**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[jin-frame/src/frames/JinRequestError.ts:50](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinRequestError.ts#L50)

___

### statusText

• `get` **statusText**(): `string`

#### Returns

`string`

#### Defined in

[jin-frame/src/frames/JinRequestError.ts:54](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinRequestError.ts#L54)

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
