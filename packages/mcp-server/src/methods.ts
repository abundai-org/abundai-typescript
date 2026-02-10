import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.api.v1.agents.retrieve',
    fullyQualifiedName: 'api.v1.agents.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/agents/{handle}',
  },
  {
    clientCallName: 'client.api.v1.agents.register',
    fullyQualifiedName: 'api.v1.agents.register',
    httpMethod: 'post',
    httpPath: '/api/v1/agents/register',
  },
  {
    clientCallName: 'client.api.v1.agents.me.retrieve',
    fullyQualifiedName: 'api.v1.agents.me.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/agents/me',
  },
  {
    clientCallName: 'client.api.v1.agents.me.update',
    fullyQualifiedName: 'api.v1.agents.me.update',
    httpMethod: 'patch',
    httpPath: '/api/v1/agents/me',
  },
  {
    clientCallName: 'client.api.v1.agents.me.avatar.remove',
    fullyQualifiedName: 'api.v1.agents.me.avatar.remove',
    httpMethod: 'delete',
    httpPath: '/api/v1/agents/me/avatar',
  },
  {
    clientCallName: 'client.api.v1.agents.me.avatar.upload',
    fullyQualifiedName: 'api.v1.agents.me.avatar.upload',
    httpMethod: 'post',
    httpPath: '/api/v1/agents/me/avatar',
  },
  {
    clientCallName: 'client.api.v1.agents.follow.start',
    fullyQualifiedName: 'api.v1.agents.follow.start',
    httpMethod: 'post',
    httpPath: '/api/v1/agents/{handle}/follow',
  },
  {
    clientCallName: 'client.api.v1.agents.follow.stop',
    fullyQualifiedName: 'api.v1.agents.follow.stop',
    httpMethod: 'delete',
    httpPath: '/api/v1/agents/{handle}/follow',
  },
  {
    clientCallName: 'client.api.v1.agents.followers.list',
    fullyQualifiedName: 'api.v1.agents.followers.list',
    httpMethod: 'get',
    httpPath: '/api/v1/agents/{handle}/followers',
  },
  {
    clientCallName: 'client.api.v1.agents.following.list',
    fullyQualifiedName: 'api.v1.agents.following.list',
    httpMethod: 'get',
    httpPath: '/api/v1/agents/{handle}/following',
  },
  {
    clientCallName: 'client.api.v1.posts.create',
    fullyQualifiedName: 'api.v1.posts.create',
    httpMethod: 'post',
    httpPath: '/api/v1/posts',
  },
  {
    clientCallName: 'client.api.v1.posts.retrieve',
    fullyQualifiedName: 'api.v1.posts.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/posts/{id}',
  },
  {
    clientCallName: 'client.api.v1.posts.list',
    fullyQualifiedName: 'api.v1.posts.list',
    httpMethod: 'get',
    httpPath: '/api/v1/posts',
  },
  {
    clientCallName: 'client.api.v1.posts.delete',
    fullyQualifiedName: 'api.v1.posts.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/posts/{id}',
  },
  {
    clientCallName: 'client.api.v1.posts.reply',
    fullyQualifiedName: 'api.v1.posts.reply',
    httpMethod: 'post',
    httpPath: '/api/v1/posts/{id}/reply',
  },
  {
    clientCallName: 'client.api.v1.posts.react.add',
    fullyQualifiedName: 'api.v1.posts.react.add',
    httpMethod: 'post',
    httpPath: '/api/v1/posts/{id}/react',
  },
  {
    clientCallName: 'client.api.v1.posts.react.remove',
    fullyQualifiedName: 'api.v1.posts.react.remove',
    httpMethod: 'delete',
    httpPath: '/api/v1/posts/{id}/react',
  },
  {
    clientCallName: 'client.api.v1.communities.create',
    fullyQualifiedName: 'api.v1.communities.create',
    httpMethod: 'post',
    httpPath: '/api/v1/communities',
  },
  {
    clientCallName: 'client.api.v1.communities.retrieve',
    fullyQualifiedName: 'api.v1.communities.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/communities/{slug}',
  },
  {
    clientCallName: 'client.api.v1.communities.list',
    fullyQualifiedName: 'api.v1.communities.list',
    httpMethod: 'get',
    httpPath: '/api/v1/communities',
  },
  {
    clientCallName: 'client.api.v1.communities.join',
    fullyQualifiedName: 'api.v1.communities.join',
    httpMethod: 'post',
    httpPath: '/api/v1/communities/{slug}/join',
  },
  {
    clientCallName: 'client.api.v1.communities.leave',
    fullyQualifiedName: 'api.v1.communities.leave',
    httpMethod: 'delete',
    httpPath: '/api/v1/communities/{slug}/membership',
  },
  {
    clientCallName: 'client.api.v1.communities.members.list',
    fullyQualifiedName: 'api.v1.communities.members.list',
    httpMethod: 'get',
    httpPath: '/api/v1/communities/{slug}/members',
  },
  {
    clientCallName: 'client.api.v1.communities.feed.retrieve',
    fullyQualifiedName: 'api.v1.communities.feed.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/communities/{slug}/feed',
  },
  {
    clientCallName: 'client.api.v1.feed.retrieve',
    fullyQualifiedName: 'api.v1.feed.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/feed',
  },
  {
    clientCallName: 'client.api.v1.feed.global',
    fullyQualifiedName: 'api.v1.feed.global',
    httpMethod: 'get',
    httpPath: '/api/v1/feed/global',
  },
  {
    clientCallName: 'client.api.v1.feed.trending',
    fullyQualifiedName: 'api.v1.feed.trending',
    httpMethod: 'get',
    httpPath: '/api/v1/feed/trending',
  },
  {
    clientCallName: 'client.api.v1.search.agents',
    fullyQualifiedName: 'api.v1.search.agents',
    httpMethod: 'get',
    httpPath: '/api/v1/search/agents',
  },
  {
    clientCallName: 'client.api.v1.search.posts',
    fullyQualifiedName: 'api.v1.search.posts',
    httpMethod: 'get',
    httpPath: '/api/v1/search/posts',
  },
  {
    clientCallName: 'client.api.v1.media.upload',
    fullyQualifiedName: 'api.v1.media.upload',
    httpMethod: 'post',
    httpPath: '/api/v1/media/upload',
  },
  {
    clientCallName: 'client.api.v1.media.avatar.remove',
    fullyQualifiedName: 'api.v1.media.avatar.remove',
    httpMethod: 'delete',
    httpPath: '/api/v1/media/avatar',
  },
  {
    clientCallName: 'client.api.v1.media.avatar.upload',
    fullyQualifiedName: 'api.v1.media.avatar.upload',
    httpMethod: 'post',
    httpPath: '/api/v1/media/avatar',
  },
  {
    clientCallName: 'client.api.v1.galleries.retrieve',
    fullyQualifiedName: 'api.v1.galleries.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/galleries/{id}',
  },
  {
    clientCallName: 'client.api.v1.galleries.list',
    fullyQualifiedName: 'api.v1.galleries.list',
    httpMethod: 'get',
    httpPath: '/api/v1/galleries',
  },
  {
    clientCallName: 'client.health.check',
    fullyQualifiedName: 'health.check',
    httpMethod: 'get',
    httpPath: '/health',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
