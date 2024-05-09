export const getTotalPostsNumber = `
  query getPostsNumber($id: ID!) {
    searchPostsModels(
      aggregates: {
        type: sum
        field: counter
        name: "count"
      }
      filter: { userID: { eq: $id}}
    ) {
      aggregateItems {
        name 
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
        }
      }
    }
  }
`

export const  getMessagesQuery = `
  query getMessagesConvoQuery($id: ID!, $nextToken: String) {
    getConversationModel(id: $id) {
      messages(nextToken: $nextToken) {
        items {
          conversationID
          createdAt
          from
          id
          message
          message_date
          senderInfo {
            email
            profile_image
            user_name
          }
        }
        nextToken
      }
    }
  }
`

export const getUsersConversations = `
  query getConversationsQuery($id: ID!, $nextToken: String) {
    getUsersModel(id: $id) {
      conversations {
        items {
          conversationModel {
            id
            title
            createdAt
            updatedAt
            users(nextToken: $nextToken) {
              items {
                id
              }
            }
          }
        }
      }
    }
  }
`

export const paginatedPostsQuery = `
  query getPaginatedPostsQuery($id: ID!, $nextToken: String) {
    getUsersModel(id: $id) {
      user_posts(nextToken: $nextToken) {
        items {
          cloud_provider_tag
          counter
          createdAt
          creator_name
          description
          dev_type_tag
          difficulty_tag
          experience_level
          framework_tag
          id
          image_link
          interest_tag
          lang_tag
          likes
          likes_users
          long_description
          post_date
          post_title
          project_chat
          project_link
          saves
          size_tag
          updatedAt
          userID
          contributor_limit
          application
          reported
        }
        nextToken
      }
    }
  }
`

export const listSavedPostModelsCustom = `
  query ListSavedPostModels(
    $filter: ModelSavedPostModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSavedPostModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        saved_at
        userID 
        postID
        postInfo {
          counter
          createdAt
          creator_name
          description
          id
          image_link
          likes
          likes_users
          long_description
          post_date
          post_title
          project_chat
          project_link
          saves
          updatedAt
          userID
        }
        count
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`

export const listJoinedPostModelsCustom = `
  query ListJoinedPostModels(
    $filter: ModelJoinedPostModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJoinedPostModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        count
        createdAt
        id
        joined_at
        postID
        postInfo {
          userID
          cloud_provider_tag
          contributor_limit
          counter
          createdAt
          creator_name
          description
          dev_type_tag
          difficulty_tag
          id
          likes
          likes_users
          long_description
          post_title
          post_date
          project_chat
          project_link
          updatedAt
        }
        userID
        updatedAt
      }
      nextToken
    }
  }
`