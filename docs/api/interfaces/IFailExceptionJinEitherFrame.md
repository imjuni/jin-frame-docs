---
id: "IFailExceptionJinEitherFrame"
title: "Interface: IFailExceptionJinEitherFrame<T>"
sidebar_label: "IFailExceptionJinEitherFrame"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`IFailJinEitherFrame`](IFailJinEitherFrame.md)<`T`\>

  ↳ **`IFailExceptionJinEitherFrame`**

## Properties

### $debug

• **$debug**: `Omit`<[`IDebugInfo`](IDebugInfo.md), ``"req"``\>

debugging information

#### Inherited from

[IFailJinEitherFrame](IFailJinEitherFrame.md).[$debug](IFailJinEitherFrame.md#$debug)

#### Defined in

[jin-frame/src/interfaces/IFailJinEitherFrame.ts:11](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IFailJinEitherFrame.ts#L11)

___

### $err

• **$err**: `Error`

exception class, $err representative message, stacktrace

#### Inherited from

[IFailJinEitherFrame](IFailJinEitherFrame.md).[$err](IFailJinEitherFrame.md#$err)

#### Defined in

[jin-frame/src/interfaces/IFailJinEitherFrame.ts:8](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IFailJinEitherFrame.ts#L8)

___

### $frame

• **$frame**: [`JinEitherFrame`](../classes/JinEitherFrame.md)<`any`, `T`\>

#### Inherited from

[IFailJinEitherFrame](IFailJinEitherFrame.md).[$frame](IFailJinEitherFrame.md#$frame)

#### Defined in

[jin-frame/src/interfaces/IFailJinEitherFrame.ts:13](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IFailJinEitherFrame.ts#L13)

___

### $progress

• **$progress**: ``"error"``

progress of jin-frame, error representative mostly raise exception from axios.request

#### Defined in

[jin-frame/src/interfaces/IFailJinEitherFrame.ts:18](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IFailJinEitherFrame.ts#L18)

___

### status

• **status**: `number`

#### Inherited from

[IFailJinEitherFrame](IFailJinEitherFrame.md).[status](IFailJinEitherFrame.md#status)

#### Defined in

jin-frame/node_modules/axios/index.d.ts:352

___

### statusText

• **statusText**: `string`

#### Inherited from

[IFailJinEitherFrame](IFailJinEitherFrame.md).[statusText](IFailJinEitherFrame.md#statustext)

#### Defined in

jin-frame/node_modules/axios/index.d.ts:353
