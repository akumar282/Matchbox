import { API } from 'aws-amplify'
import { createLikedPostModel, deleteLikedPostModel, updateLikedPostModel } from '@graphql/mutations'
import {
  CreateLikedPostModelInput,
  CreateLikedPostModelMutation,
  DeleteLikedPostModelInput,
  DeleteLikedPostModelMutation,
  UpdateLikedPostModelInput,
  UpdateLikedPostModelMutation
} from '@api'
import { GraphQLQuery } from '@aws-amplify/api'

export async function createLikedPost(post: { input: CreateLikedPostModelInput}){
  return await API.graphql<GraphQLQuery<CreateLikedPostModelMutation>>({
    query: createLikedPostModel,
    variables: post,
    authMode: 'API_KEY'
  })
}

export async function deleteLikedPost(post: { input: DeleteLikedPostModelInput}) {
  return await API.graphql<GraphQLQuery<DeleteLikedPostModelMutation>>({
    query: deleteLikedPostModel,
    variables: post,
    authMode: 'API_KEY'
  })
}

export async function updateLikedPost(post: { input: UpdateLikedPostModelInput }) {
  return await API.graphql<GraphQLQuery<UpdateLikedPostModelMutation>>({
    query: updateLikedPostModel,
    variables: post,
    authMode: 'API_KEY'
  })
}