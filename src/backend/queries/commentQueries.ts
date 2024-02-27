import { API } from 'aws-amplify'
import { getCommentModel, listCommentModels } from '@graphql/queries'
import {
  GetCommentModelQuery,
  ListCommentModelsQuery,
  ListCommentModelsQueryVariables,
  GetCommentModelQueryVariables
} from '@api'
import { GraphQLQuery } from '@aws-amplify/api'

export async function getComment(comment: { input: GetCommentModelQueryVariables}){
  return await API.graphql<GraphQLQuery<GetCommentModelQuery>>({
    query: getCommentModel,
    variables: comment,
    authMode: 'API_KEY'
  })
}

export async function listComment(comment: { input: ListCommentModelsQueryVariables}){
  return await API.graphql<GraphQLQuery<ListCommentModelsQuery>>({
    query: listCommentModels,
    variables: comment,
    authMode: 'API_KEY'
  })
}