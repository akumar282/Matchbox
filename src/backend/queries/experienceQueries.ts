import { API } from 'aws-amplify'
import { getExperienceModel, listExperienceModels } from '@graphql/queries'
import {
  GetExperienceModelQuery,
  ListExperienceModelsQuery,
  ListExperienceModelsQueryVariables,
  GetExperienceModelQueryVariables
} from '@api'
import { GraphQLQuery } from '@aws-amplify/api'

export async function getExperience(experience: { input: GetExperienceModelQueryVariables}){
  return await API.graphql<GraphQLQuery<GetExperienceModelQuery>>({
    query: getExperienceModel,
    variables: experience,
    authMode: 'API_KEY'
  })
}

export async function listExperience(experience: { input: ListExperienceModelsQueryVariables}){
  return await API.graphql<GraphQLQuery<ListExperienceModelsQuery>>({
    query: listExperienceModels,
    variables: experience,
    authMode: 'API_KEY'
  })
}