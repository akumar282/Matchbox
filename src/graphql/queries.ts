/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getNewsletterEmailModel = /* GraphQL */ `query GetNewsletterEmailModel($id: ID!) {
  getNewsletterEmailModel(id: $id) {
    id
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNewsletterEmailModelQueryVariables,
  APITypes.GetNewsletterEmailModelQuery
>;
export const listNewsletterEmailModels = /* GraphQL */ `query ListNewsletterEmailModels(
  $filter: ModelNewsletterEmailModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listNewsletterEmailModels(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      email
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNewsletterEmailModelsQueryVariables,
  APITypes.ListNewsletterEmailModelsQuery
>;
export const searchNewsletterEmailModels = /* GraphQL */ `query SearchNewsletterEmailModels(
  $filter: SearchableNewsletterEmailModelFilterInput
  $sort: [SearchableNewsletterEmailModelSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableNewsletterEmailModelAggregationInput]
) {
  searchNewsletterEmailModels(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      email
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchNewsletterEmailModelsQueryVariables,
  APITypes.SearchNewsletterEmailModelsQuery
>;
export const getUsersModel = /* GraphQL */ `query GetUsersModel($id: ID!) {
  getUsersModel(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUsersModelQueryVariables,
  APITypes.GetUsersModelQuery
>;
export const listUsersModels = /* GraphQL */ `query ListUsersModels(
  $filter: ModelUsersModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsersModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUsersModelsQueryVariables,
  APITypes.ListUsersModelsQuery
>;
export const searchUsersModels = /* GraphQL */ `query SearchUsersModels(
  $filter: SearchableUsersModelFilterInput
  $sort: [SearchableUsersModelSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableUsersModelAggregationInput]
) {
  searchUsersModels(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchUsersModelsQueryVariables,
  APITypes.SearchUsersModelsQuery
>;
export const getContributionsModel = /* GraphQL */ `query GetContributionsModel($id: ID!) {
  getContributionsModel(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetContributionsModelQueryVariables,
  APITypes.GetContributionsModelQuery
>;
export const listContributionsModels = /* GraphQL */ `query ListContributionsModels(
  $filter: ModelContributionsModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listContributionsModels(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.ListContributionsModelsQueryVariables,
  APITypes.ListContributionsModelsQuery
>;
export const searchContributionsModels = /* GraphQL */ `query SearchContributionsModels(
  $filter: SearchableContributionsModelFilterInput
  $sort: [SearchableContributionsModelSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableContributionsModelAggregationInput]
) {
  searchContributionsModels(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
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
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchContributionsModelsQueryVariables,
  APITypes.SearchContributionsModelsQuery
>;
export const getExperienceModel = /* GraphQL */ `query GetExperienceModel($id: ID!) {
  getExperienceModel(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetExperienceModelQueryVariables,
  APITypes.GetExperienceModelQuery
>;
export const listExperienceModels = /* GraphQL */ `query ListExperienceModels(
  $filter: ModelExperienceModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listExperienceModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExperienceModelsQueryVariables,
  APITypes.ListExperienceModelsQuery
>;
export const searchExperienceModels = /* GraphQL */ `query SearchExperienceModels(
  $filter: SearchableExperienceModelFilterInput
  $sort: [SearchableExperienceModelSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableExperienceModelAggregationInput]
) {
  searchExperienceModels(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchExperienceModelsQueryVariables,
  APITypes.SearchExperienceModelsQuery
>;
export const getPostsModel = /* GraphQL */ `query GetPostsModel($id: ID!) {
  getPostsModel(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPostsModelQueryVariables,
  APITypes.GetPostsModelQuery
>;
export const listPostsModels = /* GraphQL */ `query ListPostsModels(
  $filter: ModelPostsModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostsModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      cloud_provider_tag
      likes
      likes_users
      saves
      contributor_limit
      contributors
      reported
      experience_level
      application
      project_chat
      counter
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPostsModelsQueryVariables,
  APITypes.ListPostsModelsQuery
>;
export const searchPostsModels = /* GraphQL */ `query SearchPostsModels(
  $filter: SearchablePostsModelFilterInput
  $sort: [SearchablePostsModelSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchablePostsModelAggregationInput]
) {
  searchPostsModels(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
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
      cloud_provider_tag
      likes
      likes_users
      saves
      contributor_limit
      contributors
      reported
      experience_level
      application
      project_chat
      counter
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchPostsModelsQueryVariables,
  APITypes.SearchPostsModelsQuery
>;
export const getConversationModel = /* GraphQL */ `query GetConversationModel($id: ID!) {
  getConversationModel(id: $id) {
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
}
` as GeneratedQuery<
  APITypes.GetConversationModelQueryVariables,
  APITypes.GetConversationModelQuery
>;
export const listConversationModels = /* GraphQL */ `query ListConversationModels(
  $filter: ModelConversationModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listConversationModels(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListConversationModelsQueryVariables,
  APITypes.ListConversationModelsQuery
>;
export const searchConversationModels = /* GraphQL */ `query SearchConversationModels(
  $filter: SearchableConversationModelFilterInput
  $sort: [SearchableConversationModelSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableConversationModelAggregationInput]
) {
  searchConversationModels(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      title
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchConversationModelsQueryVariables,
  APITypes.SearchConversationModelsQuery
>;
export const getMessageModel = /* GraphQL */ `query GetMessageModel($id: ID!) {
  getMessageModel(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMessageModelQueryVariables,
  APITypes.GetMessageModelQuery
>;
export const listMessageModels = /* GraphQL */ `query ListMessageModels(
  $filter: ModelMessageModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessageModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListMessageModelsQueryVariables,
  APITypes.ListMessageModelsQuery
>;
export const searchMessageModels = /* GraphQL */ `query SearchMessageModels(
  $filter: SearchableMessageModelFilterInput
  $sort: [SearchableMessageModelSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableMessageModelAggregationInput]
) {
  searchMessageModels(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
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
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchMessageModelsQueryVariables,
  APITypes.SearchMessageModelsQuery
>;
export const getCommentModel = /* GraphQL */ `query GetCommentModel($id: ID!) {
  getCommentModel(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCommentModelQueryVariables,
  APITypes.GetCommentModelQuery
>;
export const listCommentModels = /* GraphQL */ `query ListCommentModels(
  $filter: ModelCommentModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listCommentModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListCommentModelsQueryVariables,
  APITypes.ListCommentModelsQuery
>;
export const searchCommentModels = /* GraphQL */ `query SearchCommentModels(
  $filter: SearchableCommentModelFilterInput
  $sort: [SearchableCommentModelSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableCommentModelAggregationInput]
) {
  searchCommentModels(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
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
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchCommentModelsQueryVariables,
  APITypes.SearchCommentModelsQuery
>;
export const getExternalLink = /* GraphQL */ `query GetExternalLink($id: ID!) {
  getExternalLink(id: $id) {
    id
    name
    link
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetExternalLinkQueryVariables,
  APITypes.GetExternalLinkQuery
>;
export const listExternalLinks = /* GraphQL */ `query ListExternalLinks(
  $filter: ModelExternalLinkFilterInput
  $limit: Int
  $nextToken: String
) {
  listExternalLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      link
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExternalLinksQueryVariables,
  APITypes.ListExternalLinksQuery
>;
export const searchExternalLinks = /* GraphQL */ `query SearchExternalLinks(
  $filter: SearchableExternalLinkFilterInput
  $sort: [SearchableExternalLinkSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableExternalLinkAggregationInput]
) {
  searchExternalLinks(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      name
      link
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchExternalLinksQueryVariables,
  APITypes.SearchExternalLinksQuery
>;
export const getUsersConvo = /* GraphQL */ `query GetUsersConvo($id: ID!) {
  getUsersConvo(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUsersConvoQueryVariables,
  APITypes.GetUsersConvoQuery
>;
export const listUsersConvos = /* GraphQL */ `query ListUsersConvos(
  $filter: ModelUsersConvoFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsersConvos(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListUsersConvosQueryVariables,
  APITypes.ListUsersConvosQuery
>;
