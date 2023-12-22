import { API } from 'aws-amplify'
import { createCommentModel, deleteCommentModel, updateCommentModel } from '@graphql/mutations'
import {
  CreateCommentModelInput,
  CreateCommentModelMutation,
  DeleteCommentModelInput,
  DeleteCommentModelMutation,
  UpdateCommentModelInput,
  UpdateCommentModelMutation
} from '@api'
import { GraphQLResult } from '@aws-amplify/api-graphql'

export async function createComment(comment: { input: CreateCommentModelInput}){
  return await API.graphql<GraphQLResult<CreateCommentModelMutation>>({
    query: createCommentModel,
    variables: comment,
    authMode: 'API_KEY'
  })
}

export async function deleteComment(comment: { input: DeleteCommentModelInput}) {
  return await API.graphql<GraphQLResult<DeleteCommentModelMutation>>({
    query: deleteCommentModel,
    variables: comment,
    authMode: 'API_KEY'
  })
}

export async function updateComment(comment: { input: UpdateCommentModelInput }) {
  return await API.graphql<GraphQLResult<UpdateCommentModelMutation>>({
    query: updateCommentModel,
    variables: comment,
    authMode: 'API_KEY'
  })
}