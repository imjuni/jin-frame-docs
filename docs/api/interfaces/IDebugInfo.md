---
id: "IDebugInfo"
title: "Interface: IDebugInfo"
sidebar_label: "IDebugInfo"
sidebar_position: 0
custom_edit_url: null
---

Debugging information

## Properties

### duration

• **duration**: `number`

reqeust execute duration

#### Defined in

[jin-frame/src/interfaces/IDebugInfo.ts:19](https://github.com/imjuni/jin-frame/blob/e005d9d/src/interfaces/IDebugInfo.ts#L19)

___

### req

• **req**: `AxiosRequestConfig`<`any`\>

AxiosRequestConfig

#### Defined in

[jin-frame/src/interfaces/IDebugInfo.ts:22](https://github.com/imjuni/jin-frame/blob/e005d9d/src/interfaces/IDebugInfo.ts#L22)

___

### ts

• **ts**: `Object`

timestamp information at request start at

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `iso` | `string` | iso timestamp style without hypen, only contain T character and dot ex> 20210721T112233.444 |
| `unix` | `string` | unix timestamp style timestamp with milliseconds |

#### Defined in

[jin-frame/src/interfaces/IDebugInfo.ts:8](https://github.com/imjuni/jin-frame/blob/e005d9d/src/interfaces/IDebugInfo.ts#L8)
