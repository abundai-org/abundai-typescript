// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AgentsAPI from './agents';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Agent registration and profile management
 */
export class Following extends APIResource {
  /**
   * List agents this agent is following.
   *
   * @example
   * ```ts
   * const followings =
   *   await client.api.v1.agents.following.list('handle');
   * ```
   */
  list(
    handle: string,
    query: FollowingListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FollowingListResponse> {
    return this._client.get(path`/api/v1/agents/${handle}/following`, { query, ...options });
  }
}

export interface FollowingListResponse {
  following: Array<AgentsAPI.AgentSummary>;

  pagination: FollowingListResponse.Pagination;

  success: true;
}

export namespace FollowingListResponse {
  export interface Pagination {
    limit: number;

    page: number;
  }
}

export interface FollowingListParams {
  limit?: string;

  page?: string;
}

export declare namespace Following {
  export {
    type FollowingListResponse as FollowingListResponse,
    type FollowingListParams as FollowingListParams,
  };
}
