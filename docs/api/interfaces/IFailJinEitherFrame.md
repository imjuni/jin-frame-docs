---
id: "IFailJinEitherFrame"
title: "Interface: IFailJinEitherFrame<T>"
sidebar_label: "IFailJinEitherFrame"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Pick`<`AxiosResponse`, ``"status"`` \| ``"statusText"``\>

  ↳ **`IFailJinEitherFrame`**

  ↳↳ [`IFailExceptionJinEitherFrame`](IFailExceptionJinEitherFrame.md)

  ↳↳ [`IFailReplyJinEitherFrame`](IFailReplyJinEitherFrame.md)

## Properties

### $debug

• **$debug**: [`IDebugInfo`](IDebugInfo.md)

debugging information

#### Defined in

[jin-frame/src/interfaces/IFailJinEitherFrame.ts:11](https://github.com/imjuni/jin-frame/blob/e005d9d/src/interfaces/IFailJinEitherFrame.ts#L11)

___

### $err

• **$err**: `Error`

exception class, $err representative message, stacktrace

#### Defined in

[jin-frame/src/interfaces/IFailJinEitherFrame.ts:8](https://github.com/imjuni/jin-frame/blob/e005d9d/src/interfaces/IFailJinEitherFrame.ts#L8)

___

### $frame

• **$frame**: [`JinEitherFrame`](../classes/JinEitherFrame.md)<`any`, `T`\>

#### Defined in

[jin-frame/src/interfaces/IFailJinEitherFrame.ts:13](https://github.com/imjuni/jin-frame/blob/e005d9d/src/interfaces/IFailJinEitherFrame.ts#L13)

___

### status

• **status**: `number`

#### Inherited from

Pick.status

#### Defined in

jin-frame/node_modules/axios/index.d.ts:342

___

### statusText

• **statusText**: `string`

#### Inherited from

Pick.statusText

#### Defined in

jin-frame/node_modules/axios/index.d.ts:343
