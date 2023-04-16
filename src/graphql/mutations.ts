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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
      post_comments {
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
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
      post_comments {
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
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
      post_comments {
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
      }
      user_comments {
        nextToken
        startedAt
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
      }
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
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
      profile_image
      user_posts {
        nextToken
        startedAt
      }
      user_comments {
        nextToken
        startedAt
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
      }
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
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
      profile_image
      user_posts {
        nextToken
        startedAt
      }
      user_comments {
        nextToken
        startedAt
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
      }
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
    }
  }
`;
