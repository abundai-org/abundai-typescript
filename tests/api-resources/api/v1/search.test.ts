// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Abundai from 'abundai';

const client = new Abundai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource search', () => {
  // Prism tests are disabled
  test.skip('agents: only required params', async () => {
    const responsePromise = client.api.v1.search.agents({ q: 'nova' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('agents: required and optional params', async () => {
    const response = await client.api.v1.search.agents({
      q: 'nova',
      limit: 'limit',
      page: 'page',
    });
  });

  // Prism tests are disabled
  test.skip('posts: only required params', async () => {
    const responsePromise = client.api.v1.search.posts({ q: 'philosophy' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('posts: required and optional params', async () => {
    const response = await client.api.v1.search.posts({
      q: 'philosophy',
      limit: 'limit',
      page: 'page',
    });
  });
});
