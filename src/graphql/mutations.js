/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlackListedPosts = /* GraphQL */ `
  mutation CreateBlackListedPosts(
    $input: CreateBlackListedPostsInput!
    $condition: ModelBlackListedPostsConditionInput
  ) {
    createBlackListedPosts(input: $input, condition: $condition) {
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
export const updateBlackListedPosts = /* GraphQL */ `
  mutation UpdateBlackListedPosts(
    $input: UpdateBlackListedPostsInput!
    $condition: ModelBlackListedPostsConditionInput
  ) {
    updateBlackListedPosts(input: $input, condition: $condition) {
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
export const deleteBlackListedPosts = /* GraphQL */ `
  mutation DeleteBlackListedPosts(
    $input: DeleteBlackListedPostsInput!
    $condition: ModelBlackListedPostsConditionInput
  ) {
    deleteBlackListedPosts(input: $input, condition: $condition) {
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
export const createSavedPosts = /* GraphQL */ `
  mutation CreateSavedPosts(
    $input: CreateSavedPostsInput!
    $condition: ModelSavedPostsConditionInput
  ) {
    createSavedPosts(input: $input, condition: $condition) {
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
export const updateSavedPosts = /* GraphQL */ `
  mutation UpdateSavedPosts(
    $input: UpdateSavedPostsInput!
    $condition: ModelSavedPostsConditionInput
  ) {
    updateSavedPosts(input: $input, condition: $condition) {
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
export const deleteSavedPosts = /* GraphQL */ `
  mutation DeleteSavedPosts(
    $input: DeleteSavedPostsInput!
    $condition: ModelSavedPostsConditionInput
  ) {
    deleteSavedPosts(input: $input, condition: $condition) {
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
export const createPostMode = /* GraphQL */ `
  mutation CreatePostMode(
    $input: CreatePostModeInput!
    $condition: ModelPostModeConditionInput
  ) {
    createPostMode(input: $input, condition: $condition) {
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
export const updatePostMode = /* GraphQL */ `
  mutation UpdatePostMode(
    $input: UpdatePostModeInput!
    $condition: ModelPostModeConditionInput
  ) {
    updatePostMode(input: $input, condition: $condition) {
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
export const deletePostMode = /* GraphQL */ `
  mutation DeletePostMode(
    $input: DeletePostModeInput!
    $condition: ModelPostModeConditionInput
  ) {
    deletePostMode(input: $input, condition: $condition) {
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
export const createUserModel = /* GraphQL */ `
  mutation CreateUserModel(
    $input: CreateUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    createUserModel(input: $input, condition: $condition) {
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
export const updateUserModel = /* GraphQL */ `
  mutation UpdateUserModel(
    $input: UpdateUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    updateUserModel(input: $input, condition: $condition) {
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
export const deleteUserModel = /* GraphQL */ `
  mutation DeleteUserModel(
    $input: DeleteUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    deleteUserModel(input: $input, condition: $condition) {
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
