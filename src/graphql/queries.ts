/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNewsletterEmailModel = /* GraphQL */ `
  query GetNewsletterEmailModel($id: ID!) {
    getNewsletterEmailModel(id: $id) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNewsletterEmailModels = /* GraphQL */ `
  query ListNewsletterEmailModels(
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
`;
export const searchNewsletterEmailModels = /* GraphQL */ `
  query SearchNewsletterEmailModels(
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
`;
export const getUsersModel = /* GraphQL */ `
  query GetUsersModel($id: ID!) {
    getUsersModel(id: $id) {
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
      liked_posts
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
      cloud_provider_tag
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
      oauth_provider
      oauth_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsersModels = /* GraphQL */ `
  query ListUsersModels(
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchUsersModels = /* GraphQL */ `
  query SearchUsersModels(
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
`;
export const getContributionsModel = /* GraphQL */ `
  query GetContributionsModel($id: ID!) {
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
`;
export const listContributionsModels = /* GraphQL */ `
  query ListContributionsModels(
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
`;
export const searchContributionsModels = /* GraphQL */ `
  query SearchContributionsModels(
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
`;
export const getExperienceModel = /* GraphQL */ `
  query GetExperienceModel($id: ID!) {
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
`;
export const listExperienceModels = /* GraphQL */ `
  query ListExperienceModels(
    $filter: ModelExperienceModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExperienceModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
      __typename
    }
  }
`;
export const searchExperienceModels = /* GraphQL */ `
  query SearchExperienceModels(
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
`;
export const getPostsModel = /* GraphQL */ `
  query GetPostsModel($id: ID!) {
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
export const listPostsModels = /* GraphQL */ `
  query ListPostsModels(
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchPostsModels = /* GraphQL */ `
  query SearchPostsModels(
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
`;
export const getConversationModel = /* GraphQL */ `
  query GetConversationModel($id: ID!) {
    getConversationModel(id: $id) {
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
export const listConversationModels = /* GraphQL */ `
  query ListConversationModels(
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
        users {
          nextToken
          __typename
        }
        title
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchConversationModels = /* GraphQL */ `
  query SearchConversationModels(
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
        users {
          nextToken
          __typename
        }
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
`;
export const getMessageModel = /* GraphQL */ `
  query GetMessageModel($id: ID!) {
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
`;
export const listMessageModels = /* GraphQL */ `
  query ListMessageModels(
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
`;
export const searchMessageModels = /* GraphQL */ `
  query SearchMessageModels(
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
`;
export const getCommentModel = /* GraphQL */ `
  query GetCommentModel($id: ID!) {
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
`;
export const listCommentModels = /* GraphQL */ `
  query ListCommentModels(
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
`;
export const searchCommentModels = /* GraphQL */ `
  query SearchCommentModels(
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
`;
export const getUsersConvo = /* GraphQL */ `
  query GetUsersConvo($id: ID!) {
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
export const listUsersConvos = /* GraphQL */ `
  query ListUsersConvos(
    $filter: ModelUsersConvoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersConvos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        usersModelID
        conversationModelID
        usersModel {
          id
          user_name
          email
          password
          profile_image
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
      nextToken
      __typename
    }
  }
`;
