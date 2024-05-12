import {
  FrameworkTag,
  SizeTag,
  LanguageTag,
  InterestTag,
  DevelopmentTag,
  CloudProviderTag,
  ExperienceTag,
  DifficultyTag, PostsModel, UsersModel
} from '@api'
import { CognitoUserSession } from 'amazon-cognito-identity-js'
import {Endpoints} from '@octokit/types'
import {components} from '@octokit/openapi-types'

export type preferenceTags = FrameworkTag | SizeTag | LanguageTag | InterestTag | DevelopmentTag | CloudProviderTag | ExperienceTag | DifficultyTag

export type enumBundle = {
  value: string
  enumMap: preferenceTags
}

export type PostsWImages = Omit<PostsModel, 'image_link'> & {
  image: File;
}

export interface userContextType {
  id: string,
  userName?: string,
  email?: string,
  new_user?: boolean,
  credibility_score?: number,
  profile_image?: string,
  authToken?: CognitoUserSession
}

export interface paginatedPostsVariables {
  id: string,
  nextToken: string
}

export type githubIssue = components['schemas']['issue']
export type githubContributors = components['schemas']['contributor']
export type githubPullRequest = components['schemas']['pull-request']
export type githubPullRequestSimple = components['schemas']['pull-request-simple']
export type githubRepoHealth = components['schemas']['community-profile']
export type githubHealthFiles = components['schemas']['community-profile']['files']
export type githubHealthPercentage = components['schemas']['community-profile']['health_percentage']

export type listRepoIssuesParameters = Endpoints['GET /repos/{owner}/{repo}/issues']['parameters']
export type listRepoIssuesResponse = Endpoints['GET /repos/{owner}/{repo}/issues']['response']
export type listRepoIssuesRequest = Endpoints['GET /repos/{owner}/{repo}/issues']['request']


export type ListUsersConvosQueryCustom = {
  listUsersConvos?:  {
    __typename: 'ModelUsersConvoConnection',
    items:  Array< {
      __typename: 'UsersConvo',
      id: string,
      usersModelID: string,
      conversationModelID: string,
      createdAt: string,
      updatedAt: string,
      usersModel: UsersModel,
    } | null >,
    nextToken?: string | null,
  } | null,
}