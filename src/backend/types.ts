import { 
  CreateUsersModelInput, 
  UpdateUsersModelInput,
  DeleteUsersModelInput, 
  CreatePostsModelInput, 
  UpdatePostsModelInput,
  DeletePostsModelInput,
  CreateNewsletterEmailModelInput,
  UpdateNewsletterEmailModelInput,
  DeleteNewsletterEmailModelInput
} from '../API'

export type CreateUsersPayload = {
  input: CreateUsersModelInput
}

export type UpdateUsersModelPayload = {
  input: UpdateUsersModelInput
}

export type DeleteUserModelPayload = { 
  input: DeleteUsersModelInput
}

export type CreatePostsPayload = {
  input: CreatePostsModelInput
}

export type UpdatePostsModelPayload = {
  input: UpdatePostsModelInput
}

export type DeletePostsodelPayload = { 
  input: DeletePostsModelInput
}

export type CreateNewsletterEmailModelPayload = {
  input: CreateNewsletterEmailModelInput
}

export type UpdateewsletterEmailModelPayload = {
  input: UpdateNewsletterEmailModelInput
}

export type DeleteewsletterEmailModelPayload = { 
  input: DeleteNewsletterEmailModelInput
}

