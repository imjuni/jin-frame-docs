---
id: "JinCreateError"
title: "Class: JinCreateError<T, TPASS, TFAIL>"
sidebar_label: "JinCreateError"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`JinFrame`](JinFrame.md)<`TPASS`, `TFAIL`\> \| [`JinEitherFrame`](JinEitherFrame.md)<`TPASS`, `TFAIL`\> |
| `TPASS` | `TPASS` |
| `TFAIL` | `TPASS` |

## Hierarchy

- `Error`

  ↳ **`JinCreateError`**

## Constructors

### constructor

• **new JinCreateError**<`T`, `TPASS`, `TFAIL`\>(`«destructured»`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`JinFrame`](JinFrame.md)<`TPASS`, `TFAIL`\> \| [`JinEitherFrame`](JinEitherFrame.md)<`TPASS`, `TFAIL`\> |
| `TPASS` | `TPASS` |
| `TFAIL` | `TPASS` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `debug` | `Omit`<[`IDebugInfo`](../interfaces/IDebugInfo.md), ``"req"``\> |
| › `frame` | `T` extends [`JinFrame`](JinFrame.md)<`TPASS`, `TFAIL`\> ? [`JinFrame`](JinFrame.md)<`TPASS`, `TFAIL`\> : [`JinEitherFrame`](JinEitherFrame.md)<`TPASS`, `TFAIL`\> |
| › `message` | `string` |

#### Overrides

Error.constructor

#### Defined in

[jin-frame/src/frames/JinCreateError.ts:22](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinCreateError.ts#L22)

## Properties

### #debug

• `Private` **#debug**: `Omit`<[`IDebugInfo`](../interfaces/IDebugInfo.md), ``"req"``\>

#### Defined in

[jin-frame/src/frames/JinCreateError.ts:14](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinCreateError.ts#L14)

___

### #frame

• `Private` **#frame**: `T` extends [`JinFrame`](JinFrame.md)<`TPASS`, `TFAIL`\> ? [`JinFrame`](JinFrame.md)<`TPASS`, `TFAIL`\> : [`JinEitherFrame`](JinEitherFrame.md)<`TPASS`, `TFAIL`\>

#### Defined in

[jin-frame/src/frames/JinCreateError.ts:16](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinCreateError.ts#L16)

___

### #status

• `Private` **#status**: `undefined` \| `number`

#### Defined in

[jin-frame/src/frames/JinCreateError.ts:18](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinCreateError.ts#L18)

___

### #statusText

• `Private` **#statusText**: `string`

#### Defined in

[jin-frame/src/frames/JinCreateError.ts:20](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinCreateError.ts#L20)

___

### \_\_discriminator

• **\_\_discriminator**: `string` = `'JinCreateError'`

#### Defined in

[jin-frame/src/frames/JinCreateError.ts:12](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinCreateError.ts#L12)

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

• `get` **debug**(): `Omit`<[`IDebugInfo`](../interfaces/IDebugInfo.md), ``"req"``\>

#### Returns

`Omit`<[`IDebugInfo`](../interfaces/IDebugInfo.md), ``"req"``\>

#### Defined in

[jin-frame/src/frames/JinCreateError.ts:39](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinCreateError.ts#L39)

___

### frame

• `get` **frame**(): `T` extends [`JinFrame`](JinFrame.md)<`TPASS`, `TFAIL`\> ? [`JinFrame`](JinFrame.md)<`TPASS`, `TFAIL`\> : [`JinEitherFrame`](JinEitherFrame.md)<`TPASS`, `TFAIL`\>

#### Returns

`T` extends [`JinFrame`](JinFrame.md)<`TPASS`, `TFAIL`\> ? [`JinFrame`](JinFrame.md)<`TPASS`, `TFAIL`\> : [`JinEitherFrame`](JinEitherFrame.md)<`TPASS`, `TFAIL`\>

#### Defined in

[jin-frame/src/frames/JinCreateError.ts:43](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinCreateError.ts#L43)

___

### status

• `get` **status**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[jin-frame/src/frames/JinCreateError.ts:47](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinCreateError.ts#L47)

___

### statusText

• `get` **statusText**(): `string`

#### Returns

`string`

#### Defined in

[jin-frame/src/frames/JinCreateError.ts:51](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinCreateError.ts#L51)

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
