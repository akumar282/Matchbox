import { API } from 'aws-amplify'
import { createJoinedPostModel, deleteJoinedPostModel, updateJoinedPostModel } from '@graphql/mutations'
import {
  CreateJoinedPostModelInput,
  CreateJoinedPostModelMutation,
  DeleteJoinedPostModelInput,
  DeleteJoinedPostModelMutation,
  UpdateJoinedPostModelInput,
  UpdateJoinedPostModelMutation
} from '@api'
import { GraphQLQuery } from '@aws-amplify/api'

export async function createJoinedPost(post: { input: CreateJoinedPostModelInput}){
  return await API.graphql<GraphQLQuery<CreateJoinedPostModelMutation>>({
    query: createJoinedPostModel,
    variables: post,
    authMode: 'API_KEY'
  })
}

export async function deleteJoinedPost(post: { input: DeleteJoinedPostModelInput}) {
  return await API.graphql<GraphQLQuery<DeleteJoinedPostModelMutation>>({
    query: deleteJoinedPostModel,
    variables: post,
    authMode: 'API_KEY'
  })
}

export async function updateJoinedPost(post: { input: UpdateJoinedPostModelInput }) {
  return await API.graphql<GraphQLQuery<UpdateJoinedPostModelMutation>>({
    query: updateJoinedPostModel,
    variables: post,
    authMode: 'API_KEY'
  })
}