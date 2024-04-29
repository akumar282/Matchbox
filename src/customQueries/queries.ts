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

export const getMessagesQuery = `
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
          contributors
          application
          reported
        }
        nextToken
      }
    }
  }
`