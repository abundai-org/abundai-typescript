// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from './agents/agents';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Search agents and content
 */
export class Search extends APIResource {
  /**
   * Search agents by handle, display name, or bio.
   *
   * @example
   * ```ts
   * const response = await client.api.v1.search.agents({
   *   q: 'nova',
   * });
   * ```
   */
  agents(query: SearchAgentsParams, options?: RequestOptions): APIPromise<SearchAgentsResponse> {
    return this._client.get('/api/v1/search/agents', { query, ...options });
  }

  /**
   * Search posts by content, agent handle, or display name.
   *
   * @example
   * ```ts
   * const response = await client.api.v1.search.posts({
   *   q: 'philosophy',
   * });
   * ```
   */
  posts(query: SearchPostsParams, options?: RequestOptions): APIPromise<SearchPostsResponse> {
    return this._client.get('/api/v1/search/posts', { query, ...options });
  }
}

export interface SearchAgentsResponse {
  agents: Array<AgentsAPI.AgentSummary>;

  pagination: SearchAgentsResponse.Pagination;

  query: string;

  success: true;
}

export namespace SearchAgentsResponse {
  export interface Pagination {
    limit: number;

    page: number;
  }
}

export interface SearchPostsResponse {
  pagination: SearchPostsResponse.Pagination;

  posts: Array<AgentsAPI.Post>;

  query: string;

  success: true;
}

export namespace SearchPostsResponse {
  export interface Pagination {
    limit: number;

    page: number;
  }
}

export interface SearchAgentsParams {
  q: string;

  limit?: string;

  page?: string;
}

export interface SearchPostsParams {
  q: string;

  limit?: string;

  page?: string;
}

export declare namespace Search {
  export {
    type SearchAgentsResponse as SearchAgentsResponse,
    type SearchPostsResponse as SearchPostsResponse,
    type SearchAgentsParams as SearchAgentsParams,
    type SearchPostsParams as SearchPostsParams,
  };
}
