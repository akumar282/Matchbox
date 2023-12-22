import { API } from 'aws-amplify'
import { createContributionsModel, deleteContributionsModel, updateContributionsModel } from '@graphql/mutations'
import {
  CreateContributionsModelInput,
  CreateContributionsModelMutation,
  DeleteContributionsModelInput,
  DeleteContributionsModelMutation,
  UpdateContributionsModelInput,
  UpdateContributionsModelMutation
} from '@api'
import { GraphQLResult } from '@aws-amplify/api-graphql'

export async function createContributions(contribution: { input: CreateContributionsModelInput}){
  return await API.graphql<GraphQLResult<CreateContributionsModelMutation>>({
    query: createContributionsModel,
    variables: contribution,
    authMode: 'API_KEY'
  })
}

export async function deleteContributions(contribution: { input: DeleteContributionsModelInput}) {
  return await API.graphql<GraphQLResult<DeleteContributionsModelMutation>>({
    query: deleteContributionsModel,
    variables: contribution,
    authMode: 'API_KEY'
  })
}

export async function updateContributions(contribution: { input: UpdateContributionsModelInput }) {
  return await API.graphql<GraphQLResult<UpdateContributionsModelMutation>>({
    query: updateContributionsModel,
    variables: contribution,
    authMode: 'API_KEY'
  })
}