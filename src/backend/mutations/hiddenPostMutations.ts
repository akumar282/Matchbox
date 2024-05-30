import { API } from 'aws-amplify'
import { createHiddenPostModel, deleteHiddenPostModel, updateHiddenPostModel } from '@graphql/mutations'
import {
  CreateHiddenPostModelInput,
  CreateHiddenPostModelMutation,
  DeleteHiddenPostModelInput,
  DeleteHiddenPostModelMutation,
  UpdateHiddenPostModelInput,
  UpdateHiddenPostModelMutation
} from '@api'
import { GraphQLQuery } from '@aws-amplify/api'

export async function createHiddenPost(post: { input: CreateHiddenPostModelInput}){
  return await API.graphql<GraphQLQuery<CreateHiddenPostModelMutation>>({
    query: createHiddenPostModel,
    variables: post,
    authMode: 'API_KEY'
  })
}

export async function deleteHiddenPost(post: { input: DeleteHiddenPostModelInput}) {
  return await API.graphql<GraphQLQuery<DeleteHiddenPostModelMutation>>({
    query: deleteHiddenPostModel,
    variables: post,
    authMode: 'API_KEY'
  })
}

export async function updateHiddenPost(post: { input: UpdateHiddenPostModelInput }) {
  return await API.graphql<GraphQLQuery<UpdateHiddenPostModelMutation>>({
    query: updateHiddenPostModel,
    variables: post,
    authMode: 'API_KEY'
  })
}