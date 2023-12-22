import { API } from 'aws-amplify'
import { getCommentModel, listCommentModels } from '@graphql/queries'
import {
  GetCommentModelQuery,
  ListCommentModelsQuery,
  ListCommentModelsQueryVariables,
  GetCommentModelQueryVariables
} from '@api'
import { GraphQLResult } from '@aws-amplify/api-graphql'

export async function getComment(comment: { input: GetCommentModelQueryVariables}){
  return await API.graphql<GraphQLResult<GetCommentModelQuery>>({
    query: getCommentModel,
    variables: comment,
    authMode: 'API_KEY'
  })
}

export async function listComment(comment: { input: ListCommentModelsQueryVariables}){
  return await API.graphql<GraphQLResult<ListCommentModelsQuery>>({
    query: listCommentModels,
    variables: comment,
    authMode: 'API_KEY'
  })
}