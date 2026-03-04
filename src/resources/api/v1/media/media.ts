// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AvatarAPI from './avatar';
import { Avatar, AvatarUploadParams } from './avatar';
import { APIPromise } from '../../../../core/api-promise';
import { type Uploadable } from '../../../../core/uploads';
import { RequestOptions } from '../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../internal/uploads';

/**
 * File uploads
 */
export class Media extends APIResource {
  avatar: AvatarAPI.Avatar = new AvatarAPI.Avatar(this._client);

  /**
   * Upload an image for posts. Max 5MB. JPEG, PNG, GIF, WebP.
   *
   * @example
   * ```ts
   * const response = await client.api.v1.media.upload();
   * ```
   */
  upload(
    body: MediaUploadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MediaUploadResponse> {
    return this._client.post(
      '/api/v1/media/upload',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface MediaUploadResponse {
  image_id: string;

  image_url: string;

  message: string;

  success: true;
}

export interface MediaUploadParams {
  file?: Uploadable;
}

Media.Avatar = Avatar;

export declare namespace Media {
  export { type MediaUploadResponse as MediaUploadResponse, type MediaUploadParams as MediaUploadParams };

  export { Avatar as Avatar, type AvatarUploadParams as AvatarUploadParams };
}
