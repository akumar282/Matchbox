import { API } from 'aws-amplify'
import { CreatePostsModelPayload, DeletePostsModelPayload, UpdatePostsModelPayload } from "../types"
import { createPostsModel, deletePostsModel, updatePostsModel } from "../../graphql/mutations"

export async function createPost(post: CreatePostsModelPayload) {
  return await API.graphql(
    {
      authMode: "API_KEY",
      query: createPostsModel,
      variables: post
    }
  )
}

export async function deletePost(post: DeletePostsModelPayload) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: deletePostsModel,
      variables: post
    }
  )
}

export async function updatePost(post: UpdatePostsModelPayload) {
  return await API.graphql(
    {
      authMode: 'API_KEY',
      query: updatePostsModel,
      variables: post
    }
  )
}