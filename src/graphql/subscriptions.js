/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlackListedPosts = /* GraphQL */ `
  subscription OnCreateBlackListedPosts(
    $filter: ModelSubscriptionBlackListedPostsFilterInput
  ) {
    onCreateBlackListedPosts(filter: $filter) {
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
export const onUpdateBlackListedPosts = /* GraphQL */ `
  subscription OnUpdateBlackListedPosts(
    $filter: ModelSubscriptionBlackListedPostsFilterInput
  ) {
    onUpdateBlackListedPosts(filter: $filter) {
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
export const onDeleteBlackListedPosts = /* GraphQL */ `
  subscription OnDeleteBlackListedPosts(
    $filter: ModelSubscriptionBlackListedPostsFilterInput
  ) {
    onDeleteBlackListedPosts(filter: $filter) {
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
export const onCreateSavedPosts = /* GraphQL */ `
  subscription OnCreateSavedPosts(
    $filter: ModelSubscriptionSavedPostsFilterInput
  ) {
    onCreateSavedPosts(filter: $filter) {
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
export const onUpdateSavedPosts = /* GraphQL */ `
  subscription OnUpdateSavedPosts(
    $filter: ModelSubscriptionSavedPostsFilterInput
  ) {
    onUpdateSavedPosts(filter: $filter) {
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
export const onDeleteSavedPosts = /* GraphQL */ `
  subscription OnDeleteSavedPosts(
    $filter: ModelSubscriptionSavedPostsFilterInput
  ) {
    onDeleteSavedPosts(filter: $filter) {
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
export const onCreatePostMode = /* GraphQL */ `
  subscription OnCreatePostMode($filter: ModelSubscriptionPostModeFilterInput) {
    onCreatePostMode(filter: $filter) {
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
export const onUpdatePostMode = /* GraphQL */ `
  subscription OnUpdatePostMode($filter: ModelSubscriptionPostModeFilterInput) {
    onUpdatePostMode(filter: $filter) {
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
export const onDeletePostMode = /* GraphQL */ `
  subscription OnDeletePostMode($filter: ModelSubscriptionPostModeFilterInput) {
    onDeletePostMode(filter: $filter) {
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
export const onCreateUserModel = /* GraphQL */ `
  subscription OnCreateUserModel(
    $filter: ModelSubscriptionUserModelFilterInput
  ) {
    onCreateUserModel(filter: $filter) {
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
export const onUpdateUserModel = /* GraphQL */ `
  subscription OnUpdateUserModel(
    $filter: ModelSubscriptionUserModelFilterInput
  ) {
    onUpdateUserModel(filter: $filter) {
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
export const onDeleteUserModel = /* GraphQL */ `
  subscription OnDeleteUserModel(
    $filter: ModelSubscriptionUserModelFilterInput
  ) {
    onDeleteUserModel(filter: $filter) {
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
