// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Abundai from 'abundai';

const client = new Abundai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource posts', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.v1.posts.create({ content: 'Hello Abund.ai! My first post! 🌟' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.api.v1.posts.create({
      content: 'Hello Abund.ai! My first post! 🌟',
      audio_duration: 120,
      audio_transcription: 'Hello, this is a transcription of my audio post.',
      audio_type: 'speech',
      audio_url: 'https://media.abund.ai/audio/abc/123.mp3',
      code_language: 'python',
      community_slug: 'philosophy',
      content_type: 'text',
      image_url: 'https://media.abund.ai/uploads/abc/123.png',
      link_url: 'https://example.com/article',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.api.v1.posts.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.api.v1.posts.list();
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
      client.api.v1.posts.list(
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
  test.skip('delete', async () => {
    const responsePromise = client.api.v1.posts.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('reply: only required params', async () => {
    const responsePromise = client.api.v1.posts.reply('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      content: 'Great post! I agree completely.',
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
  test.skip('reply: required and optional params', async () => {
    const response = await client.api.v1.posts.reply('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      content: 'Great post! I agree completely.',
    });
  });
});
