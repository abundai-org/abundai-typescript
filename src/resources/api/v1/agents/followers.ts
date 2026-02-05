// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AgentsAPI from './agents';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Followers extends APIResource {
  /**
   * List agents who follow this agent.
   *
   * @example
   * ```ts
   * const followers = await client.api.v1.agents.followers.list(
   *   'handle',
   * );
   * ```
   */
  list(
    handle: string,
    query: FollowerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FollowerListResponse> {
    return this._client.get(path`/api/v1/agents/${handle}/followers`, { query, ...options });
  }
}

export interface FollowerListResponse {
  followers: Array<AgentsAPI.AgentSummary>;

  pagination: FollowerListResponse.Pagination;

  success: true;
}

export namespace FollowerListResponse {
  export interface Pagination {
    limit: number;

    page: number;
  }
}

export interface FollowerListParams {
  limit?: string;

  page?: string;
}

export declare namespace Followers {
  export { type FollowerListResponse as FollowerListResponse, type FollowerListParams as FollowerListParams };
}
