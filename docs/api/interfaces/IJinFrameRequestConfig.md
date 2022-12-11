---
id: "IJinFrameRequestConfig"
title: "Interface: IJinFrameRequestConfig"
sidebar_label: "IJinFrameRequestConfig"
sidebar_position: 0
custom_edit_url: null
---

Configuration for AxiosRequestConfig. Exclude headers, method, data, url, validateStatus.
headers, method, data, url, validateStatus use jin-frame configuration value.

## Hierarchy

- `Omit`<`AxiosRequestConfig`, ``"headers"`` \| ``"method"`` \| ``"data"`` \| ``"url"`` \| ``"validateStatus"``\>

  ↳ **`IJinFrameRequestConfig`**

## Properties

### adapter

• `Optional` **adapter**: `AxiosAdapter`

#### Inherited from

Omit.adapter

#### Defined in

jin-frame/node_modules/axios/index.d.ts:289

___

### auth

• `Optional` **auth**: `AxiosBasicCredentials`

#### Inherited from

Omit.auth

#### Defined in

jin-frame/node_modules/axios/index.d.ts:290

___

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

Omit.baseURL

#### Defined in

jin-frame/node_modules/axios/index.d.ts:279

___

### beforeRedirect

• `Optional` **beforeRedirect**: (`options`: `Record`<`string`, `any`\>, `responseDetails`: { `headers`: `Record`<`string`, `string`\>  }) => `void`

#### Type declaration

▸ (`options`, `responseDetails`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Record`<`string`, `any`\> |
| `responseDetails` | `Object` |
| `responseDetails.headers` | `Record`<`string`, `string`\> |

##### Returns

`void`

#### Inherited from

Omit.beforeRedirect

#### Defined in

jin-frame/node_modules/axios/index.d.ts:302

___

### cancelToken

• `Optional` **cancelToken**: `CancelToken`

#### Inherited from

Omit.cancelToken

#### Defined in

jin-frame/node_modules/axios/index.d.ts:307

___

### decompress

• `Optional` **decompress**: `boolean`

#### Inherited from

Omit.decompress

#### Defined in

jin-frame/node_modules/axios/index.d.ts:308

___

### env

• `Optional` **env**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FormData?` | (...`args`: `any`[]) => `object` |

#### Inherited from

Omit.env

#### Defined in

jin-frame/node_modules/axios/index.d.ts:312

___

### formSerializer

• `Optional` **formSerializer**: `FormSerializerOptions`

#### Inherited from

Omit.formSerializer

#### Defined in

jin-frame/node_modules/axios/index.d.ts:315

___

### httpAgent

• `Optional` **httpAgent**: `any`

#### Inherited from

Omit.httpAgent

#### Defined in

jin-frame/node_modules/axios/index.d.ts:304

___

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Inherited from

Omit.httpsAgent

#### Defined in

jin-frame/node_modules/axios/index.d.ts:305

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Inherited from

Omit.insecureHTTPParser

#### Defined in

jin-frame/node_modules/axios/index.d.ts:311

___

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Inherited from

Omit.maxBodyLength

#### Defined in

jin-frame/node_modules/axios/index.d.ts:299

___

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Inherited from

Omit.maxContentLength

#### Defined in

jin-frame/node_modules/axios/index.d.ts:297

___

### maxRate

• `Optional` **maxRate**: `number` \| [`number`, `number`]

#### Inherited from

Omit.maxRate

#### Defined in

jin-frame/node_modules/axios/index.d.ts:301

___

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Inherited from

Omit.maxRedirects

#### Defined in

jin-frame/node_modules/axios/index.d.ts:300

___

### onDownloadProgress

• `Optional` **onDownloadProgress**: (`progressEvent`: `AxiosProgressEvent`) => `void`

#### Type declaration

▸ (`progressEvent`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `AxiosProgressEvent` |

##### Returns

`void`

#### Inherited from

Omit.onDownloadProgress

#### Defined in

jin-frame/node_modules/axios/index.d.ts:296

___

### onUploadProgress

• `Optional` **onUploadProgress**: (`progressEvent`: `AxiosProgressEvent`) => `void`

#### Type declaration

▸ (`progressEvent`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `AxiosProgressEvent` |

##### Returns

`void`

#### Inherited from

Omit.onUploadProgress

#### Defined in

jin-frame/node_modules/axios/index.d.ts:295

___

### params

• `Optional` **params**: `any`

#### Inherited from

Omit.params

#### Defined in

jin-frame/node_modules/axios/index.d.ts:283

___

### paramsSerializer

• `Optional` **paramsSerializer**: `ParamsSerializerOptions`

#### Inherited from

Omit.paramsSerializer

#### Defined in

jin-frame/node_modules/axios/index.d.ts:284

___

### proxy

• `Optional` **proxy**: ``false`` \| `AxiosProxyConfig`

#### Inherited from

Omit.proxy

#### Defined in

jin-frame/node_modules/axios/index.d.ts:306

___

### responseEncoding

• `Optional` **responseEncoding**: `string`

#### Inherited from

Omit.responseEncoding

#### Defined in

jin-frame/node_modules/axios/index.d.ts:292

___

### responseType

• `Optional` **responseType**: `ResponseType`

#### Inherited from

Omit.responseType

#### Defined in

jin-frame/node_modules/axios/index.d.ts:291

___

### signal

• `Optional` **signal**: `GenericAbortSignal`

#### Inherited from

Omit.signal

#### Defined in

jin-frame/node_modules/axios/index.d.ts:310

___

### socketPath

• `Optional` **socketPath**: ``null`` \| `string`

#### Inherited from

Omit.socketPath

#### Defined in

jin-frame/node_modules/axios/index.d.ts:303

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

Omit.timeout

#### Defined in

jin-frame/node_modules/axios/index.d.ts:286

___

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Inherited from

Omit.timeoutErrorMessage

#### Defined in

jin-frame/node_modules/axios/index.d.ts:287

___

### transformRequest

• `Optional` **transformRequest**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

#### Inherited from

Omit.transformRequest

#### Defined in

jin-frame/node_modules/axios/index.d.ts:280

___

### transformResponse

• `Optional` **transformResponse**: `AxiosResponseTransformer` \| `AxiosResponseTransformer`[]

#### Inherited from

Omit.transformResponse

#### Defined in

jin-frame/node_modules/axios/index.d.ts:281

___

### transitional

• `Optional` **transitional**: `TransitionalOptions`

#### Inherited from

Omit.transitional

#### Defined in

jin-frame/node_modules/axios/index.d.ts:309

___

### userAgent

• `Optional` **userAgent**: `string`

User-Agent string. Axios use Custom Use-Agent string like "axios/0.27.2". You can change
that string by useAgent field.

#### Defined in

[jin-frame/src/interfaces/IJinFrameRequestConfig.ts:13](https://github.com/imjuni/jin-frame/blob/e005d9d/src/interfaces/IJinFrameRequestConfig.ts#L13)

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Inherited from

Omit.withCredentials

#### Defined in

jin-frame/node_modules/axios/index.d.ts:288

___

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Inherited from

Omit.xsrfCookieName

#### Defined in

jin-frame/node_modules/axios/index.d.ts:293

___

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Inherited from

Omit.xsrfHeaderName

#### Defined in

jin-frame/node_modules/axios/index.d.ts:294
