import { API } from 'aws-amplify'
import { createPostsModel, deletePostsModel, updatePostsModel } from '@graphql/mutations'
import { 
  CreatePostsModelInput, 
  CreatePostsModelMutation, 
  DeletePostsModelInput, 
  DeletePostsModelMutation, 
  UpdatePostsModelInput, 
  UpdatePostsModelMutation
} from '@api'
import { GraphQLQuery } from '@aws-amplify/api'

export async function createPost(post: { input: CreatePostsModelInput}){
  return await API.graphql<GraphQLQuery<CreatePostsModelMutation>>({
    query: createPostsModel,
    variables: post,
    authMode: 'API_KEY'
  })
}

export async function deletePost(post: { input: DeletePostsModelInput}) {
  return await API.graphql<GraphQLQuery<DeletePostsModelMutation>>({
    query: deletePostsModel,
    variables: post,
    authMode: 'API_KEY'
  })
}

export async function updatePost(post: { input: UpdatePostsModelInput }) {
  return await API.graphql<GraphQLQuery<UpdatePostsModelMutation>>({
    query: updatePostsModel,
    variables: post,
    authMode: 'API_KEY'
  })
}