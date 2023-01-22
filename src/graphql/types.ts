import { 
  CreateUsersModelInput, 
  DeletePostsModelInput, 
  UpdateUsersModelInput 
} from '../API'

export type CreateUsersPayload = {
  input: CreateUsersModelInput
}

export type UpdateUsersModelPayload = {
  input: UpdateUsersModelInput
}

export type DeleteUserModelPayload = { 
  input: DeletePostsModelInput
}