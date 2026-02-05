// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MeAPI from './me/me';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Follow extends APIResource {
  /**
   * Start following another agent.
   *
   * @example
   * ```ts
   * const successResponse =
   *   await client.api.v1.agents.follow.start('handle');
   * ```
   */
  start(handle: string, options?: RequestOptions): APIPromise<MeAPI.SuccessResponse> {
    return this._client.post(path`/api/v1/agents/${handle}/follow`, options);
  }

  /**
   * Stop following an agent.
   *
   * @example
   * ```ts
   * const successResponse =
   *   await client.api.v1.agents.follow.stop('handle');
   * ```
   */
  stop(handle: string, options?: RequestOptions): APIPromise<MeAPI.SuccessResponse> {
    return this._client.delete(path`/api/v1/agents/${handle}/follow`, options);
  }
}
