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
      __typename
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
      __typename
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
      __typename
    }
  }
`;
export const onCreateConversationModel = /* GraphQL */ `
  subscription OnCreateConversationModel(
    $filter: ModelSubscriptionConversationModelFilterInput
  ) {
    onCreateConversationModel(filter: $filter) {
      id
      user_one
      user_two
      messages
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateConversationModel = /* GraphQL */ `
  subscription OnUpdateConversationModel(
    $filter: ModelSubscriptionConversationModelFilterInput
  ) {
    onUpdateConversationModel(filter: $filter) {
      id
      user_one
      user_two
      messages
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteConversationModel = /* GraphQL */ `
  subscription OnDeleteConversationModel(
    $filter: ModelSubscriptionConversationModelFilterInput
  ) {
    onDeleteConversationModel(filter: $filter) {
      id
      user_one
      user_two
      messages
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateMessageModel = /* GraphQL */ `
  subscription OnCreateMessageModel(
    $filter: ModelSubscriptionMessageModelFilterInput
  ) {
    onCreateMessageModel(filter: $filter) {
      id
      message
      to
      from
      message_date
      conversationID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateMessageModel = /* GraphQL */ `
  subscription OnUpdateMessageModel(
    $filter: ModelSubscriptionMessageModelFilterInput
  ) {
    onUpdateMessageModel(filter: $filter) {
      id
      message
      to
      from
      message_date
      conversationID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteMessageModel = /* GraphQL */ `
  subscription OnDeleteMessageModel(
    $filter: ModelSubscriptionMessageModelFilterInput
  ) {
    onDeleteMessageModel(filter: $filter) {
      id
      message
      to
      from
      message_date
      conversationID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
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
      long_description
      project_link
      image_link
      post_date
      userID
      creator_name
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
      post_comments {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
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
      long_description
      project_link
      image_link
      post_date
      userID
      creator_name
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
      post_comments {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
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
      long_description
      project_link
      image_link
      post_date
      userID
      creator_name
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
      post_comments {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
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
      profile_image
      user_posts {
        nextToken
        startedAt
        __typename
      }
      user_comments {
        nextToken
        startedAt
        __typename
      }
      first_name
      last_name
      user_creation_date
      dahublink
      saved_posts
      hide_posts
      messages {
        nextToken
        startedAt
        __typename
      }
      conversations {
        nextToken
        startedAt
        __typename
      }
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
      new_user
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
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
      profile_image
      user_posts {
        nextToken
        startedAt
        __typename
      }
      user_comments {
        nextToken
        startedAt
        __typename
      }
      first_name
      last_name
      user_creation_date
      dahublink
      saved_posts
      hide_posts
      messages {
        nextToken
        startedAt
        __typename
      }
      conversations {
        nextToken
        startedAt
        __typename
      }
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
      new_user
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
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
      profile_image
      user_posts {
        nextToken
        startedAt
        __typename
      }
      user_comments {
        nextToken
        startedAt
        __typename
      }
      first_name
      last_name
      user_creation_date
      dahublink
      saved_posts
      hide_posts
      messages {
        nextToken
        startedAt
        __typename
      }
      conversations {
        nextToken
        startedAt
        __typename
      }
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
      new_user
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateCommentModel = /* GraphQL */ `
  subscription OnCreateCommentModel(
    $filter: ModelSubscriptionCommentModelFilterInput
  ) {
    onCreateCommentModel(filter: $filter) {
      id
      comment
      profile_image
      comment_date
      postID
      userID
      user_name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateCommentModel = /* GraphQL */ `
  subscription OnUpdateCommentModel(
    $filter: ModelSubscriptionCommentModelFilterInput
  ) {
    onUpdateCommentModel(filter: $filter) {
      id
      comment
      profile_image
      comment_date
      postID
      userID
      user_name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteCommentModel = /* GraphQL */ `
  subscription OnDeleteCommentModel(
    $filter: ModelSubscriptionCommentModelFilterInput
  ) {
    onDeleteCommentModel(filter: $filter) {
      id
      comment
      profile_image
      comment_date
      postID
      userID
      user_name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
