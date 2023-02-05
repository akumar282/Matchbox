import { API } from 'aws-amplify'
import { CreateNewsletterEmailModelPayload } from "../types"
import { createNewsletterEmailModel } from "../../graphql/mutations"

export async function createNewsletterEmail(post: CreateNewsletterEmailModelPayload) {
  return await API.graphql(
    {
      authMode: "API_KEY",
      query: createNewsletterEmailModel,
      variables: post
    }
  )
}