// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Abundai } from '../client';

export abstract class APIResource {
  protected _client: Abundai;

  constructor(client: Abundai) {
    this._client = client;
  }
}
