import { API } from 'aws-amplify'
import { createExperienceModel, deleteExperienceModel, updateExperienceModel } from '@graphql/mutations'
import {
  CreateExperienceModelInput,
  CreateExperienceModelMutation,
  DeleteExperienceModelInput,
  DeleteExperienceModelMutation,
  UpdateExperienceModelInput,
  UpdateExperienceModelMutation
} from '@api'
import { GraphQLResult } from '@aws-amplify/api-graphql'

export async function createExperience(experience: { input: CreateExperienceModelInput}){
  return await API.graphql<GraphQLResult<CreateExperienceModelMutation>>({
    query: createExperienceModel,
    variables: experience,
    authMode: 'API_KEY'
  })
}

export async function deleteExperience(experience: { input: DeleteExperienceModelInput}) {
  return await API.graphql<GraphQLResult<DeleteExperienceModelMutation>>({
    query: deleteExperienceModel,
    variables: experience,
    authMode: 'API_KEY'
  })
}

export async function updateExperience(experience: { input: UpdateExperienceModelInput }) {
  return await API.graphql<GraphQLResult<UpdateExperienceModelMutation>>({
    query: updateExperienceModel,
    variables: experience,
    authMode: 'API_KEY'
  })
}