import { API } from 'aws-amplify'
import { GraphQLQuery } from '@aws-amplify/api'
import { getHiddenPostModel, listHiddenPostModels } from '@graphql/queries'
import {
  GetHiddenPostModelQuery,
  ListHiddenPostModelsQuery,
  ListHiddenPostModelsQueryVariables,
  GetHiddenPostModelQueryVariables
} from '@api'

export async function getHiddenPost(post: GetHiddenPostModelQueryVariables){
  return await API.graphql<GraphQLQuery<GetHiddenPostModelQuery>>({
    query: getHiddenPostModel,
    variables: post,
    authMode: 'API_KEY'
  })
}

export async function listHiddenPosts(post:  ListHiddenPostModelsQueryVariables) {
  return await API.graphql<GraphQLQuery<ListHiddenPostModelsQuery>>({
    query: listHiddenPostModels,
    variables: post,
    authMode: 'API_KEY'
  })
}