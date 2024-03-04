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
