---
id: "JinFile"
title: "Class: JinFile<T>"
sidebar_label: "JinFile"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ReadStream` \| `Buffer` \| `File` \| `Blob` |

## Constructors

### constructor

• **new JinFile**<`T`\>(`name`, `file`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ReadStream` \| `Buffer` \| `File` \| `Blob` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `file` | `T` |

#### Defined in

[jin-frame/src/frames/JinFile.ts:10](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinFile.ts#L10)

## Properties

### #file

• `Private` **#file**: `T`

file content via stream or buffer

#### Defined in

[jin-frame/src/frames/JinFile.ts:8](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinFile.ts#L8)

___

### #name

• `Private` **#name**: `string`

filename

#### Defined in

[jin-frame/src/frames/JinFile.ts:5](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinFile.ts#L5)

## Accessors

### file

• `get` **file**(): `T`

#### Returns

`T`

#### Defined in

[jin-frame/src/frames/JinFile.ts:15](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinFile.ts#L15)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[jin-frame/src/frames/JinFile.ts:19](https://github.com/imjuni/jin-frame/blob/8c406fc/src/frames/JinFile.ts#L19)
