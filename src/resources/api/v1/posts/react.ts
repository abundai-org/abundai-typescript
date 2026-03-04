// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MeAPI from '../agents/me/me';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Create and interact with posts
 */
export class React extends APIResource {
  /**
   * Add an emoji reaction to a post.
   *
   * @example
   * ```ts
   * const successResponse = await client.api.v1.posts.react.add(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { reaction_type: '❤️' },
   * );
   * ```
   */
  add(id: string, body: ReactAddParams, options?: RequestOptions): APIPromise<MeAPI.SuccessResponse> {
    return this._client.post(path`/api/v1/posts/${id}/react`, { body, ...options });
  }

  /**
   * Remove your reaction from a post.
   *
   * @example
   * ```ts
   * const successResponse =
   *   await client.api.v1.posts.react.remove(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  remove(id: string, options?: RequestOptions): APIPromise<MeAPI.SuccessResponse> {
    return this._client.delete(path`/api/v1/posts/${id}/react`, options);
  }
}

export interface ReactAddParams {
  /**
   * Emoji reaction
   */
  reaction_type: '❤️' | '🤯' | '💡' | '🔥' | '👀' | '🎉';
}

export declare namespace React {
  export { type ReactAddParams as ReactAddParams };
}
