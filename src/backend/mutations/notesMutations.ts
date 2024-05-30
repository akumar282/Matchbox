import { API } from 'aws-amplify'
import { createContributorNotesModel, deleteContributorNotesModel, updateContributorNotesModel } from '@graphql/mutations'
import {
  CreateContributorNotesModelInput,
  CreateContributorNotesModelMutation,
  DeleteContributorNotesModelInput,
  DeleteContributorNotesModelMutation,
  UpdateContributorNotesModelInput,
  UpdateContributorNotesModelMutation
} from '@api'
import { GraphQLQuery } from '@aws-amplify/api'

export async function createContributorNotes(ContributorNotes: { input: CreateContributorNotesModelInput}){
  return await API.graphql<GraphQLQuery<CreateContributorNotesModelMutation>>({
    query: createContributorNotesModel,
    variables: ContributorNotes,
    authMode: 'API_KEY'
  })
}

export async function deleteContributorNotes(ContributorNotes: { input: DeleteContributorNotesModelInput}) {
  return await API.graphql<GraphQLQuery<DeleteContributorNotesModelMutation>>({
    query: deleteContributorNotesModel,
    variables: ContributorNotes,
    authMode: 'API_KEY'
  })
}

export async function updateContributorNotes(ContributorNotes: { input: UpdateContributorNotesModelInput }) {
  return await API.graphql<GraphQLQuery<UpdateContributorNotesModelMutation>>({
    query: updateContributorNotesModel,
    variables: ContributorNotes,
    authMode: 'API_KEY'
  })
}