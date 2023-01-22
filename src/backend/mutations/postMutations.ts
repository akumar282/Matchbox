import { API } from 'aws-amplify'
import { CreatePostsPayload } from "../types"
import { createPostsModel } from "../../graphql/mutations"

export async function createPost(post: CreatePostsPayload) {
  return await API.graphql(
    {
      authMode: "API_KEY",
      query: createPostsModel,
      variables: post
    }
  )
}