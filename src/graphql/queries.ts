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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNewsletterEmailModels = /* GraphQL */ `
  query SyncNewsletterEmailModels(
    $filter: ModelNewsletterEmailModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNewsletterEmailModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
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
            }
          }
        }
      }
    }
  }
`;
export const getConversationModel = /* GraphQL */ `
  query GetConversationModel($id: ID!) {
    getConversationModel(id: $id) {
      id
      user_one
      user_two
      messages
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        user_one
        user_two
        messages
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncConversationModels = /* GraphQL */ `
  query SyncConversationModels(
    $filter: ModelConversationModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConversationModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        user_one
        user_two
        messages
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        user_one
        user_two
        messages
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
            }
          }
        }
      }
    }
  }
`;
export const getMessageModel = /* GraphQL */ `
  query GetMessageModel($id: ID!) {
    getMessageModel(id: $id) {
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
        to
        from
        message_date
        conversationID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMessageModels = /* GraphQL */ `
  query SyncMessageModels(
    $filter: ModelMessageModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessageModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      }
      nextToken
      startedAt
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
        to
        from
        message_date
        conversationID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
            }
          }
        }
      }
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
      nextToken
      startedAt
    }
  }
`;
export const syncPostsModels = /* GraphQL */ `
  query SyncPostsModels(
    $filter: ModelPostsModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPostsModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
      nextToken
      startedAt
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
            }
          }
        }
      }
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
      conversations {
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
        first_name
        last_name
        user_creation_date
        dahublink
        saved_posts
        hide_posts
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsersModels = /* GraphQL */ `
  query SyncUsersModels(
    $filter: ModelUsersModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsersModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        user_name
        email
        password
        profile_image
        first_name
        last_name
        user_creation_date
        dahublink
        saved_posts
        hide_posts
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
      nextToken
      startedAt
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
        first_name
        last_name
        user_creation_date
        dahublink
        saved_posts
        hide_posts
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
            }
          }
        }
      }
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
        postID
        userID
        user_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCommentModels = /* GraphQL */ `
  query SyncCommentModels(
    $filter: ModelCommentModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCommentModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
        postID
        userID
        user_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
            }
          }
        }
      }
    }
  }
`;
