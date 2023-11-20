import { 
  FrameworkTag,
  SizeTag,
  LanguageTag,
  InterestTag,
  DevelopmentTag,
  CloudProviderTag,
  ExperienceTag,
  DifficultyTag
} from '../API'

export type preferenceTags = FrameworkTag | SizeTag | LanguageTag | InterestTag | DevelopmentTag | CloudProviderTag | ExperienceTag | DifficultyTag

export type enumBundle = {
  value: string
  enumMap: preferenceTags
}
