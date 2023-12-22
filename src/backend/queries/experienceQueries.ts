import { API } from 'aws-amplify'
import { getExperienceModel, listExperienceModels } from '@graphql/queries'
import {
  GetExperienceModelQuery,
  ListExperienceModelsQuery,
  ListExperienceModelsQueryVariables,
  GetExperienceModelQueryVariables
} from '@api'
import { GraphQLResult } from '@aws-amplify/api-graphql'

export async function getExperience(experience: { input: GetExperienceModelQueryVariables}){
  return await API.graphql<GraphQLResult<GetExperienceModelQuery>>({
    query: getExperienceModel,
    variables: experience,
    authMode: 'API_KEY'
  })
}

export async function listExperience(experience: { input: ListExperienceModelsQueryVariables}){
  return await API.graphql<GraphQLResult<ListExperienceModelsQuery>>({
    query: listExperienceModels,
    variables: experience,
    authMode: 'API_KEY'
  })
}