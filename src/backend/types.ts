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

export type preferenceTags = FrameworkTag | SizeTag | LanguageTag | InterestTag | DevelopmentTag | CloudProviderTag | ExperienceTag | DifficultyTag

export type enumBundle = {
  value: string
  enumMap: preferenceTags
}

export type PostsWImages = Omit<PostsModel, 'image_link'> & {
  image: File;
}
