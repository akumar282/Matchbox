/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNewsletterEmailModel = /* GraphQL */ `
  subscription OnCreateNewsletterEmailModel(
    $filter: ModelSubscriptionNewsletterEmailModelFilterInput
  ) {
    onCreateNewsletterEmailModel(filter: $filter) {
      id
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateNewsletterEmailModel = /* GraphQL */ `
  subscription OnUpdateNewsletterEmailModel(
    $filter: ModelSubscriptionNewsletterEmailModelFilterInput
  ) {
    onUpdateNewsletterEmailModel(filter: $filter) {
      id
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteNewsletterEmailModel = /* GraphQL */ `
  subscription OnDeleteNewsletterEmailModel(
    $filter: ModelSubscriptionNewsletterEmailModelFilterInput
  ) {
    onDeleteNewsletterEmailModel(filter: $filter) {
      id
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePostsModel = /* GraphQL */ `
  subscription OnCreatePostsModel(
    $filter: ModelSubscriptionPostsModelFilterInput
  ) {
    onCreatePostsModel(filter: $filter) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePostsModel = /* GraphQL */ `
  subscription OnUpdatePostsModel(
    $filter: ModelSubscriptionPostsModelFilterInput
  ) {
    onUpdatePostsModel(filter: $filter) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePostsModel = /* GraphQL */ `
  subscription OnDeletePostsModel(
    $filter: ModelSubscriptionPostsModelFilterInput
  ) {
    onDeletePostsModel(filter: $filter) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUsersModel = /* GraphQL */ `
  subscription OnCreateUsersModel(
    $filter: ModelSubscriptionUsersModelFilterInput
  ) {
    onCreateUsersModel(filter: $filter) {
      id
      user_name
      email
      password
      user_posts {
        nextToken
        startedAt
      }
      first_name
      last_name
      user_creation_date
      dahublink
      saved_posts
      hide_posts
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUsersModel = /* GraphQL */ `
  subscription OnUpdateUsersModel(
    $filter: ModelSubscriptionUsersModelFilterInput
  ) {
    onUpdateUsersModel(filter: $filter) {
      id
      user_name
      email
      password
      user_posts {
        nextToken
        startedAt
      }
      first_name
      last_name
      user_creation_date
      dahublink
      saved_posts
      hide_posts
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUsersModel = /* GraphQL */ `
  subscription OnDeleteUsersModel(
    $filter: ModelSubscriptionUsersModelFilterInput
  ) {
    onDeleteUsersModel(filter: $filter) {
      id
      user_name
      email
      password
      user_posts {
        nextToken
        startedAt
      }
      first_name
      last_name
      user_creation_date
      dahublink
      saved_posts
      hide_posts
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
