import { API } from 'aws-amplify'
import { createSavedPostModel, deleteSavedPostModel, updateSavedPostModel } from '@graphql/mutations'
import {
  CreateSavedPostModelInput,
  CreateSavedPostModelMutation,
  DeleteSavedPostModelInput,
  DeleteSavedPostModelMutation,
  UpdateSavedPostModelInput,
  UpdateSavedPostModelMutation
} from '@api'
import { GraphQLQuery } from '@aws-amplify/api'

export async function createSavedPost(post: { input: CreateSavedPostModelInput}){
  return await API.graphql<GraphQLQuery<CreateSavedPostModelMutation>>({
    query: createSavedPostModel,
    variables: post,
    authMode: 'API_KEY'
  })
}

export async function deleteSavedPost(post: { input: DeleteSavedPostModelInput}) {
  return await API.graphql<GraphQLQuery<DeleteSavedPostModelMutation>>({
    query: deleteSavedPostModel,
    variables: post,
    authMode: 'API_KEY'
  })
}

export async function updateSavedPost(post: { input: UpdateSavedPostModelInput }) {
  return await API.graphql<GraphQLQuery<UpdateSavedPostModelMutation>>({
    query: updateSavedPostModel,
    variables: post,
    authMode: 'API_KEY'
  })
}