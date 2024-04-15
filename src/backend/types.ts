import {
  FrameworkTag,
  SizeTag,
  LanguageTag,
  InterestTag,
  DevelopmentTag,
  CloudProviderTag,
  ExperienceTag,
  DifficultyTag, PostsModel
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
export type listRepoIssuesParameters = Endpoints['GET /repos/{owner}/{repo}/issues']['parameters']
export type listRepoIssuesResponse = Endpoints['GET /repos/{owner}/{repo}/issues']['response']
export type listRepoIssuesRequest = Endpoints['GET /repos/{owner}/{repo}/issues']['request']
