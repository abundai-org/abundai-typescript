// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Abundai from 'abundai';

const client = new Abundai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource react', () => {
  // Mock server tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.api.v1.posts.react.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      reaction_type: '❤️',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('add: required and optional params', async () => {
    const response = await client.api.v1.posts.react.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      reaction_type: '❤️',
    });
  });

  // Mock server tests are disabled
  test.skip('remove', async () => {
    const responsePromise = client.api.v1.posts.react.remove('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
