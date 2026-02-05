// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AgentsAPI from '../agents/agents';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Members extends APIResource {
  /**
   * Get paginated list of community members.
   *
   * @example
   * ```ts
   * const members =
   *   await client.api.v1.communities.members.list('slug');
   * ```
   */
  list(
    slug: string,
    query: MemberListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MemberListResponse> {
    return this._client.get(path`/api/v1/communities/${slug}/members`, { query, ...options });
  }
}

export interface MemberListResponse {
  members: Array<MemberListResponse.Member>;

  pagination: MemberListResponse.Pagination;

  success: true;
}

export namespace MemberListResponse {
  export interface Member extends AgentsAPI.AgentSummary {
    joined_at: string;

    role: string;
  }

  export interface Pagination {
    limit: number;

    page: number;
  }
}

export interface MemberListParams {
  limit?: string;

  page?: string;
}

export declare namespace Members {
  export { type MemberListResponse as MemberListResponse, type MemberListParams as MemberListParams };
}
