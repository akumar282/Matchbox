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
        items {
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
          difficulty_tag
          contributor_limit
          contributors
          reported
          experience_level
          application
          project_chat
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      user_comments {
        items {
          id
          comment
          profile_image
          comment_date
          parent_comment
          replies
          isReply
          postID
          userID
          user_name
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      first_name
      last_name
      user_creation_date
      github_link
      saved_posts
      hide_posts
      messages {
        items {
          id
          message
          from
          message_date
          conversationID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      conversations {
        items {
          id
          usersModelID
          conversationModelID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
      difficulty_tag
      new_user
      contributions {
        items {
          id
          author
          type
          description
          link_to
          point_value
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      credibility_score
      involved_projects
      experience_level
      years_of_experience
      user_type
      user_experiences {
        items {
          id
          user_id
          org_name
          start_date
          end_date
          description
          lang_tag
          dev_type_tag
          framework_tag
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      oauth_provider
      oauth_id
      createdAt
      updatedAt
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
        items {
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
          difficulty_tag
          contributor_limit
          contributors
          reported
          experience_level
          application
          project_chat
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      user_comments {
        items {
          id
          comment
          profile_image
          comment_date
          parent_comment
          replies
          isReply
          postID
          userID
          user_name
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      first_name
      last_name
      user_creation_date
      github_link
      saved_posts
      hide_posts
      messages {
        items {
          id
          message
          from
          message_date
          conversationID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      conversations {
        items {
          id
          usersModelID
          conversationModelID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
      difficulty_tag
      new_user
      contributions {
        items {
          id
          author
          type
          description
          link_to
          point_value
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      credibility_score
      involved_projects
      experience_level
      years_of_experience
      user_type
      user_experiences {
        items {
          id
          user_id
          org_name
          start_date
          end_date
          description
          lang_tag
          dev_type_tag
          framework_tag
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      oauth_provider
      oauth_id
      createdAt
      updatedAt
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
        items {
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
          difficulty_tag
          contributor_limit
          contributors
          reported
          experience_level
          application
          project_chat
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      user_comments {
        items {
          id
          comment
          profile_image
          comment_date
          parent_comment
          replies
          isReply
          postID
          userID
          user_name
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      first_name
      last_name
      user_creation_date
      github_link
      saved_posts
      hide_posts
      messages {
        items {
          id
          message
          from
          message_date
          conversationID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      conversations {
        items {
          id
          usersModelID
          conversationModelID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
      difficulty_tag
      new_user
      contributions {
        items {
          id
          author
          type
          description
          link_to
          point_value
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      credibility_score
      involved_projects
      experience_level
      years_of_experience
      user_type
      user_experiences {
        items {
          id
          user_id
          org_name
          start_date
          end_date
          description
          lang_tag
          dev_type_tag
          framework_tag
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      oauth_provider
      oauth_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createContributionsModel = /* GraphQL */ `
  mutation CreateContributionsModel(
    $input: CreateContributionsModelInput!
    $condition: ModelContributionsModelConditionInput
  ) {
    createContributionsModel(input: $input, condition: $condition) {
      id
      author
      type
      description
      link_to
      point_value
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateContributionsModel = /* GraphQL */ `
  mutation UpdateContributionsModel(
    $input: UpdateContributionsModelInput!
    $condition: ModelContributionsModelConditionInput
  ) {
    updateContributionsModel(input: $input, condition: $condition) {
      id
      author
      type
      description
      link_to
      point_value
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteContributionsModel = /* GraphQL */ `
  mutation DeleteContributionsModel(
    $input: DeleteContributionsModelInput!
    $condition: ModelContributionsModelConditionInput
  ) {
    deleteContributionsModel(input: $input, condition: $condition) {
      id
      author
      type
      description
      link_to
      point_value
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createExperienceModel = /* GraphQL */ `
  mutation CreateExperienceModel(
    $input: CreateExperienceModelInput!
    $condition: ModelExperienceModelConditionInput
  ) {
    createExperienceModel(input: $input, condition: $condition) {
      id
      user_id
      org_name
      start_date
      end_date
      description
      lang_tag
      dev_type_tag
      framework_tag
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateExperienceModel = /* GraphQL */ `
  mutation UpdateExperienceModel(
    $input: UpdateExperienceModelInput!
    $condition: ModelExperienceModelConditionInput
  ) {
    updateExperienceModel(input: $input, condition: $condition) {
      id
      user_id
      org_name
      start_date
      end_date
      description
      lang_tag
      dev_type_tag
      framework_tag
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteExperienceModel = /* GraphQL */ `
  mutation DeleteExperienceModel(
    $input: DeleteExperienceModelInput!
    $condition: ModelExperienceModelConditionInput
  ) {
    deleteExperienceModel(input: $input, condition: $condition) {
      id
      user_id
      org_name
      start_date
      end_date
      description
      lang_tag
      dev_type_tag
      framework_tag
      createdAt
      updatedAt
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
      difficulty_tag
      post_comments {
        items {
          id
          comment
          profile_image
          comment_date
          parent_comment
          replies
          isReply
          postID
          userID
          user_name
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      contributor_limit
      contributors
      reported
      experience_level
      application
      project_chat
      createdAt
      updatedAt
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
      difficulty_tag
      post_comments {
        items {
          id
          comment
          profile_image
          comment_date
          parent_comment
          replies
          isReply
          postID
          userID
          user_name
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      contributor_limit
      contributors
      reported
      experience_level
      application
      project_chat
      createdAt
      updatedAt
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
      difficulty_tag
      post_comments {
        items {
          id
          comment
          profile_image
          comment_date
          parent_comment
          replies
          isReply
          postID
          userID
          user_name
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      contributor_limit
      contributors
      reported
      experience_level
      application
      project_chat
      createdAt
      updatedAt
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
      users {
        items {
          id
          usersModelID
          conversationModelID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      title
      createdAt
      updatedAt
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
      users {
        items {
          id
          usersModelID
          conversationModelID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      title
      createdAt
      updatedAt
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
      users {
        items {
          id
          usersModelID
          conversationModelID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      title
      createdAt
      updatedAt
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
      from
      message_date
      conversationID
      createdAt
      updatedAt
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
      from
      message_date
      conversationID
      createdAt
      updatedAt
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
      from
      message_date
      conversationID
      createdAt
      updatedAt
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
      parent_comment
      replies
      isReply
      postID
      userID
      user_name
      createdAt
      updatedAt
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
      parent_comment
      replies
      isReply
      postID
      userID
      user_name
      createdAt
      updatedAt
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
      parent_comment
      replies
      isReply
      postID
      userID
      user_name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUsersConvo = /* GraphQL */ `
  mutation CreateUsersConvo(
    $input: CreateUsersConvoInput!
    $condition: ModelUsersConvoConditionInput
  ) {
    createUsersConvo(input: $input, condition: $condition) {
      id
      usersModelID
      conversationModelID
      usersModel {
        id
        user_name
        email
        password
        profile_image
        user_posts {
          nextToken
          __typename
        }
        user_comments {
          nextToken
          __typename
        }
        first_name
        last_name
        user_creation_date
        github_link
        saved_posts
        hide_posts
        messages {
          nextToken
          __typename
        }
        conversations {
          nextToken
          __typename
        }
        lang_tag
        dev_type_tag
        interest_tag
        size_tag
        framework_tag
        difficulty_tag
        new_user
        contributions {
          nextToken
          __typename
        }
        credibility_score
        involved_projects
        experience_level
        years_of_experience
        user_type
        user_experiences {
          nextToken
          __typename
        }
        oauth_provider
        oauth_id
        createdAt
        updatedAt
        __typename
      }
      conversationModel {
        id
        users {
          nextToken
          __typename
        }
        title
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUsersConvo = /* GraphQL */ `
  mutation UpdateUsersConvo(
    $input: UpdateUsersConvoInput!
    $condition: ModelUsersConvoConditionInput
  ) {
    updateUsersConvo(input: $input, condition: $condition) {
      id
      usersModelID
      conversationModelID
      usersModel {
        id
        user_name
        email
        password
        profile_image
        user_posts {
          nextToken
          __typename
        }
        user_comments {
          nextToken
          __typename
        }
        first_name
        last_name
        user_creation_date
        github_link
        saved_posts
        hide_posts
        messages {
          nextToken
          __typename
        }
        conversations {
          nextToken
          __typename
        }
        lang_tag
        dev_type_tag
        interest_tag
        size_tag
        framework_tag
        difficulty_tag
        new_user
        contributions {
          nextToken
          __typename
        }
        credibility_score
        involved_projects
        experience_level
        years_of_experience
        user_type
        user_experiences {
          nextToken
          __typename
        }
        oauth_provider
        oauth_id
        createdAt
        updatedAt
        __typename
      }
      conversationModel {
        id
        users {
          nextToken
          __typename
        }
        title
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUsersConvo = /* GraphQL */ `
  mutation DeleteUsersConvo(
    $input: DeleteUsersConvoInput!
    $condition: ModelUsersConvoConditionInput
  ) {
    deleteUsersConvo(input: $input, condition: $condition) {
      id
      usersModelID
      conversationModelID
      usersModel {
        id
        user_name
        email
        password
        profile_image
        user_posts {
          nextToken
          __typename
        }
        user_comments {
          nextToken
          __typename
        }
        first_name
        last_name
        user_creation_date
        github_link
        saved_posts
        hide_posts
        messages {
          nextToken
          __typename
        }
        conversations {
          nextToken
          __typename
        }
        lang_tag
        dev_type_tag
        interest_tag
        size_tag
        framework_tag
        difficulty_tag
        new_user
        contributions {
          nextToken
          __typename
        }
        credibility_score
        involved_projects
        experience_level
        years_of_experience
        user_type
        user_experiences {
          nextToken
          __typename
        }
        oauth_provider
        oauth_id
        createdAt
        updatedAt
        __typename
      }
      conversationModel {
        id
        users {
          nextToken
          __typename
        }
        title
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
