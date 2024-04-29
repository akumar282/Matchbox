/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateNewsletterEmailModel = /* GraphQL */ `subscription OnCreateNewsletterEmailModel(
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
` as GeneratedSubscription<
  APITypes.OnCreateNewsletterEmailModelSubscriptionVariables,
  APITypes.OnCreateNewsletterEmailModelSubscription
>;
export const onUpdateNewsletterEmailModel = /* GraphQL */ `subscription OnUpdateNewsletterEmailModel(
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
` as GeneratedSubscription<
  APITypes.OnUpdateNewsletterEmailModelSubscriptionVariables,
  APITypes.OnUpdateNewsletterEmailModelSubscription
>;
export const onDeleteNewsletterEmailModel = /* GraphQL */ `subscription OnDeleteNewsletterEmailModel(
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
` as GeneratedSubscription<
  APITypes.OnDeleteNewsletterEmailModelSubscriptionVariables,
  APITypes.OnDeleteNewsletterEmailModelSubscription
>;
export const onCreateUsersModel = /* GraphQL */ `subscription OnCreateUsersModel(
  $filter: ModelSubscriptionUsersModelFilterInput
) {
  onCreateUsersModel(filter: $filter) {
    id
    user_name
    email
    password
    profile_image
    bio
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
    liked_posts
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
    cloud_provider_tag
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
    external_link {
      id
      name
      link
      createdAt
      updatedAt
      __typename
    }
    notification_type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUsersModelSubscriptionVariables,
  APITypes.OnCreateUsersModelSubscription
>;
export const onUpdateUsersModel = /* GraphQL */ `subscription OnUpdateUsersModel(
  $filter: ModelSubscriptionUsersModelFilterInput
) {
  onUpdateUsersModel(filter: $filter) {
    id
    user_name
    email
    password
    profile_image
    bio
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
    liked_posts
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
    cloud_provider_tag
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
    external_link {
      id
      name
      link
      createdAt
      updatedAt
      __typename
    }
    notification_type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUsersModelSubscriptionVariables,
  APITypes.OnUpdateUsersModelSubscription
>;
export const onDeleteUsersModel = /* GraphQL */ `subscription OnDeleteUsersModel(
  $filter: ModelSubscriptionUsersModelFilterInput
) {
  onDeleteUsersModel(filter: $filter) {
    id
    user_name
    email
    password
    profile_image
    bio
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
    liked_posts
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
    cloud_provider_tag
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
    external_link {
      id
      name
      link
      createdAt
      updatedAt
      __typename
    }
    notification_type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUsersModelSubscriptionVariables,
  APITypes.OnDeleteUsersModelSubscription
>;
export const onCreateContributionsModel = /* GraphQL */ `subscription OnCreateContributionsModel(
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
` as GeneratedSubscription<
  APITypes.OnCreateContributionsModelSubscriptionVariables,
  APITypes.OnCreateContributionsModelSubscription
>;
export const onUpdateContributionsModel = /* GraphQL */ `subscription OnUpdateContributionsModel(
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
` as GeneratedSubscription<
  APITypes.OnUpdateContributionsModelSubscriptionVariables,
  APITypes.OnUpdateContributionsModelSubscription
>;
export const onDeleteContributionsModel = /* GraphQL */ `subscription OnDeleteContributionsModel(
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
` as GeneratedSubscription<
  APITypes.OnDeleteContributionsModelSubscriptionVariables,
  APITypes.OnDeleteContributionsModelSubscription
>;
export const onCreateExperienceModel = /* GraphQL */ `subscription OnCreateExperienceModel(
  $filter: ModelSubscriptionExperienceModelFilterInput
) {
  onCreateExperienceModel(filter: $filter) {
    id
    user_id
    org_name
    image_link
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
` as GeneratedSubscription<
  APITypes.OnCreateExperienceModelSubscriptionVariables,
  APITypes.OnCreateExperienceModelSubscription
>;
export const onUpdateExperienceModel = /* GraphQL */ `subscription OnUpdateExperienceModel(
  $filter: ModelSubscriptionExperienceModelFilterInput
) {
  onUpdateExperienceModel(filter: $filter) {
    id
    user_id
    org_name
    image_link
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
` as GeneratedSubscription<
  APITypes.OnUpdateExperienceModelSubscriptionVariables,
  APITypes.OnUpdateExperienceModelSubscription
>;
export const onDeleteExperienceModel = /* GraphQL */ `subscription OnDeleteExperienceModel(
  $filter: ModelSubscriptionExperienceModelFilterInput
) {
  onDeleteExperienceModel(filter: $filter) {
    id
    user_id
    org_name
    image_link
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
` as GeneratedSubscription<
  APITypes.OnDeleteExperienceModelSubscriptionVariables,
  APITypes.OnDeleteExperienceModelSubscription
>;
export const onCreatePostsModel = /* GraphQL */ `subscription OnCreatePostsModel(
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
    cloud_provider_tag
    likes
    likes_users
    saves
    post_comments {
      nextToken
      __typename
    }
    contributor_limit
    contributors
    reported
    experience_level
    application
    project_chat
    counter
    external_link {
      id
      name
      link
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePostsModelSubscriptionVariables,
  APITypes.OnCreatePostsModelSubscription
>;
export const onUpdatePostsModel = /* GraphQL */ `subscription OnUpdatePostsModel(
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
    cloud_provider_tag
    likes
    likes_users
    saves
    post_comments {
      nextToken
      __typename
    }
    contributor_limit
    contributors
    reported
    experience_level
    application
    project_chat
    counter
    external_link {
      id
      name
      link
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePostsModelSubscriptionVariables,
  APITypes.OnUpdatePostsModelSubscription
>;
export const onDeletePostsModel = /* GraphQL */ `subscription OnDeletePostsModel(
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
    cloud_provider_tag
    likes
    likes_users
    saves
    post_comments {
      nextToken
      __typename
    }
    contributor_limit
    contributors
    reported
    experience_level
    application
    project_chat
    counter
    external_link {
      id
      name
      link
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePostsModelSubscriptionVariables,
  APITypes.OnDeletePostsModelSubscription
>;
export const onCreateConversationModel = /* GraphQL */ `subscription OnCreateConversationModel(
  $filter: ModelSubscriptionConversationModelFilterInput
) {
  onCreateConversationModel(filter: $filter) {
    id
    users {
      nextToken
      __typename
    }
    title
    messages {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateConversationModelSubscriptionVariables,
  APITypes.OnCreateConversationModelSubscription
>;
export const onUpdateConversationModel = /* GraphQL */ `subscription OnUpdateConversationModel(
  $filter: ModelSubscriptionConversationModelFilterInput
) {
  onUpdateConversationModel(filter: $filter) {
    id
    users {
      nextToken
      __typename
    }
    title
    messages {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateConversationModelSubscriptionVariables,
  APITypes.OnUpdateConversationModelSubscription
>;
export const onDeleteConversationModel = /* GraphQL */ `subscription OnDeleteConversationModel(
  $filter: ModelSubscriptionConversationModelFilterInput
) {
  onDeleteConversationModel(filter: $filter) {
    id
    users {
      nextToken
      __typename
    }
    title
    messages {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteConversationModelSubscriptionVariables,
  APITypes.OnDeleteConversationModelSubscription
>;
export const onCreateMessageModel = /* GraphQL */ `subscription OnCreateMessageModel(
  $filter: ModelSubscriptionMessageModelFilterInput
) {
  onCreateMessageModel(filter: $filter) {
    id
    message
    from
    senderInfo {
      id
      user_name
      email
      password
      profile_image
      bio
      first_name
      last_name
      user_creation_date
      github_link
      liked_posts
      saved_posts
      hide_posts
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
      difficulty_tag
      cloud_provider_tag
      new_user
      credibility_score
      involved_projects
      experience_level
      years_of_experience
      user_type
      oauth_provider
      oauth_id
      notification_type
      createdAt
      updatedAt
      __typename
    }
    message_date
    conversationID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMessageModelSubscriptionVariables,
  APITypes.OnCreateMessageModelSubscription
>;
export const onUpdateMessageModel = /* GraphQL */ `subscription OnUpdateMessageModel(
  $filter: ModelSubscriptionMessageModelFilterInput
) {
  onUpdateMessageModel(filter: $filter) {
    id
    message
    from
    senderInfo {
      id
      user_name
      email
      password
      profile_image
      bio
      first_name
      last_name
      user_creation_date
      github_link
      liked_posts
      saved_posts
      hide_posts
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
      difficulty_tag
      cloud_provider_tag
      new_user
      credibility_score
      involved_projects
      experience_level
      years_of_experience
      user_type
      oauth_provider
      oauth_id
      notification_type
      createdAt
      updatedAt
      __typename
    }
    message_date
    conversationID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMessageModelSubscriptionVariables,
  APITypes.OnUpdateMessageModelSubscription
>;
export const onDeleteMessageModel = /* GraphQL */ `subscription OnDeleteMessageModel(
  $filter: ModelSubscriptionMessageModelFilterInput
) {
  onDeleteMessageModel(filter: $filter) {
    id
    message
    from
    senderInfo {
      id
      user_name
      email
      password
      profile_image
      bio
      first_name
      last_name
      user_creation_date
      github_link
      liked_posts
      saved_posts
      hide_posts
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
      difficulty_tag
      cloud_provider_tag
      new_user
      credibility_score
      involved_projects
      experience_level
      years_of_experience
      user_type
      oauth_provider
      oauth_id
      notification_type
      createdAt
      updatedAt
      __typename
    }
    message_date
    conversationID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMessageModelSubscriptionVariables,
  APITypes.OnDeleteMessageModelSubscription
>;
export const onCreateCommentModel = /* GraphQL */ `subscription OnCreateCommentModel(
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentModelSubscriptionVariables,
  APITypes.OnCreateCommentModelSubscription
>;
export const onUpdateCommentModel = /* GraphQL */ `subscription OnUpdateCommentModel(
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentModelSubscriptionVariables,
  APITypes.OnUpdateCommentModelSubscription
>;
export const onDeleteCommentModel = /* GraphQL */ `subscription OnDeleteCommentModel(
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentModelSubscriptionVariables,
  APITypes.OnDeleteCommentModelSubscription
>;
export const onCreateExternalLink = /* GraphQL */ `subscription OnCreateExternalLink(
  $filter: ModelSubscriptionExternalLinkFilterInput
) {
  onCreateExternalLink(filter: $filter) {
    id
    name
    link
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateExternalLinkSubscriptionVariables,
  APITypes.OnCreateExternalLinkSubscription
>;
export const onUpdateExternalLink = /* GraphQL */ `subscription OnUpdateExternalLink(
  $filter: ModelSubscriptionExternalLinkFilterInput
) {
  onUpdateExternalLink(filter: $filter) {
    id
    name
    link
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateExternalLinkSubscriptionVariables,
  APITypes.OnUpdateExternalLinkSubscription
>;
export const onDeleteExternalLink = /* GraphQL */ `subscription OnDeleteExternalLink(
  $filter: ModelSubscriptionExternalLinkFilterInput
) {
  onDeleteExternalLink(filter: $filter) {
    id
    name
    link
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteExternalLinkSubscriptionVariables,
  APITypes.OnDeleteExternalLinkSubscription
>;
export const onCreateUsersConvo = /* GraphQL */ `subscription OnCreateUsersConvo(
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
      bio
      first_name
      last_name
      user_creation_date
      github_link
      liked_posts
      saved_posts
      hide_posts
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
      difficulty_tag
      cloud_provider_tag
      new_user
      credibility_score
      involved_projects
      experience_level
      years_of_experience
      user_type
      oauth_provider
      oauth_id
      notification_type
      createdAt
      updatedAt
      __typename
    }
    conversationModel {
      id
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
` as GeneratedSubscription<
  APITypes.OnCreateUsersConvoSubscriptionVariables,
  APITypes.OnCreateUsersConvoSubscription
>;
export const onUpdateUsersConvo = /* GraphQL */ `subscription OnUpdateUsersConvo(
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
      bio
      first_name
      last_name
      user_creation_date
      github_link
      liked_posts
      saved_posts
      hide_posts
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
      difficulty_tag
      cloud_provider_tag
      new_user
      credibility_score
      involved_projects
      experience_level
      years_of_experience
      user_type
      oauth_provider
      oauth_id
      notification_type
      createdAt
      updatedAt
      __typename
    }
    conversationModel {
      id
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
` as GeneratedSubscription<
  APITypes.OnUpdateUsersConvoSubscriptionVariables,
  APITypes.OnUpdateUsersConvoSubscription
>;
export const onDeleteUsersConvo = /* GraphQL */ `subscription OnDeleteUsersConvo(
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
      bio
      first_name
      last_name
      user_creation_date
      github_link
      liked_posts
      saved_posts
      hide_posts
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
      difficulty_tag
      cloud_provider_tag
      new_user
      credibility_score
      involved_projects
      experience_level
      years_of_experience
      user_type
      oauth_provider
      oauth_id
      notification_type
      createdAt
      updatedAt
      __typename
    }
    conversationModel {
      id
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
` as GeneratedSubscription<
  APITypes.OnDeleteUsersConvoSubscriptionVariables,
  APITypes.OnDeleteUsersConvoSubscription
>;
