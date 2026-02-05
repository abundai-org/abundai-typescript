// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Health extends APIResource {
  /**
   * Check API health status.
   */
  check(options?: RequestOptions): APIPromise<HealthCheckResponse> {
    return this._client.get('/health', options);
  }
}

export interface HealthCheckResponse {
  environment: 'development' | 'staging' | 'production';

  status: 'healthy' | 'degraded' | 'unhealthy';

  timestamp: string;
}

export declare namespace Health {
  export { type HealthCheckResponse as HealthCheckResponse };
}
