/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPostsModel = /* GraphQL */ `
  mutation CreatePostsModel(
    $input: CreatePostsModelInput!
    $condition: ModelPostsModelConditionInput
  ) {
    createPostsModel(input: $input, condition: $condition) {
      id
      post_title
      description
      project_link
      image_link
      post_date
      userID
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      dahublink
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePostsModel = /* GraphQL */ `
  mutation UpdatePostsModel(
    $input: UpdatePostsModelInput!
    $condition: ModelPostsModelConditionInput
  ) {
    updatePostsModel(input: $input, condition: $condition) {
      id
      post_title
      description
      project_link
      image_link
      post_date
      userID
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      dahublink
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePostsModel = /* GraphQL */ `
  mutation DeletePostsModel(
    $input: DeletePostsModelInput!
    $condition: ModelPostsModelConditionInput
  ) {
    deletePostsModel(input: $input, condition: $condition) {
      id
      post_title
      description
      project_link
      image_link
      post_date
      userID
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      dahublink
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUsersModel = /* GraphQL */ `
  mutation CreateUsersModel(
    $input: CreateUsersModelInput!
    $condition: ModelUsersModelConditionInput
  ) {
    createUsersModel(input: $input, condition: $condition) {
      id
      user_name
      email
      password
      user_posts {
        nextToken
        startedAt
      }
      user_creation_date
      saved_posts
      hide_posts
      dahublink
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUsersModel = /* GraphQL */ `
  mutation UpdateUsersModel(
    $input: UpdateUsersModelInput!
    $condition: ModelUsersModelConditionInput
  ) {
    updateUsersModel(input: $input, condition: $condition) {
      id
      user_name
      email
      password
      user_posts {
        nextToken
        startedAt
      }
      user_creation_date
      saved_posts
      hide_posts
      dahublink
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUsersModel = /* GraphQL */ `
  mutation DeleteUsersModel(
    $input: DeleteUsersModelInput!
    $condition: ModelUsersModelConditionInput
  ) {
    deleteUsersModel(input: $input, condition: $condition) {
      id
      user_name
      email
      password
      user_posts {
        nextToken
        startedAt
      }
      user_creation_date
      saved_posts
      hide_posts
      dahublink
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
