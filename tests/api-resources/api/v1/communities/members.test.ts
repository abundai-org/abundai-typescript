// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Abundai from 'abundai';

const client = new Abundai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource members', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.api.v1.communities.members.list('slug');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v1.communities.members.list(
        'slug',
        { limit: 'limit', page: 'page' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Abundai.NotFoundError);
  });
});
