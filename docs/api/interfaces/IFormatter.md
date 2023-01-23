---
id: "IFormatter"
title: "Interface: IFormatter"
sidebar_label: "IFormatter"
sidebar_position: 0
custom_edit_url: null
---

Define formatter for querystring, param, headers, body

## Properties

### dateTime

• `Optional` **dateTime**: (`value`: `Date`) => `string`

#### Type declaration

▸ (`value`): `string`

function is JavaScript Date type convert to string

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |

##### Returns

`string`

#### Defined in

[jin-frame/src/interfaces/IFormatter.ts:19](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IFormatter.ts#L19)

___

### number

• `Optional` **number**: (`value`: `number`) => `string` \| `number` \| `Date`

#### Type declaration

▸ (`value`): `string` \| `number` \| `Date`

function is number type convert to another number, string, Date

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

##### Returns

`string` \| `number` \| `Date`

#### Defined in

[jin-frame/src/interfaces/IFormatter.ts:13](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IFormatter.ts#L13)

___

### order

• `Optional` **order**: (``"string"`` \| ``"number"`` \| ``"dateTime"``)[]

order of formatter apply

**`Default`**

['number', 'string', 'dateTime']

#### Defined in

[jin-frame/src/interfaces/IFormatter.ts:10](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IFormatter.ts#L10)

___

### string

• `Optional` **string**: (`value`: `string`) => `string` \| `Date`

#### Type declaration

▸ (`value`): `string` \| `Date`

function is string type convert to another string, Date

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

##### Returns

`string` \| `Date`

#### Defined in

[jin-frame/src/interfaces/IFormatter.ts:16](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IFormatter.ts#L16)
