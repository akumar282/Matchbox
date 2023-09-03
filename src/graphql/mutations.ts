/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNewsletterEmailModel = /* GraphQL */ `
  mutation CreateNewsletterEmailModel(
    $input: CreateNewsletterEmailModelInput!
    $condition: ModelNewsletterEmailModelConditionInput
  ) {
    createNewsletterEmailModel(input: $input, condition: $condition) {
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
export const updateNewsletterEmailModel = /* GraphQL */ `
  mutation UpdateNewsletterEmailModel(
    $input: UpdateNewsletterEmailModelInput!
    $condition: ModelNewsletterEmailModelConditionInput
  ) {
    updateNewsletterEmailModel(input: $input, condition: $condition) {
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
export const deleteNewsletterEmailModel = /* GraphQL */ `
  mutation DeleteNewsletterEmailModel(
    $input: DeleteNewsletterEmailModelInput!
    $condition: ModelNewsletterEmailModelConditionInput
  ) {
    deleteNewsletterEmailModel(input: $input, condition: $condition) {
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
export const createConversationModel = /* GraphQL */ `
  mutation CreateConversationModel(
    $input: CreateConversationModelInput!
    $condition: ModelConversationModelConditionInput
  ) {
    createConversationModel(input: $input, condition: $condition) {
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
export const updateConversationModel = /* GraphQL */ `
  mutation UpdateConversationModel(
    $input: UpdateConversationModelInput!
    $condition: ModelConversationModelConditionInput
  ) {
    updateConversationModel(input: $input, condition: $condition) {
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
export const deleteConversationModel = /* GraphQL */ `
  mutation DeleteConversationModel(
    $input: DeleteConversationModelInput!
    $condition: ModelConversationModelConditionInput
  ) {
    deleteConversationModel(input: $input, condition: $condition) {
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
export const createMessageModel = /* GraphQL */ `
  mutation CreateMessageModel(
    $input: CreateMessageModelInput!
    $condition: ModelMessageModelConditionInput
  ) {
    createMessageModel(input: $input, condition: $condition) {
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
export const updateMessageModel = /* GraphQL */ `
  mutation UpdateMessageModel(
    $input: UpdateMessageModelInput!
    $condition: ModelMessageModelConditionInput
  ) {
    updateMessageModel(input: $input, condition: $condition) {
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
export const deleteMessageModel = /* GraphQL */ `
  mutation DeleteMessageModel(
    $input: DeleteMessageModelInput!
    $condition: ModelMessageModelConditionInput
  ) {
    deleteMessageModel(input: $input, condition: $condition) {
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
export const createPostsModel = /* GraphQL */ `
  mutation CreatePostsModel(
    $input: CreatePostsModelInput!
    $condition: ModelPostsModelConditionInput
  ) {
    createPostsModel(input: $input, condition: $condition) {
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
export const updatePostsModel = /* GraphQL */ `
  mutation UpdatePostsModel(
    $input: UpdatePostsModelInput!
    $condition: ModelPostsModelConditionInput
  ) {
    updatePostsModel(input: $input, condition: $condition) {
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
export const deletePostsModel = /* GraphQL */ `
  mutation DeletePostsModel(
    $input: DeletePostsModelInput!
    $condition: ModelPostsModelConditionInput
  ) {
    deletePostsModel(input: $input, condition: $condition) {
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
export const createCommentModel = /* GraphQL */ `
  mutation CreateCommentModel(
    $input: CreateCommentModelInput!
    $condition: ModelCommentModelConditionInput
  ) {
    createCommentModel(input: $input, condition: $condition) {
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
export const updateCommentModel = /* GraphQL */ `
  mutation UpdateCommentModel(
    $input: UpdateCommentModelInput!
    $condition: ModelCommentModelConditionInput
  ) {
    updateCommentModel(input: $input, condition: $condition) {
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
export const deleteCommentModel = /* GraphQL */ `
  mutation DeleteCommentModel(
    $input: DeleteCommentModelInput!
    $condition: ModelCommentModelConditionInput
  ) {
    deleteCommentModel(input: $input, condition: $condition) {
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
