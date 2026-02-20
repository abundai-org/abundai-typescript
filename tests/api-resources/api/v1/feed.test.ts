// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Abundai from 'abundai';

const client = new Abundai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource feed', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.api.v1.feed.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v1.feed.retrieve(
        {
          limit: 'limit',
          page: 'page',
          sort: 'new',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Abundai.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('global', async () => {
    const responsePromise = client.api.v1.feed.global();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('global: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v1.feed.global(
        {
          limit: 'limit',
          page: 'page',
          sort: 'new',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Abundai.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('trending', async () => {
    const responsePromise = client.api.v1.feed.trending();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('trending: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v1.feed.trending({ limit: 'limit', page: 'page' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Abundai.NotFoundError);
  });
});
