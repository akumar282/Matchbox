import { API } from 'aws-amplify'
import { getContributionsModel, listContributionsModels } from '@graphql/queries'
import {
  GetContributionsModelQuery,
  ListContributionsModelsQuery,
  ListContributionsModelsQueryVariables,
  GetContributionsModelQueryVariables
} from '@api'
import { GraphQLResult } from '@aws-amplify/api-graphql'

export async function getContribution(contribution: { input: GetContributionsModelQueryVariables}){
  return await API.graphql<GraphQLResult<GetContributionsModelQuery>>({
    query: getContributionsModel,
    variables: contribution,
    authMode: 'API_KEY'
  })
}

export async function listContributions(contribution: { input: ListContributionsModelsQueryVariables}){
  return await API.graphql<GraphQLResult<ListContributionsModelsQuery>>({
    query: listContributionsModels,
    variables: contribution,
    authMode: 'API_KEY'
  })
}