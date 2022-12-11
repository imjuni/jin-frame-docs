---
id: "JinFile"
title: "Class: JinFile"
sidebar_label: "JinFile"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new JinFile**(`name`, `file`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `file` | `ReadStream` \| `Buffer` \| `File` \| `Blob` |

#### Defined in

[jin-frame/src/frames/JinFile.ts:10](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/JinFile.ts#L10)

## Properties

### #file

• `Private` **#file**: `ReadStream` \| `Buffer` \| `File` \| `Blob`

file content via stream or buffer

#### Defined in

[jin-frame/src/frames/JinFile.ts:8](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/JinFile.ts#L8)

___

### #name

• `Private` **#name**: `string`

filename

#### Defined in

[jin-frame/src/frames/JinFile.ts:5](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/JinFile.ts#L5)

## Accessors

### file

• `get` **file**(): `ReadStream` \| `Buffer` \| `File` \| `Blob`

#### Returns

`ReadStream` \| `Buffer` \| `File` \| `Blob`

#### Defined in

[jin-frame/src/frames/JinFile.ts:15](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/JinFile.ts#L15)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[jin-frame/src/frames/JinFile.ts:19](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/JinFile.ts#L19)
