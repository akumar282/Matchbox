/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlackListedPosts = /* GraphQL */ `
  query GetBlackListedPosts($id: ID!) {
    getBlackListedPosts(id: $id) {
      id
      post_id
      usermodelID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBlackListedPosts = /* GraphQL */ `
  query ListBlackListedPosts(
    $filter: ModelBlackListedPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlackListedPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        post_id
        usermodelID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBlackListedPosts = /* GraphQL */ `
  query SyncBlackListedPosts(
    $filter: ModelBlackListedPostsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBlackListedPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        post_id
        usermodelID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSavedPosts = /* GraphQL */ `
  query GetSavedPosts($id: ID!) {
    getSavedPosts(id: $id) {
      id
      post_id
      usermodelID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSavedPosts = /* GraphQL */ `
  query ListSavedPosts(
    $filter: ModelSavedPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSavedPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post_id
        usermodelID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSavedPosts = /* GraphQL */ `
  query SyncSavedPosts(
    $filter: ModelSavedPostsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSavedPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        post_id
        usermodelID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPostMode = /* GraphQL */ `
  query GetPostMode($id: ID!) {
    getPostMode(id: $id) {
      id
      usermodelID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPostModes = /* GraphQL */ `
  query ListPostModes(
    $filter: ModelPostModeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostModes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        usermodelID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPostModes = /* GraphQL */ `
  query SyncPostModes(
    $filter: ModelPostModeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPostModes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        usermodelID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserModel = /* GraphQL */ `
  query GetUserModel($id: ID!) {
    getUserModel(id: $id) {
      id
      user_name
      UsersPosts {
        nextToken
        startedAt
      }
      UsersSavedPosts {
        nextToken
        startedAt
      }
      UsersBlackListedPosts {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserModels = /* GraphQL */ `
  query ListUserModels(
    $filter: ModelUserModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserModels = /* GraphQL */ `
  query SyncUserModels(
    $filter: ModelUserModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        user_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
