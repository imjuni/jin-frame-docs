---
id: "IJinFrameFunction"
title: "Interface: IJinFrameFunction<TPASS, TFAIL>"
sidebar_label: "IJinFrameFunction"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `TPASS` | `unknown` |
| `TFAIL` | `TPASS` |

## Implemented by

- [`JinEitherFrame`](../classes/JinEitherFrame.md)
- [`JinFrame`](../classes/JinFrame.md)

## Methods

### create

▸ **create**(`args?`): () => `Promise`<`AxiosResponse`<`TPASS`, `any`\>\> \| () => `Promise`<`PassFailEither`<[`IFailReplyJinEitherFrame`](IFailReplyJinEitherFrame.md)<`TFAIL`\> \| [`IFailExceptionJinEitherFrame`](IFailExceptionJinEitherFrame.md)<`TFAIL`\>, [`TPassJinEitherFrame`](../#tpassjineitherframe)<`TPASS`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | [`IJinFrameRequestConfig`](IJinFrameRequestConfig.md) & [`IJinFrameCreateConfig`](IJinFrameCreateConfig.md) |

#### Returns

() => `Promise`<`AxiosResponse`<`TPASS`, `any`\>\> \| () => `Promise`<`PassFailEither`<[`IFailReplyJinEitherFrame`](IFailReplyJinEitherFrame.md)<`TFAIL`\> \| [`IFailExceptionJinEitherFrame`](IFailExceptionJinEitherFrame.md)<`TFAIL`\>, [`TPassJinEitherFrame`](../#tpassjineitherframe)<`TPASS`\>\>\>

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:35](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L35)

___

### execute

▸ **execute**(`args?`): `Promise`<`AxiosResponse`<`TPASS`, `any`\>\> \| `Promise`<`PassFailEither`<[`IFailReplyJinEitherFrame`](IFailReplyJinEitherFrame.md)<`TFAIL`\> \| [`IFailExceptionJinEitherFrame`](IFailExceptionJinEitherFrame.md)<`TFAIL`\>, [`TPassJinEitherFrame`](../#tpassjineitherframe)<`TPASS`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | [`IJinFrameRequestConfig`](IJinFrameRequestConfig.md) & [`IJinFrameCreateConfig`](IJinFrameCreateConfig.md) |

#### Returns

`Promise`<`AxiosResponse`<`TPASS`, `any`\>\> \| `Promise`<`PassFailEither`<[`IFailReplyJinEitherFrame`](IFailReplyJinEitherFrame.md)<`TFAIL`\> \| [`IFailExceptionJinEitherFrame`](IFailExceptionJinEitherFrame.md)<`TFAIL`\>, [`TPassJinEitherFrame`](../#tpassjineitherframe)<`TPASS`\>\>\>

#### Defined in

[jin-frame/src/frames/AbstractJinFrame.ts:46](https://github.com/imjuni/jin-frame/blob/e005d9d/src/frames/AbstractJinFrame.ts#L46)
