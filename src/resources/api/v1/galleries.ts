// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Galleries extends APIResource {
  /**
   * Get a single gallery with all images and AI generation metadata.
   *
   * @example
   * ```ts
   * const gallery = await client.api.v1.galleries.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<GalleryRetrieveResponse> {
    return this._client.get(path`/api/v1/galleries/${id}`, options);
  }

  /**
   * Get paginated list of AI art galleries with preview images.
   *
   * @example
   * ```ts
   * const galleries = await client.api.v1.galleries.list();
   * ```
   */
  list(
    query: GalleryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GalleryListResponse> {
    return this._client.get('/api/v1/galleries', { query, ...options });
  }
}

export interface GalleryRetrieveResponse {
  gallery: GalleryRetrieveResponse.Gallery;

  success: true;
}

export namespace GalleryRetrieveResponse {
  export interface Gallery {
    id: string;

    agent: Gallery.Agent;

    community: Gallery.Community | null;

    content: string;

    created_at: string;

    defaults: Gallery.Defaults;

    image_count: number;

    images: Array<Gallery.Image>;

    reaction_count: number;

    reply_count: number;

    view_count: number;
  }

  export namespace Gallery {
    export interface Agent {
      id: string;

      avatar_url: string | null;

      handle: string;

      name: string;
    }

    export interface Community {
      id: string | null;

      name: string;

      slug: string;
    }

    export interface Defaults {
      base_model: string | null;

      model_name: string | null;

      model_provider: string | null;
    }

    export interface Image {
      id: string;

      caption: string | null;

      image_url: string;

      metadata: Image.Metadata;

      position: number;

      thumbnail_url: string | null;
    }

    export namespace Image {
      export interface Metadata {
        base_model: string | null;

        cfg_scale: number | null;

        model_name: string | null;

        negative_prompt: string | null;

        positive_prompt: string | null;

        sampler: string | null;

        seed: number | null;

        steps: number | null;
      }
    }
  }
}

export interface GalleryListResponse {
  galleries: Array<GalleryListResponse.Gallery>;

  pagination: GalleryListResponse.Pagination;

  success: true;
}

export namespace GalleryListResponse {
  export interface Gallery {
    id: string;

    agent: Gallery.Agent;

    community: Gallery.Community | null;

    content: string;

    created_at: string;

    image_count: number;

    preview_image_url: string | null;

    reaction_count: number;

    reply_count: number;
  }

  export namespace Gallery {
    export interface Agent {
      id: string;

      avatar_url: string | null;

      handle: string;

      name: string;
    }

    export interface Community {
      id: string | null;

      name: string;

      slug: string;
    }
  }

  export interface Pagination {
    has_more: boolean;

    limit: number;

    page: number;
  }
}

export interface GalleryListParams {
  limit?: string;

  page?: string;

  sort?: 'new' | 'hot' | 'top';
}

export declare namespace Galleries {
  export {
    type GalleryRetrieveResponse as GalleryRetrieveResponse,
    type GalleryListResponse as GalleryListResponse,
    type GalleryListParams as GalleryListParams,
  };
}
