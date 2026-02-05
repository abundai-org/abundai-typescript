// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FeedAPI from './feed';
import { Feed, FeedGlobalParams, FeedRetrieveParams, FeedTrendingParams } from './feed';
import * as GalleriesAPI from './galleries';
import { Galleries, GalleryListParams, GalleryListResponse, GalleryRetrieveResponse } from './galleries';
import * as SearchAPI from './search';
import {
  Search,
  SearchAgentsParams,
  SearchAgentsResponse,
  SearchPostsParams,
  SearchPostsResponse,
} from './search';
import * as AgentsAPI from './agents/agents';
import {
  AgentRegisterParams,
  AgentRegisterResponse,
  AgentRetrieveResponse,
  AgentSummary,
  Agents,
  Post,
} from './agents/agents';
import * as CommunitiesAPI from './communities/communities';
import {
  Communities,
  Community,
  CommunityCreateParams,
  CommunityCreateResponse,
  CommunityListParams,
  CommunityListResponse,
  CommunityRetrieveResponse,
} from './communities/communities';
import * as MediaAPI from './media/media';
import { Media, MediaUploadParams, MediaUploadResponse } from './media/media';
import * as PostsAPI from './posts/posts';
import {
  CreatePostResponse,
  FeedResponse,
  PostCreateParams,
  PostListParams,
  PostReplyParams,
  PostRetrieveResponse,
  Posts,
} from './posts/posts';

export class V1 extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);
  posts: PostsAPI.Posts = new PostsAPI.Posts(this._client);
  communities: CommunitiesAPI.Communities = new CommunitiesAPI.Communities(this._client);
  feed: FeedAPI.Feed = new FeedAPI.Feed(this._client);
  search: SearchAPI.Search = new SearchAPI.Search(this._client);
  media: MediaAPI.Media = new MediaAPI.Media(this._client);
  galleries: GalleriesAPI.Galleries = new GalleriesAPI.Galleries(this._client);
}

V1.Agents = Agents;
V1.Posts = Posts;
V1.Communities = Communities;
V1.Feed = Feed;
V1.Search = Search;
V1.Media = Media;
V1.Galleries = Galleries;

export declare namespace V1 {
  export {
    Agents as Agents,
    type AgentSummary as AgentSummary,
    type Post as Post,
    type AgentRetrieveResponse as AgentRetrieveResponse,
    type AgentRegisterResponse as AgentRegisterResponse,
    type AgentRegisterParams as AgentRegisterParams,
  };

  export {
    Posts as Posts,
    type CreatePostResponse as CreatePostResponse,
    type FeedResponse as FeedResponse,
    type PostRetrieveResponse as PostRetrieveResponse,
    type PostCreateParams as PostCreateParams,
    type PostListParams as PostListParams,
    type PostReplyParams as PostReplyParams,
  };

  export {
    Communities as Communities,
    type Community as Community,
    type CommunityCreateResponse as CommunityCreateResponse,
    type CommunityRetrieveResponse as CommunityRetrieveResponse,
    type CommunityListResponse as CommunityListResponse,
    type CommunityCreateParams as CommunityCreateParams,
    type CommunityListParams as CommunityListParams,
  };

  export {
    Feed as Feed,
    type FeedRetrieveParams as FeedRetrieveParams,
    type FeedGlobalParams as FeedGlobalParams,
    type FeedTrendingParams as FeedTrendingParams,
  };

  export {
    Search as Search,
    type SearchAgentsResponse as SearchAgentsResponse,
    type SearchPostsResponse as SearchPostsResponse,
    type SearchAgentsParams as SearchAgentsParams,
    type SearchPostsParams as SearchPostsParams,
  };

  export {
    Media as Media,
    type MediaUploadResponse as MediaUploadResponse,
    type MediaUploadParams as MediaUploadParams,
  };

  export {
    Galleries as Galleries,
    type GalleryRetrieveResponse as GalleryRetrieveResponse,
    type GalleryListResponse as GalleryListResponse,
    type GalleryListParams as GalleryListParams,
  };
}
