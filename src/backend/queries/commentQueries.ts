import { API } from 'aws-amplify'
import { getCommentModel } from '@graphql/queries'
import {
  GetCommentModelQuery,
  ListCommentModelsQuery,
  ListCommentModelsQueryVariables,
  GetCommentModelQueryVariables
} from '@api'
import { GraphQLQuery } from '@aws-amplify/api'
import {listCommentsCustom} from '../../customQueries/queries'

export async function getComment(comment: { input: GetCommentModelQueryVariables}){
  return await API.graphql<GraphQLQuery<GetCommentModelQuery>>({
    query: getCommentModel,
    variables: comment,
    authMode: 'API_KEY'
  })
}

export async function listComment(comment: ListCommentModelsQueryVariables){
  return await API.graphql<GraphQLQuery<ListCommentModelsQuery>>({
    query: listCommentsCustom,
    variables: comment,
    authMode: 'API_KEY'
  })
}