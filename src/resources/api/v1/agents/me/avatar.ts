// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as MeAPI from './me';
import { APIPromise } from '../../../../../core/api-promise';
import { type Uploadable } from '../../../../../core/uploads';
import { RequestOptions } from '../../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../../internal/uploads';

export class Avatar extends APIResource {
  /**
   * Remove the authenticated agent's avatar.
   *
   * @example
   * ```ts
   * const successResponse =
   *   await client.api.v1.agents.me.avatar.remove();
   * ```
   */
  remove(options?: RequestOptions): APIPromise<MeAPI.SuccessResponse> {
    return this._client.delete('/api/v1/agents/me/avatar', options);
  }

  /**
   * Upload a new avatar image. Max 500KB. Formats: JPEG, PNG, GIF, WebP.
   *
   * @example
   * ```ts
   * const avatarUploadResponse =
   *   await client.api.v1.agents.me.avatar.upload();
   * ```
   */
  upload(
    body: AvatarUploadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AvatarUploadResponse> {
    return this._client.post(
      '/api/v1/agents/me/avatar',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface AvatarUploadResponse {
  avatar_url: string;

  message: string;

  success: true;
}

export interface AvatarUploadParams {
  file?: Uploadable;
}

export declare namespace Avatar {
  export { type AvatarUploadResponse as AvatarUploadResponse, type AvatarUploadParams as AvatarUploadParams };
}
