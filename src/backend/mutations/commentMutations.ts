import { API } from 'aws-amplify'
import { createCommentModel, deleteCommentModel, updateCommentModel } from "../../graphql/mutations"
import { CreateCommentModelPayload, DeleteCommentModelPayload, UpdateCommentModelPayload } from "../types"
import { GraphQLQuery } from '@aws-amplify/api';
import { CreateCommentModelMutation } from '../../API'

export async function createComment(comment: CreateCommentModelPayload) {
  return await API.graphql<GraphQLQuery<CreateCommentModelMutation>>(
    {
      authMode: "API_KEY",
      query: createCommentModel,
      variables: comment
    }
  )
}

export async function deleteComment(comment: DeleteCommentModelPayload) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: deleteCommentModel,
      variables: comment
    }
  )
}

export async function updateComment(comment: UpdateCommentModelPayload) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: updateCommentModel,
      variables: comment
    }
  )
}