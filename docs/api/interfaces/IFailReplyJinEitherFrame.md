---
id: "IFailReplyJinEitherFrame"
title: "Interface: IFailReplyJinEitherFrame<T>"
sidebar_label: "IFailReplyJinEitherFrame"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `AxiosResponse`<`T`\>

- [`IFailJinEitherFrame`](IFailJinEitherFrame.md)<`T`\>

  ↳ **`IFailReplyJinEitherFrame`**

## Properties

### $debug

• **$debug**: [`IDebugInfo`](IDebugInfo.md)

debugging information

#### Inherited from

[IFailJinEitherFrame](IFailJinEitherFrame.md).[$debug](IFailJinEitherFrame.md#$debug)

#### Defined in

[jin-frame/src/interfaces/IFailJinEitherFrame.ts:11](https://github.com/imjuni/jin-frame/blob/e005d9d/src/interfaces/IFailJinEitherFrame.ts#L11)

___

### $err

• **$err**: `Error`

exception class, $err representative message, stacktrace

#### Inherited from

[IFailJinEitherFrame](IFailJinEitherFrame.md).[$err](IFailJinEitherFrame.md#$err)

#### Defined in

[jin-frame/src/interfaces/IFailJinEitherFrame.ts:8](https://github.com/imjuni/jin-frame/blob/e005d9d/src/interfaces/IFailJinEitherFrame.ts#L8)

___

### $frame

• **$frame**: [`JinEitherFrame`](../classes/JinEitherFrame.md)<`any`, `T`\>

#### Inherited from

[IFailJinEitherFrame](IFailJinEitherFrame.md).[$frame](IFailJinEitherFrame.md#$frame)

#### Defined in

[jin-frame/src/interfaces/IFailJinEitherFrame.ts:13](https://github.com/imjuni/jin-frame/blob/e005d9d/src/interfaces/IFailJinEitherFrame.ts#L13)

___

### $progress

• **$progress**: ``"fail"``

progress of jin-frame, fail representative success communication but result is fail

#### Defined in

[jin-frame/src/interfaces/IFailJinEitherFrame.ts:23](https://github.com/imjuni/jin-frame/blob/e005d9d/src/interfaces/IFailJinEitherFrame.ts#L23)

___

### config

• **config**: `AxiosRequestConfig`<`any`\>

#### Inherited from

AxiosResponse.config

#### Defined in

jin-frame/node_modules/axios/index.d.ts:345

___

### data

• **data**: `T`

#### Inherited from

AxiosResponse.data

#### Defined in

jin-frame/node_modules/axios/index.d.ts:341

___

### headers

• **headers**: `AxiosResponseHeaders` \| `Partial`<`Record`<`string`, `string`\> & { `set-cookie?`: `string`[]  }\>

#### Inherited from

AxiosResponse.headers

#### Defined in

jin-frame/node_modules/axios/index.d.ts:344

___

### request

• `Optional` **request**: `any`

#### Inherited from

AxiosResponse.request

#### Defined in

jin-frame/node_modules/axios/index.d.ts:346

___

### status

• **status**: `number`

#### Inherited from

[IFailJinEitherFrame](IFailJinEitherFrame.md).[status](IFailJinEitherFrame.md#status)

#### Defined in

jin-frame/node_modules/axios/index.d.ts:342

___

### statusText

• **statusText**: `string`

#### Inherited from

[IFailJinEitherFrame](IFailJinEitherFrame.md).[statusText](IFailJinEitherFrame.md#statustext)

#### Defined in

jin-frame/node_modules/axios/index.d.ts:343
