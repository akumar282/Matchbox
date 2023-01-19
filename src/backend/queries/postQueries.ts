import { Amplify, API } from 'aws-amplify'
import { CreateUsersPayload } from "../../graphql/types"
import { createUsersModel } from "../../graphql/mutations"

export async function 