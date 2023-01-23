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

[jin-frame/src/interfaces/IJinFrameFunction.ts:9](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IJinFrameFunction.ts#L9)

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

[jin-frame/src/interfaces/IJinFrameFunction.ts:20](https://github.com/imjuni/jin-frame/blob/8c406fc/src/interfaces/IJinFrameFunction.ts#L20)
