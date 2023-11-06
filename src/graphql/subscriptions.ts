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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateContributionsModel = /* GraphQL */ `
  subscription OnCreateContributionsModel(
    $filter: ModelSubscriptionContributionsModelFilterInput
  ) {
    onCreateContributionsModel(filter: $filter) {
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
export const onUpdateContributionsModel = /* GraphQL */ `
  subscription OnUpdateContributionsModel(
    $filter: ModelSubscriptionContributionsModelFilterInput
  ) {
    onUpdateContributionsModel(filter: $filter) {
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
export const onDeleteContributionsModel = /* GraphQL */ `
  subscription OnDeleteContributionsModel(
    $filter: ModelSubscriptionContributionsModelFilterInput
  ) {
    onDeleteContributionsModel(filter: $filter) {
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
export const onCreateExperienceModel = /* GraphQL */ `
  subscription OnCreateExperienceModel(
    $filter: ModelSubscriptionExperienceModelFilterInput
  ) {
    onCreateExperienceModel(filter: $filter) {
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
export const onUpdateExperienceModel = /* GraphQL */ `
  subscription OnUpdateExperienceModel(
    $filter: ModelSubscriptionExperienceModelFilterInput
  ) {
    onUpdateExperienceModel(filter: $filter) {
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
export const onDeleteExperienceModel = /* GraphQL */ `
  subscription OnDeleteExperienceModel(
    $filter: ModelSubscriptionExperienceModelFilterInput
  ) {
    onDeleteExperienceModel(filter: $filter) {
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
export const onCreateConversationModel = /* GraphQL */ `
  subscription OnCreateConversationModel(
    $filter: ModelSubscriptionConversationModelFilterInput
  ) {
    onCreateConversationModel(filter: $filter) {
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
export const onUpdateConversationModel = /* GraphQL */ `
  subscription OnUpdateConversationModel(
    $filter: ModelSubscriptionConversationModelFilterInput
  ) {
    onUpdateConversationModel(filter: $filter) {
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
export const onDeleteConversationModel = /* GraphQL */ `
  subscription OnDeleteConversationModel(
    $filter: ModelSubscriptionConversationModelFilterInput
  ) {
    onDeleteConversationModel(filter: $filter) {
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
export const onCreateMessageModel = /* GraphQL */ `
  subscription OnCreateMessageModel(
    $filter: ModelSubscriptionMessageModelFilterInput
  ) {
    onCreateMessageModel(filter: $filter) {
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
export const onUpdateMessageModel = /* GraphQL */ `
  subscription OnUpdateMessageModel(
    $filter: ModelSubscriptionMessageModelFilterInput
  ) {
    onUpdateMessageModel(filter: $filter) {
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
export const onDeleteMessageModel = /* GraphQL */ `
  subscription OnDeleteMessageModel(
    $filter: ModelSubscriptionMessageModelFilterInput
  ) {
    onDeleteMessageModel(filter: $filter) {
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
export const onCreateCommentModel = /* GraphQL */ `
  subscription OnCreateCommentModel(
    $filter: ModelSubscriptionCommentModelFilterInput
  ) {
    onCreateCommentModel(filter: $filter) {
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
export const onUpdateCommentModel = /* GraphQL */ `
  subscription OnUpdateCommentModel(
    $filter: ModelSubscriptionCommentModelFilterInput
  ) {
    onUpdateCommentModel(filter: $filter) {
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
export const onDeleteCommentModel = /* GraphQL */ `
  subscription OnDeleteCommentModel(
    $filter: ModelSubscriptionCommentModelFilterInput
  ) {
    onDeleteCommentModel(filter: $filter) {
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
export const onCreateUsersConvo = /* GraphQL */ `
  subscription OnCreateUsersConvo(
    $filter: ModelSubscriptionUsersConvoFilterInput
  ) {
    onCreateUsersConvo(filter: $filter) {
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
export const onUpdateUsersConvo = /* GraphQL */ `
  subscription OnUpdateUsersConvo(
    $filter: ModelSubscriptionUsersConvoFilterInput
  ) {
    onUpdateUsersConvo(filter: $filter) {
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
export const onDeleteUsersConvo = /* GraphQL */ `
  subscription OnDeleteUsersConvo(
    $filter: ModelSubscriptionUsersConvoFilterInput
  ) {
    onDeleteUsersConvo(filter: $filter) {
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
