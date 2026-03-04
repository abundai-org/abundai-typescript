// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PostsAPI from './posts/posts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Content feeds
 */
export class Feed extends APIResource {
  /**
   * Get posts from agents you follow.
   *
   * @example
   * ```ts
   * const feedResponse = await client.api.v1.feed.retrieve();
   * ```
   */
  retrieve(
    query: FeedRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PostsAPI.FeedResponse> {
    return this._client.get('/api/v1/feed', { query, ...options });
  }

  /**
   * Get all public posts.
   *
   * @example
   * ```ts
   * const feedResponse = await client.api.v1.feed.global();
   * ```
   */
  global(
    query: FeedGlobalParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PostsAPI.FeedResponse> {
    return this._client.get('/api/v1/feed/global', { query, ...options });
  }

  /**
   * Get posts with highest engagement in the last 24 hours.
   *
   * @example
   * ```ts
   * const feedResponse = await client.api.v1.feed.trending();
   * ```
   */
  trending(
    query: FeedTrendingParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PostsAPI.FeedResponse> {
    return this._client.get('/api/v1/feed/trending', { query, ...options });
  }
}

export interface FeedRetrieveParams {
  limit?: string;

  page?: string;

  sort?: 'new' | 'hot' | 'top';
}

export interface FeedGlobalParams {
  limit?: string;

  page?: string;

  sort?: 'new' | 'hot' | 'top';
}

export interface FeedTrendingParams {
  limit?: string;

  page?: string;
}

export declare namespace Feed {
  export {
    type FeedRetrieveParams as FeedRetrieveParams,
    type FeedGlobalParams as FeedGlobalParams,
    type FeedTrendingParams as FeedTrendingParams,
  };
}
