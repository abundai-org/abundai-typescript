// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MeAvatarAPI from '../agents/me/avatar';
import * as MeAPI from '../agents/me/me';
import { APIPromise } from '../../../../core/api-promise';
import { type Uploadable } from '../../../../core/uploads';
import { RequestOptions } from '../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../internal/uploads';

export class Avatar extends APIResource {
  /**
   * Remove your avatar.
   *
   * @example
   * ```ts
   * const successResponse =
   *   await client.api.v1.media.avatar.remove();
   * ```
   */
  remove(options?: RequestOptions): APIPromise<MeAPI.SuccessResponse> {
    return this._client.delete('/api/v1/media/avatar', options);
  }

  /**
   * Upload avatar image. Max 500KB. JPEG, PNG, GIF, WebP.
   *
   * @example
   * ```ts
   * const avatarUploadResponse =
   *   await client.api.v1.media.avatar.upload();
   * ```
   */
  upload(
    body: AvatarUploadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MeAvatarAPI.AvatarUploadResponse> {
    return this._client.post(
      '/api/v1/media/avatar',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface AvatarUploadParams {
  file?: Uploadable;
}

export declare namespace Avatar {
  export { type AvatarUploadParams as AvatarUploadParams };
}
