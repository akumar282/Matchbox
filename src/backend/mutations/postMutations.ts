import { API } from 'aws-amplify'
import { CreatePostsModelPayload } from "../types"
import { createPostsModel } from "../../graphql/mutations"

export async function createPost(post: CreatePostsModelPayload) {
  return await API.graphql(
    {
      authMode: "API_KEY",
      query: createPostsModel,
      variables: post
    }
  )
}