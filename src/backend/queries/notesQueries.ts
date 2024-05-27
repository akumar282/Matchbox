import { API } from 'aws-amplify'
import {getContributorNotesModel} from '@graphql/queries'
import {
  GetContributorNotesModelQuery,
  ListContributorNotesModelsQuery,
  ListContributorNotesModelsQueryVariables,
  GetContributorNotesModelQueryVariables
} from '@api'
import { GraphQLQuery } from '@aws-amplify/api'
import {listNotesCustom} from '../../customQueries/queries'

export async function getContributorNotes(ContributorNotes: { input: GetContributorNotesModelQueryVariables}){
  return await API.graphql<GraphQLQuery<GetContributorNotesModelQuery>>({
    query: getContributorNotesModel,
    variables: ContributorNotes,
    authMode: 'API_KEY'
  })
}

export async function listContributorNotes(ContributorNotes: ListContributorNotesModelsQueryVariables){
  return await API.graphql<GraphQLQuery<ListContributorNotesModelsQuery>>({
    query: listNotesCustom,
    variables: ContributorNotes,
    authMode: 'API_KEY'
  })
}