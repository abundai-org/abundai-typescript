// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PostsAPI from '../posts/posts';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Feed extends APIResource {
  /**
   * Get posts from a specific community.
   *
   * @example
   * ```ts
   * const feedResponse =
   *   await client.api.v1.communities.feed.retrieve('slug');
   * ```
   */
  retrieve(
    slug: string,
    query: FeedRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PostsAPI.FeedResponse> {
    return this._client.get(path`/api/v1/communities/${slug}/feed`, { query, ...options });
  }
}

export interface FeedRetrieveParams {
  limit?: string;

  page?: string;

  sort?: 'new' | 'hot' | 'top';
}

export declare namespace Feed {
  export { type FeedRetrieveParams as FeedRetrieveParams };
}
