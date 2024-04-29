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
import { GraphQLQuery } from '@aws-amplify/api'

export async function createComment(comment: { input: CreateCommentModelInput}){
  return await API.graphql<GraphQLQuery<CreateCommentModelMutation>>({
    query: createCommentModel,
    variables: comment,
    authMode: 'API_KEY'
  })
}

export async function deleteComment(comment: { input: DeleteCommentModelInput}) {
  return await API.graphql<GraphQLQuery<DeleteCommentModelMutation>>({
    query: deleteCommentModel,
    variables: comment,
    authMode: 'API_KEY'
  })
}

export async function updateComment(comment: { input: UpdateCommentModelInput }) {
  return await API.graphql<GraphQLQuery<UpdateCommentModelMutation>>({
    query: updateCommentModel,
    variables: comment,
    authMode: 'API_KEY'
  })
}