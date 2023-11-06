/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNewsletterEmailModelInput = {
  id?: string | null,
  email: string,
};

export type ModelNewsletterEmailModelConditionInput = {
  email?: ModelStringInput | null,
  and?: Array< ModelNewsletterEmailModelConditionInput | null > | null,
  or?: Array< ModelNewsletterEmailModelConditionInput | null > | null,
  not?: ModelNewsletterEmailModelConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type NewsletterEmailModel = {
  __typename: "NewsletterEmailModel",
  id: string,
  email: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNewsletterEmailModelInput = {
  id: string,
  email?: string | null,
};

export type DeleteNewsletterEmailModelInput = {
  id: string,
};

export type CreateUsersModelInput = {
  id?: string | null,
  user_name: string,
  email: string,
  password: string,
  profile_image?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  user_creation_date?: string | null,
  github_link?: string | null,
  saved_posts?: Array< string | null > | null,
  hide_posts?: Array< string | null > | null,
  lang_tag?: Array< LanguageTag | null > | null,
  dev_type_tag?: Array< DevelopmentTag | null > | null,
  interest_tag?: Array< InterestTag | null > | null,
  size_tag?: Array< SizeTag | null > | null,
  framework_tag?: Array< FrameworkTag | null > | null,
  difficulty_tag?: Array< DifficultyTag | null > | null,
  new_user?: boolean | null,
  credibility_score?: number | null,
  involved_projects?: Array< string | null > | null,
  experience_level?: Array< ExperienceTag | null > | null,
  years_of_experience?: number | null,
  user_type?: Array< AccountTag | null > | null,
};

export enum LanguageTag {
  C = "C",
  JAVA = "JAVA",
  PYTHON = "PYTHON",
  C_PLUS_PLUS = "C_PLUS_PLUS",
  CUDA = "CUDA",
  C_SHARP = "C_SHARP",
  JAVASCRIPT = "JAVASCRIPT",
  HTML = "HTML",
  CSS = "CSS",
  PHP = "PHP",
  VISUAL_BASIC_DOTNET = "VISUAL_BASIC_DOTNET",
  DOTNET = "DOTNET",
  R = "R",
  GO = "GO",
  SWIFT = "SWIFT",
  PERL = "PERL",
  X86_ASSEMBLY = "X86_ASSEMBLY",
  ARM_ASSEMBLY = "ARM_ASSEMBLY",
  RUBY = "RUBY",
  MATLAB = "MATLAB",
  VISUAL_BASIC = "VISUAL_BASIC",
  GROOVY = "GROOVY",
  OBJECTIVE_C = "OBJECTIVE_C",
  OBJECTIVE_C_PLUS_PLUS = "OBJECTIVE_C_PLUS_PLUS",
  RUST = "RUST",
  SAS = "SAS",
  SCRATCH = "SCRATCH",
  WEB_ASSEMBLY = "WEB_ASSEMBLY",
  D = "D",
  DART = "DART",
  PL_SQL = "PL_SQL",
  SQL = "SQL",
  DELHPI = "DELHPI",
  KOTLIN = "KOTLIN",
  OPENEDGE_ABL = "OPENEDGE_ABL",
  JULIA = "JULIA",
  SCALA = "SCALA",
  LUA = "LUA",
  FORTRAN = "FORTRAN",
  COBOL = "COBOL",
  HASKELL = "HASKELL",
  VISUAL_BASIC_SCRIPT = "VISUAL_BASIC_SCRIPT",
  TYPESCRIPT = "TYPESCRIPT",
  BASH = "BASH",
  SHELL = "SHELL",
  CLOJURE = "CLOJURE",
  COFFEESCRIPT = "COFFEESCRIPT",
  LISP = "LISP",
  CRYSTAL = "CRYSTAL",
  F_SHARP = "F_SHARP",
  POSTSCRIPT = "POSTSCRIPT",
  HANDLEBARS = "HANDLEBARS",
}


export enum DevelopmentTag {
  EMBEDDED_SYSTEMS = "EMBEDDED_SYSTEMS",
  FRONT_END = "FRONT_END",
  WEB = "WEB",
  GAME_DEVELOPMENT = "GAME_DEVELOPMENT",
  MOBILE_APP = "MOBILE_APP",
  COMPUTING = "COMPUTING",
  APPLICATION_PROGRAMMING = "APPLICATION_PROGRAMMING",
  DEVOPS = "DEVOPS",
  FULL_STACK = "FULL_STACK",
  BACKEND = "BACKEND",
  DATA_SCIENCE = "DATA_SCIENCE",
  CLOUD = "CLOUD",
  DATABASE = "DATABASE",
  CYBERSECURITY = "CYBERSECURITY",
}


export enum InterestTag {
  COMMUNICATION = "COMMUNICATION",
  ENVIRONMENT = "ENVIRONMENT",
  EDUCATION = "EDUCATION",
  ENTERTAINMENT = "ENTERTAINMENT",
  GAMING = "GAMING",
  HEALTHCARE = "HEALTHCARE",
  LIFESTYLE = "LIFESTYLE",
}


export enum SizeTag {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}


export enum FrameworkTag {
  DJANGO = "DJANGO",
  ANGULAR_JS = "ANGULAR_JS",
  JQUERY = "JQUERY",
  ASP_NET = "ASP_NET",
  GATSBY = "GATSBY",
  SVELTE = "SVELTE",
  YII = "YII",
  TURBOGEARS = "TURBOGEARS",
  YESOD = "YESOD",
  GROK = "GROK",
  MOJOLICIOUS = "MOJOLICIOUS",
  VAADIN = "VAADIN",
  RUBY_ON_RAILS = "RUBY_ON_RAILS",
  EXPRESS = "EXPRESS",
  JS = "JS",
  METEOR = "METEOR",
  CODEIGNITOR = "CODEIGNITOR",
  SYMFONY = "SYMFONY",
  APACHE_WICKET = "APACHE_WICKET",
  PHALCON = "PHALCON",
  BOOTSTRAP = "BOOTSTRAP",
  SILEX = "SILEX",
  FUELPHP = "FUELPHP",
  CHERRYPY = "CHERRYPY",
  QUIOXTE = "QUIOXTE",
  LARAVEL = "LARAVEL",
  FLASK = "FLASK",
  CAKEPHP = "CAKEPHP",
  NEXT_JS = "NEXT_JS",
  GRAILS = "GRAILS",
  SPARK = "SPARK",
  APACHE_STRUTS_1 = "APACHE_STRUTS_1",
  WEB2PY = "WEB2PY",
  APACHE_PLAY = "APACHE_PLAY",
}


export enum DifficultyTag {
  GOOD_FIRST_PROJECT = "GOOD_FIRST_PROJECT",
  EXPERIENCED_CONTRIBUTOR = "EXPERIENCED_CONTRIBUTOR",
  EXPERT = "EXPERT",
}


export enum ExperienceTag {
  BEGINNER = "BEGINNER",
  MINIMAL_EXPERIENCE = "MINIMAL_EXPERIENCE",
  EXPERIENCED_CONTRIBUTOR = "EXPERIENCED_CONTRIBUTOR",
  EXPERT = "EXPERT",
}


export enum AccountTag {
  DEVELOPER = "DEVELOPER",
  ORGANIZATION = "ORGANIZATION",
}


export type ModelUsersModelConditionInput = {
  user_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  profile_image?: ModelStringInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  user_creation_date?: ModelStringInput | null,
  github_link?: ModelStringInput | null,
  saved_posts?: ModelIDInput | null,
  hide_posts?: ModelIDInput | null,
  lang_tag?: ModelLanguageTagListInput | null,
  dev_type_tag?: ModelDevelopmentTagListInput | null,
  interest_tag?: ModelInterestTagListInput | null,
  size_tag?: ModelSizeTagListInput | null,
  framework_tag?: ModelFrameworkTagListInput | null,
  difficulty_tag?: ModelDifficultyTagListInput | null,
  new_user?: ModelBooleanInput | null,
  credibility_score?: ModelIntInput | null,
  involved_projects?: ModelIDInput | null,
  experience_level?: ModelExperienceTagListInput | null,
  years_of_experience?: ModelIntInput | null,
  user_type?: ModelAccountTagListInput | null,
  and?: Array< ModelUsersModelConditionInput | null > | null,
  or?: Array< ModelUsersModelConditionInput | null > | null,
  not?: ModelUsersModelConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelLanguageTagListInput = {
  eq?: Array< LanguageTag | null > | null,
  ne?: Array< LanguageTag | null > | null,
  contains?: LanguageTag | null,
  notContains?: LanguageTag | null,
};

export type ModelDevelopmentTagListInput = {
  eq?: Array< DevelopmentTag | null > | null,
  ne?: Array< DevelopmentTag | null > | null,
  contains?: DevelopmentTag | null,
  notContains?: DevelopmentTag | null,
};

export type ModelInterestTagListInput = {
  eq?: Array< InterestTag | null > | null,
  ne?: Array< InterestTag | null > | null,
  contains?: InterestTag | null,
  notContains?: InterestTag | null,
};

export type ModelSizeTagListInput = {
  eq?: Array< SizeTag | null > | null,
  ne?: Array< SizeTag | null > | null,
  contains?: SizeTag | null,
  notContains?: SizeTag | null,
};

export type ModelFrameworkTagListInput = {
  eq?: Array< FrameworkTag | null > | null,
  ne?: Array< FrameworkTag | null > | null,
  contains?: FrameworkTag | null,
  notContains?: FrameworkTag | null,
};

export type ModelDifficultyTagListInput = {
  eq?: Array< DifficultyTag | null > | null,
  ne?: Array< DifficultyTag | null > | null,
  contains?: DifficultyTag | null,
  notContains?: DifficultyTag | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelExperienceTagListInput = {
  eq?: Array< ExperienceTag | null > | null,
  ne?: Array< ExperienceTag | null > | null,
  contains?: ExperienceTag | null,
  notContains?: ExperienceTag | null,
};

export type ModelAccountTagListInput = {
  eq?: Array< AccountTag | null > | null,
  ne?: Array< AccountTag | null > | null,
  contains?: AccountTag | null,
  notContains?: AccountTag | null,
};

export type UsersModel = {
  __typename: "UsersModel",
  id: string,
  user_name: string,
  email: string,
  password: string,
  profile_image?: string | null,
  user_posts?: ModelPostsModelConnection | null,
  user_comments?: ModelCommentModelConnection | null,
  first_name?: string | null,
  last_name?: string | null,
  user_creation_date?: string | null,
  github_link?: string | null,
  saved_posts?: Array< string | null > | null,
  hide_posts?: Array< string | null > | null,
  messages?: ModelMessageModelConnection | null,
  conversations?: ModelUsersConvoConnection | null,
  lang_tag?: Array< LanguageTag | null > | null,
  dev_type_tag?: Array< DevelopmentTag | null > | null,
  interest_tag?: Array< InterestTag | null > | null,
  size_tag?: Array< SizeTag | null > | null,
  framework_tag?: Array< FrameworkTag | null > | null,
  difficulty_tag?: Array< DifficultyTag | null > | null,
  new_user?: boolean | null,
  contributions?: ModelContributionsModelConnection | null,
  credibility_score?: number | null,
  involved_projects?: Array< string | null > | null,
  experience_level?: Array< ExperienceTag | null > | null,
  years_of_experience?: number | null,
  user_type?: Array< AccountTag | null > | null,
  user_experiences?: ModelExperienceModelConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostsModelConnection = {
  __typename: "ModelPostsModelConnection",
  items:  Array<PostsModel | null >,
  nextToken?: string | null,
};

export type PostsModel = {
  __typename: "PostsModel",
  id: string,
  post_title: string,
  description?: string | null,
  long_description?: string | null,
  project_link?: string | null,
  image_link?: string | null,
  post_date?: string | null,
  userID: string,
  creator_name?: string | null,
  lang_tag?: Array< LanguageTag | null > | null,
  dev_type_tag?: Array< DevelopmentTag | null > | null,
  interest_tag?: Array< InterestTag | null > | null,
  size_tag?: Array< SizeTag | null > | null,
  framework_tag?: Array< FrameworkTag | null > | null,
  difficulty_tag?: Array< DifficultyTag | null > | null,
  post_comments?: ModelCommentModelConnection | null,
  contributor_limit?: number | null,
  contributors?: Array< string | null > | null,
  reported?: boolean | null,
  experience_level?: Array< ExperienceTag | null > | null,
  application?: boolean | null,
  project_chat: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentModelConnection = {
  __typename: "ModelCommentModelConnection",
  items:  Array<CommentModel | null >,
  nextToken?: string | null,
};

export type CommentModel = {
  __typename: "CommentModel",
  id: string,
  comment: string,
  profile_image?: string | null,
  comment_date?: string | null,
  parent_comment?: string | null,
  replies?: number | null,
  isReply?: boolean | null,
  postID: string,
  userID: string,
  user_name: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelMessageModelConnection = {
  __typename: "ModelMessageModelConnection",
  items:  Array<MessageModel | null >,
  nextToken?: string | null,
};

export type MessageModel = {
  __typename: "MessageModel",
  id: string,
  message: string,
  from: string,
  message_date?: string | null,
  conversationID: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelUsersConvoConnection = {
  __typename: "ModelUsersConvoConnection",
  items:  Array<UsersConvo | null >,
  nextToken?: string | null,
};

export type UsersConvo = {
  __typename: "UsersConvo",
  id: string,
  usersModelID: string,
  conversationModelID: string,
  usersModel: UsersModel,
  conversationModel: ConversationModel,
  createdAt: string,
  updatedAt: string,
};

export type ConversationModel = {
  __typename: "ConversationModel",
  id: string,
  users?: ModelUsersConvoConnection | null,
  title?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelContributionsModelConnection = {
  __typename: "ModelContributionsModelConnection",
  items:  Array<ContributionsModel | null >,
  nextToken?: string | null,
};

export type ContributionsModel = {
  __typename: "ContributionsModel",
  id: string,
  author: string,
  type?: Array< ContributionTag | null > | null,
  description?: string | null,
  link_to?: string | null,
  point_value?: number | null,
  createdAt: string,
  updatedAt: string,
};

export enum ContributionTag {
  PULL_REQUEST = "PULL_REQUEST",
  ISSUE = "ISSUE",
  COMMENT = "COMMENT",
  REVIEW = "REVIEW",
}


export type ModelExperienceModelConnection = {
  __typename: "ModelExperienceModelConnection",
  items:  Array<ExperienceModel | null >,
  nextToken?: string | null,
};

export type ExperienceModel = {
  __typename: "ExperienceModel",
  id: string,
  user_id: string,
  org_name: string,
  start_date: string,
  end_date?: string | null,
  description: string,
  lang_tag?: Array< LanguageTag | null > | null,
  dev_type_tag?: Array< DevelopmentTag | null > | null,
  framework_tag?: Array< FrameworkTag | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUsersModelInput = {
  id: string,
  user_name?: string | null,
  email?: string | null,
  password?: string | null,
  profile_image?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  user_creation_date?: string | null,
  github_link?: string | null,
  saved_posts?: Array< string | null > | null,
  hide_posts?: Array< string | null > | null,
  lang_tag?: Array< LanguageTag | null > | null,
  dev_type_tag?: Array< DevelopmentTag | null > | null,
  interest_tag?: Array< InterestTag | null > | null,
  size_tag?: Array< SizeTag | null > | null,
  framework_tag?: Array< FrameworkTag | null > | null,
  difficulty_tag?: Array< DifficultyTag | null > | null,
  new_user?: boolean | null,
  credibility_score?: number | null,
  involved_projects?: Array< string | null > | null,
  experience_level?: Array< ExperienceTag | null > | null,
  years_of_experience?: number | null,
  user_type?: Array< AccountTag | null > | null,
};

export type DeleteUsersModelInput = {
  id: string,
};

export type CreateContributionsModelInput = {
  id?: string | null,
  author: string,
  type?: Array< ContributionTag | null > | null,
  description?: string | null,
  link_to?: string | null,
  point_value?: number | null,
};

export type ModelContributionsModelConditionInput = {
  author?: ModelIDInput | null,
  type?: ModelContributionTagListInput | null,
  description?: ModelStringInput | null,
  link_to?: ModelStringInput | null,
  point_value?: ModelIntInput | null,
  and?: Array< ModelContributionsModelConditionInput | null > | null,
  or?: Array< ModelContributionsModelConditionInput | null > | null,
  not?: ModelContributionsModelConditionInput | null,
};

export type ModelContributionTagListInput = {
  eq?: Array< ContributionTag | null > | null,
  ne?: Array< ContributionTag | null > | null,
  contains?: ContributionTag | null,
  notContains?: ContributionTag | null,
};

export type UpdateContributionsModelInput = {
  id: string,
  author?: string | null,
  type?: Array< ContributionTag | null > | null,
  description?: string | null,
  link_to?: string | null,
  point_value?: number | null,
};

export type DeleteContributionsModelInput = {
  id: string,
};

export type CreateExperienceModelInput = {
  id?: string | null,
  user_id: string,
  org_name: string,
  start_date: string,
  end_date?: string | null,
  description: string,
  lang_tag?: Array< LanguageTag | null > | null,
  dev_type_tag?: Array< DevelopmentTag | null > | null,
  framework_tag?: Array< FrameworkTag | null > | null,
};

export type ModelExperienceModelConditionInput = {
  user_id?: ModelIDInput | null,
  org_name?: ModelStringInput | null,
  start_date?: ModelStringInput | null,
  end_date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  lang_tag?: ModelLanguageTagListInput | null,
  dev_type_tag?: ModelDevelopmentTagListInput | null,
  framework_tag?: ModelFrameworkTagListInput | null,
  and?: Array< ModelExperienceModelConditionInput | null > | null,
  or?: Array< ModelExperienceModelConditionInput | null > | null,
  not?: ModelExperienceModelConditionInput | null,
};

export type UpdateExperienceModelInput = {
  id: string,
  user_id?: string | null,
  org_name?: string | null,
  start_date?: string | null,
  end_date?: string | null,
  description?: string | null,
  lang_tag?: Array< LanguageTag | null > | null,
  dev_type_tag?: Array< DevelopmentTag | null > | null,
  framework_tag?: Array< FrameworkTag | null > | null,
};

export type DeleteExperienceModelInput = {
  id: string,
};

export type CreatePostsModelInput = {
  id?: string | null,
  post_title: string,
  description?: string | null,
  long_description?: string | null,
  project_link?: string | null,
  image_link?: string | null,
  post_date?: string | null,
  userID: string,
  creator_name?: string | null,
  lang_tag?: Array< LanguageTag | null > | null,
  dev_type_tag?: Array< DevelopmentTag | null > | null,
  interest_tag?: Array< InterestTag | null > | null,
  size_tag?: Array< SizeTag | null > | null,
  framework_tag?: Array< FrameworkTag | null > | null,
  difficulty_tag?: Array< DifficultyTag | null > | null,
  contributor_limit?: number | null,
  contributors?: Array< string | null > | null,
  reported?: boolean | null,
  experience_level?: Array< ExperienceTag | null > | null,
  application?: boolean | null,
  project_chat: string,
};

export type ModelPostsModelConditionInput = {
  post_title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  long_description?: ModelStringInput | null,
  project_link?: ModelStringInput | null,
  image_link?: ModelStringInput | null,
  post_date?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  creator_name?: ModelStringInput | null,
  lang_tag?: ModelLanguageTagListInput | null,
  dev_type_tag?: ModelDevelopmentTagListInput | null,
  interest_tag?: ModelInterestTagListInput | null,
  size_tag?: ModelSizeTagListInput | null,
  framework_tag?: ModelFrameworkTagListInput | null,
  difficulty_tag?: ModelDifficultyTagListInput | null,
  contributor_limit?: ModelIntInput | null,
  contributors?: ModelIDInput | null,
  reported?: ModelBooleanInput | null,
  experience_level?: ModelExperienceTagListInput | null,
  application?: ModelBooleanInput | null,
  project_chat?: ModelIDInput | null,
  and?: Array< ModelPostsModelConditionInput | null > | null,
  or?: Array< ModelPostsModelConditionInput | null > | null,
  not?: ModelPostsModelConditionInput | null,
};

export type UpdatePostsModelInput = {
  id: string,
  post_title?: string | null,
  description?: string | null,
  long_description?: string | null,
  project_link?: string | null,
  image_link?: string | null,
  post_date?: string | null,
  userID?: string | null,
  creator_name?: string | null,
  lang_tag?: Array< LanguageTag | null > | null,
  dev_type_tag?: Array< DevelopmentTag | null > | null,
  interest_tag?: Array< InterestTag | null > | null,
  size_tag?: Array< SizeTag | null > | null,
  framework_tag?: Array< FrameworkTag | null > | null,
  difficulty_tag?: Array< DifficultyTag | null > | null,
  contributor_limit?: number | null,
  contributors?: Array< string | null > | null,
  reported?: boolean | null,
  experience_level?: Array< ExperienceTag | null > | null,
  application?: boolean | null,
  project_chat?: string | null,
};

export type DeletePostsModelInput = {
  id: string,
};

export type CreateConversationModelInput = {
  id?: string | null,
  title?: string | null,
};

export type ModelConversationModelConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelConversationModelConditionInput | null > | null,
  or?: Array< ModelConversationModelConditionInput | null > | null,
  not?: ModelConversationModelConditionInput | null,
};

export type UpdateConversationModelInput = {
  id: string,
  title?: string | null,
};

export type DeleteConversationModelInput = {
  id: string,
};

export type CreateMessageModelInput = {
  id?: string | null,
  message: string,
  from: string,
  message_date?: string | null,
  conversationID: string,
};

export type ModelMessageModelConditionInput = {
  message?: ModelStringInput | null,
  from?: ModelIDInput | null,
  message_date?: ModelStringInput | null,
  conversationID?: ModelIDInput | null,
  and?: Array< ModelMessageModelConditionInput | null > | null,
  or?: Array< ModelMessageModelConditionInput | null > | null,
  not?: ModelMessageModelConditionInput | null,
};

export type UpdateMessageModelInput = {
  id: string,
  message?: string | null,
  from?: string | null,
  message_date?: string | null,
  conversationID?: string | null,
};

export type DeleteMessageModelInput = {
  id: string,
};

export type CreateCommentModelInput = {
  id?: string | null,
  comment: string,
  profile_image?: string | null,
  comment_date?: string | null,
  parent_comment?: string | null,
  replies?: number | null,
  isReply?: boolean | null,
  postID: string,
  userID: string,
  user_name: string,
};

export type ModelCommentModelConditionInput = {
  comment?: ModelStringInput | null,
  profile_image?: ModelStringInput | null,
  comment_date?: ModelStringInput | null,
  parent_comment?: ModelIDInput | null,
  replies?: ModelIntInput | null,
  isReply?: ModelBooleanInput | null,
  postID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  user_name?: ModelStringInput | null,
  and?: Array< ModelCommentModelConditionInput | null > | null,
  or?: Array< ModelCommentModelConditionInput | null > | null,
  not?: ModelCommentModelConditionInput | null,
};

export type UpdateCommentModelInput = {
  id: string,
  comment?: string | null,
  profile_image?: string | null,
  comment_date?: string | null,
  parent_comment?: string | null,
  replies?: number | null,
  isReply?: boolean | null,
  postID?: string | null,
  userID?: string | null,
  user_name?: string | null,
};

export type DeleteCommentModelInput = {
  id: string,
};

export type CreateUsersConvoInput = {
  id?: string | null,
  usersModelID: string,
  conversationModelID: string,
};

export type ModelUsersConvoConditionInput = {
  usersModelID?: ModelIDInput | null,
  conversationModelID?: ModelIDInput | null,
  and?: Array< ModelUsersConvoConditionInput | null > | null,
  or?: Array< ModelUsersConvoConditionInput | null > | null,
  not?: ModelUsersConvoConditionInput | null,
};

export type UpdateUsersConvoInput = {
  id: string,
  usersModelID?: string | null,
  conversationModelID?: string | null,
};

export type DeleteUsersConvoInput = {
  id: string,
};

export type ModelNewsletterEmailModelFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelNewsletterEmailModelFilterInput | null > | null,
  or?: Array< ModelNewsletterEmailModelFilterInput | null > | null,
  not?: ModelNewsletterEmailModelFilterInput | null,
};

export type ModelNewsletterEmailModelConnection = {
  __typename: "ModelNewsletterEmailModelConnection",
  items:  Array<NewsletterEmailModel | null >,
  nextToken?: string | null,
};

export type SearchableNewsletterEmailModelFilterInput = {
  id?: SearchableIDFilterInput | null,
  email?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableNewsletterEmailModelFilterInput | null > | null,
  or?: Array< SearchableNewsletterEmailModelFilterInput | null > | null,
  not?: SearchableNewsletterEmailModelFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableNewsletterEmailModelSortInput = {
  field?: SearchableNewsletterEmailModelSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableNewsletterEmailModelSortableFields {
  id = "id",
  email = "email",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableNewsletterEmailModelAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableNewsletterEmailModelAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableNewsletterEmailModelAggregateField {
  id = "id",
  email = "email",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableNewsletterEmailModelConnection = {
  __typename: "SearchableNewsletterEmailModelConnection",
  items:  Array<NewsletterEmailModel | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type ModelUsersModelFilterInput = {
  id?: ModelIDInput | null,
  user_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  profile_image?: ModelStringInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  user_creation_date?: ModelStringInput | null,
  github_link?: ModelStringInput | null,
  saved_posts?: ModelIDInput | null,
  hide_posts?: ModelIDInput | null,
  lang_tag?: ModelLanguageTagListInput | null,
  dev_type_tag?: ModelDevelopmentTagListInput | null,
  interest_tag?: ModelInterestTagListInput | null,
  size_tag?: ModelSizeTagListInput | null,
  framework_tag?: ModelFrameworkTagListInput | null,
  difficulty_tag?: ModelDifficultyTagListInput | null,
  new_user?: ModelBooleanInput | null,
  credibility_score?: ModelIntInput | null,
  involved_projects?: ModelIDInput | null,
  experience_level?: ModelExperienceTagListInput | null,
  years_of_experience?: ModelIntInput | null,
  user_type?: ModelAccountTagListInput | null,
  and?: Array< ModelUsersModelFilterInput | null > | null,
  or?: Array< ModelUsersModelFilterInput | null > | null,
  not?: ModelUsersModelFilterInput | null,
};

export type ModelUsersModelConnection = {
  __typename: "ModelUsersModelConnection",
  items:  Array<UsersModel | null >,
  nextToken?: string | null,
};

export type SearchableUsersModelFilterInput = {
  id?: SearchableIDFilterInput | null,
  user_name?: SearchableStringFilterInput | null,
  email?: SearchableStringFilterInput | null,
  password?: SearchableStringFilterInput | null,
  profile_image?: SearchableStringFilterInput | null,
  first_name?: SearchableStringFilterInput | null,
  last_name?: SearchableStringFilterInput | null,
  user_creation_date?: SearchableStringFilterInput | null,
  github_link?: SearchableStringFilterInput | null,
  saved_posts?: SearchableIDFilterInput | null,
  hide_posts?: SearchableIDFilterInput | null,
  new_user?: SearchableBooleanFilterInput | null,
  credibility_score?: SearchableIntFilterInput | null,
  involved_projects?: SearchableIDFilterInput | null,
  years_of_experience?: SearchableIntFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  lang_tag?: SearchableStringFilterInput | null,
  dev_type_tag?: SearchableStringFilterInput | null,
  interest_tag?: SearchableStringFilterInput | null,
  size_tag?: SearchableStringFilterInput | null,
  framework_tag?: SearchableStringFilterInput | null,
  difficulty_tag?: SearchableStringFilterInput | null,
  experience_level?: SearchableStringFilterInput | null,
  user_type?: SearchableStringFilterInput | null,
  and?: Array< SearchableUsersModelFilterInput | null > | null,
  or?: Array< SearchableUsersModelFilterInput | null > | null,
  not?: SearchableUsersModelFilterInput | null,
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableUsersModelSortInput = {
  field?: SearchableUsersModelSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableUsersModelSortableFields {
  id = "id",
  user_name = "user_name",
  email = "email",
  password = "password",
  profile_image = "profile_image",
  first_name = "first_name",
  last_name = "last_name",
  user_creation_date = "user_creation_date",
  github_link = "github_link",
  saved_posts = "saved_posts",
  hide_posts = "hide_posts",
  new_user = "new_user",
  credibility_score = "credibility_score",
  involved_projects = "involved_projects",
  years_of_experience = "years_of_experience",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableUsersModelAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableUsersModelAggregateField,
};

export enum SearchableUsersModelAggregateField {
  id = "id",
  user_name = "user_name",
  email = "email",
  password = "password",
  profile_image = "profile_image",
  first_name = "first_name",
  last_name = "last_name",
  user_creation_date = "user_creation_date",
  github_link = "github_link",
  saved_posts = "saved_posts",
  hide_posts = "hide_posts",
  lang_tag = "lang_tag",
  dev_type_tag = "dev_type_tag",
  interest_tag = "interest_tag",
  size_tag = "size_tag",
  framework_tag = "framework_tag",
  difficulty_tag = "difficulty_tag",
  new_user = "new_user",
  credibility_score = "credibility_score",
  involved_projects = "involved_projects",
  experience_level = "experience_level",
  years_of_experience = "years_of_experience",
  user_type = "user_type",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableUsersModelConnection = {
  __typename: "SearchableUsersModelConnection",
  items:  Array<UsersModel | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type ModelContributionsModelFilterInput = {
  id?: ModelIDInput | null,
  author?: ModelIDInput | null,
  type?: ModelContributionTagListInput | null,
  description?: ModelStringInput | null,
  link_to?: ModelStringInput | null,
  point_value?: ModelIntInput | null,
  and?: Array< ModelContributionsModelFilterInput | null > | null,
  or?: Array< ModelContributionsModelFilterInput | null > | null,
  not?: ModelContributionsModelFilterInput | null,
};

export type SearchableContributionsModelFilterInput = {
  id?: SearchableIDFilterInput | null,
  author?: SearchableIDFilterInput | null,
  description?: SearchableStringFilterInput | null,
  link_to?: SearchableStringFilterInput | null,
  point_value?: SearchableIntFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  type?: SearchableStringFilterInput | null,
  and?: Array< SearchableContributionsModelFilterInput | null > | null,
  or?: Array< SearchableContributionsModelFilterInput | null > | null,
  not?: SearchableContributionsModelFilterInput | null,
};

export type SearchableContributionsModelSortInput = {
  field?: SearchableContributionsModelSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableContributionsModelSortableFields {
  id = "id",
  author = "author",
  description = "description",
  link_to = "link_to",
  point_value = "point_value",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableContributionsModelAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableContributionsModelAggregateField,
};

export enum SearchableContributionsModelAggregateField {
  id = "id",
  author = "author",
  type = "type",
  description = "description",
  link_to = "link_to",
  point_value = "point_value",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableContributionsModelConnection = {
  __typename: "SearchableContributionsModelConnection",
  items:  Array<ContributionsModel | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type ModelExperienceModelFilterInput = {
  id?: ModelIDInput | null,
  user_id?: ModelIDInput | null,
  org_name?: ModelStringInput | null,
  start_date?: ModelStringInput | null,
  end_date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  lang_tag?: ModelLanguageTagListInput | null,
  dev_type_tag?: ModelDevelopmentTagListInput | null,
  framework_tag?: ModelFrameworkTagListInput | null,
  and?: Array< ModelExperienceModelFilterInput | null > | null,
  or?: Array< ModelExperienceModelFilterInput | null > | null,
  not?: ModelExperienceModelFilterInput | null,
};

export type SearchableExperienceModelFilterInput = {
  id?: SearchableIDFilterInput | null,
  user_id?: SearchableIDFilterInput | null,
  org_name?: SearchableStringFilterInput | null,
  start_date?: SearchableStringFilterInput | null,
  end_date?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  lang_tag?: SearchableStringFilterInput | null,
  dev_type_tag?: SearchableStringFilterInput | null,
  framework_tag?: SearchableStringFilterInput | null,
  and?: Array< SearchableExperienceModelFilterInput | null > | null,
  or?: Array< SearchableExperienceModelFilterInput | null > | null,
  not?: SearchableExperienceModelFilterInput | null,
};

export type SearchableExperienceModelSortInput = {
  field?: SearchableExperienceModelSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableExperienceModelSortableFields {
  id = "id",
  user_id = "user_id",
  org_name = "org_name",
  start_date = "start_date",
  end_date = "end_date",
  description = "description",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableExperienceModelAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableExperienceModelAggregateField,
};

export enum SearchableExperienceModelAggregateField {
  id = "id",
  user_id = "user_id",
  org_name = "org_name",
  start_date = "start_date",
  end_date = "end_date",
  description = "description",
  lang_tag = "lang_tag",
  dev_type_tag = "dev_type_tag",
  framework_tag = "framework_tag",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableExperienceModelConnection = {
  __typename: "SearchableExperienceModelConnection",
  items:  Array<ExperienceModel | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type ModelPostsModelFilterInput = {
  id?: ModelIDInput | null,
  post_title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  long_description?: ModelStringInput | null,
  project_link?: ModelStringInput | null,
  image_link?: ModelStringInput | null,
  post_date?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  creator_name?: ModelStringInput | null,
  lang_tag?: ModelLanguageTagListInput | null,
  dev_type_tag?: ModelDevelopmentTagListInput | null,
  interest_tag?: ModelInterestTagListInput | null,
  size_tag?: ModelSizeTagListInput | null,
  framework_tag?: ModelFrameworkTagListInput | null,
  difficulty_tag?: ModelDifficultyTagListInput | null,
  contributor_limit?: ModelIntInput | null,
  contributors?: ModelIDInput | null,
  reported?: ModelBooleanInput | null,
  experience_level?: ModelExperienceTagListInput | null,
  application?: ModelBooleanInput | null,
  project_chat?: ModelIDInput | null,
  and?: Array< ModelPostsModelFilterInput | null > | null,
  or?: Array< ModelPostsModelFilterInput | null > | null,
  not?: ModelPostsModelFilterInput | null,
};

export type SearchablePostsModelFilterInput = {
  id?: SearchableIDFilterInput | null,
  post_title?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  long_description?: SearchableStringFilterInput | null,
  project_link?: SearchableStringFilterInput | null,
  image_link?: SearchableStringFilterInput | null,
  post_date?: SearchableStringFilterInput | null,
  userID?: SearchableIDFilterInput | null,
  creator_name?: SearchableStringFilterInput | null,
  contributor_limit?: SearchableIntFilterInput | null,
  contributors?: SearchableIDFilterInput | null,
  reported?: SearchableBooleanFilterInput | null,
  application?: SearchableBooleanFilterInput | null,
  project_chat?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  lang_tag?: SearchableStringFilterInput | null,
  dev_type_tag?: SearchableStringFilterInput | null,
  interest_tag?: SearchableStringFilterInput | null,
  size_tag?: SearchableStringFilterInput | null,
  framework_tag?: SearchableStringFilterInput | null,
  difficulty_tag?: SearchableStringFilterInput | null,
  experience_level?: SearchableStringFilterInput | null,
  and?: Array< SearchablePostsModelFilterInput | null > | null,
  or?: Array< SearchablePostsModelFilterInput | null > | null,
  not?: SearchablePostsModelFilterInput | null,
};

export type SearchablePostsModelSortInput = {
  field?: SearchablePostsModelSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePostsModelSortableFields {
  id = "id",
  post_title = "post_title",
  description = "description",
  long_description = "long_description",
  project_link = "project_link",
  image_link = "image_link",
  post_date = "post_date",
  userID = "userID",
  creator_name = "creator_name",
  contributor_limit = "contributor_limit",
  contributors = "contributors",
  reported = "reported",
  application = "application",
  project_chat = "project_chat",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePostsModelAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePostsModelAggregateField,
};

export enum SearchablePostsModelAggregateField {
  id = "id",
  post_title = "post_title",
  description = "description",
  long_description = "long_description",
  project_link = "project_link",
  image_link = "image_link",
  post_date = "post_date",
  userID = "userID",
  creator_name = "creator_name",
  lang_tag = "lang_tag",
  dev_type_tag = "dev_type_tag",
  interest_tag = "interest_tag",
  size_tag = "size_tag",
  framework_tag = "framework_tag",
  difficulty_tag = "difficulty_tag",
  contributor_limit = "contributor_limit",
  contributors = "contributors",
  reported = "reported",
  experience_level = "experience_level",
  application = "application",
  project_chat = "project_chat",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePostsModelConnection = {
  __typename: "SearchablePostsModelConnection",
  items:  Array<PostsModel | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type ModelConversationModelFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelConversationModelFilterInput | null > | null,
  or?: Array< ModelConversationModelFilterInput | null > | null,
  not?: ModelConversationModelFilterInput | null,
};

export type ModelConversationModelConnection = {
  __typename: "ModelConversationModelConnection",
  items:  Array<ConversationModel | null >,
  nextToken?: string | null,
};

export type SearchableConversationModelFilterInput = {
  id?: SearchableIDFilterInput | null,
  title?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableConversationModelFilterInput | null > | null,
  or?: Array< SearchableConversationModelFilterInput | null > | null,
  not?: SearchableConversationModelFilterInput | null,
};

export type SearchableConversationModelSortInput = {
  field?: SearchableConversationModelSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableConversationModelSortableFields {
  id = "id",
  title = "title",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableConversationModelAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableConversationModelAggregateField,
};

export enum SearchableConversationModelAggregateField {
  id = "id",
  title = "title",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableConversationModelConnection = {
  __typename: "SearchableConversationModelConnection",
  items:  Array<ConversationModel | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type ModelMessageModelFilterInput = {
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  from?: ModelIDInput | null,
  message_date?: ModelStringInput | null,
  conversationID?: ModelIDInput | null,
  and?: Array< ModelMessageModelFilterInput | null > | null,
  or?: Array< ModelMessageModelFilterInput | null > | null,
  not?: ModelMessageModelFilterInput | null,
};

export type SearchableMessageModelFilterInput = {
  id?: SearchableIDFilterInput | null,
  message?: SearchableStringFilterInput | null,
  from?: SearchableIDFilterInput | null,
  message_date?: SearchableStringFilterInput | null,
  conversationID?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableMessageModelFilterInput | null > | null,
  or?: Array< SearchableMessageModelFilterInput | null > | null,
  not?: SearchableMessageModelFilterInput | null,
};

export type SearchableMessageModelSortInput = {
  field?: SearchableMessageModelSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableMessageModelSortableFields {
  id = "id",
  message = "message",
  from = "from",
  message_date = "message_date",
  conversationID = "conversationID",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableMessageModelAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableMessageModelAggregateField,
};

export enum SearchableMessageModelAggregateField {
  id = "id",
  message = "message",
  from = "from",
  message_date = "message_date",
  conversationID = "conversationID",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableMessageModelConnection = {
  __typename: "SearchableMessageModelConnection",
  items:  Array<MessageModel | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type ModelCommentModelFilterInput = {
  id?: ModelIDInput | null,
  comment?: ModelStringInput | null,
  profile_image?: ModelStringInput | null,
  comment_date?: ModelStringInput | null,
  parent_comment?: ModelIDInput | null,
  replies?: ModelIntInput | null,
  isReply?: ModelBooleanInput | null,
  postID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  user_name?: ModelStringInput | null,
  and?: Array< ModelCommentModelFilterInput | null > | null,
  or?: Array< ModelCommentModelFilterInput | null > | null,
  not?: ModelCommentModelFilterInput | null,
};

export type SearchableCommentModelFilterInput = {
  id?: SearchableIDFilterInput | null,
  comment?: SearchableStringFilterInput | null,
  profile_image?: SearchableStringFilterInput | null,
  comment_date?: SearchableStringFilterInput | null,
  parent_comment?: SearchableIDFilterInput | null,
  replies?: SearchableIntFilterInput | null,
  isReply?: SearchableBooleanFilterInput | null,
  postID?: SearchableIDFilterInput | null,
  userID?: SearchableIDFilterInput | null,
  user_name?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableCommentModelFilterInput | null > | null,
  or?: Array< SearchableCommentModelFilterInput | null > | null,
  not?: SearchableCommentModelFilterInput | null,
};

export type SearchableCommentModelSortInput = {
  field?: SearchableCommentModelSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableCommentModelSortableFields {
  id = "id",
  comment = "comment",
  profile_image = "profile_image",
  comment_date = "comment_date",
  parent_comment = "parent_comment",
  replies = "replies",
  isReply = "isReply",
  postID = "postID",
  userID = "userID",
  user_name = "user_name",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableCommentModelAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableCommentModelAggregateField,
};

export enum SearchableCommentModelAggregateField {
  id = "id",
  comment = "comment",
  profile_image = "profile_image",
  comment_date = "comment_date",
  parent_comment = "parent_comment",
  replies = "replies",
  isReply = "isReply",
  postID = "postID",
  userID = "userID",
  user_name = "user_name",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableCommentModelConnection = {
  __typename: "SearchableCommentModelConnection",
  items:  Array<CommentModel | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type ModelUsersConvoFilterInput = {
  id?: ModelIDInput | null,
  usersModelID?: ModelIDInput | null,
  conversationModelID?: ModelIDInput | null,
  and?: Array< ModelUsersConvoFilterInput | null > | null,
  or?: Array< ModelUsersConvoFilterInput | null > | null,
  not?: ModelUsersConvoFilterInput | null,
};

export type ModelSubscriptionNewsletterEmailModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNewsletterEmailModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionNewsletterEmailModelFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUsersModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  user_name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  profile_image?: ModelSubscriptionStringInput | null,
  first_name?: ModelSubscriptionStringInput | null,
  last_name?: ModelSubscriptionStringInput | null,
  user_creation_date?: ModelSubscriptionStringInput | null,
  github_link?: ModelSubscriptionStringInput | null,
  saved_posts?: ModelSubscriptionIDInput | null,
  hide_posts?: ModelSubscriptionIDInput | null,
  lang_tag?: ModelSubscriptionStringInput | null,
  dev_type_tag?: ModelSubscriptionStringInput | null,
  interest_tag?: ModelSubscriptionStringInput | null,
  size_tag?: ModelSubscriptionStringInput | null,
  framework_tag?: ModelSubscriptionStringInput | null,
  difficulty_tag?: ModelSubscriptionStringInput | null,
  new_user?: ModelSubscriptionBooleanInput | null,
  credibility_score?: ModelSubscriptionIntInput | null,
  involved_projects?: ModelSubscriptionIDInput | null,
  experience_level?: ModelSubscriptionStringInput | null,
  years_of_experience?: ModelSubscriptionIntInput | null,
  user_type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUsersModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionUsersModelFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionContributionsModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  author?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  link_to?: ModelSubscriptionStringInput | null,
  point_value?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionContributionsModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionContributionsModelFilterInput | null > | null,
};

export type ModelSubscriptionExperienceModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  org_name?: ModelSubscriptionStringInput | null,
  start_date?: ModelSubscriptionStringInput | null,
  end_date?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  lang_tag?: ModelSubscriptionStringInput | null,
  dev_type_tag?: ModelSubscriptionStringInput | null,
  framework_tag?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExperienceModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionExperienceModelFilterInput | null > | null,
};

export type ModelSubscriptionPostsModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  post_title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  long_description?: ModelSubscriptionStringInput | null,
  project_link?: ModelSubscriptionStringInput | null,
  image_link?: ModelSubscriptionStringInput | null,
  post_date?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  creator_name?: ModelSubscriptionStringInput | null,
  lang_tag?: ModelSubscriptionStringInput | null,
  dev_type_tag?: ModelSubscriptionStringInput | null,
  interest_tag?: ModelSubscriptionStringInput | null,
  size_tag?: ModelSubscriptionStringInput | null,
  framework_tag?: ModelSubscriptionStringInput | null,
  difficulty_tag?: ModelSubscriptionStringInput | null,
  contributor_limit?: ModelSubscriptionIntInput | null,
  contributors?: ModelSubscriptionIDInput | null,
  reported?: ModelSubscriptionBooleanInput | null,
  experience_level?: ModelSubscriptionStringInput | null,
  application?: ModelSubscriptionBooleanInput | null,
  project_chat?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPostsModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostsModelFilterInput | null > | null,
};

export type ModelSubscriptionConversationModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionConversationModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionConversationModelFilterInput | null > | null,
};

export type ModelSubscriptionMessageModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  from?: ModelSubscriptionIDInput | null,
  message_date?: ModelSubscriptionStringInput | null,
  conversationID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMessageModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageModelFilterInput | null > | null,
};

export type ModelSubscriptionCommentModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  comment?: ModelSubscriptionStringInput | null,
  profile_image?: ModelSubscriptionStringInput | null,
  comment_date?: ModelSubscriptionStringInput | null,
  parent_comment?: ModelSubscriptionIDInput | null,
  replies?: ModelSubscriptionIntInput | null,
  isReply?: ModelSubscriptionBooleanInput | null,
  postID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  user_name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommentModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentModelFilterInput | null > | null,
};

export type ModelSubscriptionUsersConvoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  usersModelID?: ModelSubscriptionIDInput | null,
  conversationModelID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUsersConvoFilterInput | null > | null,
  or?: Array< ModelSubscriptionUsersConvoFilterInput | null > | null,
};

export type CreateNewsletterEmailModelMutationVariables = {
  input: CreateNewsletterEmailModelInput,
  condition?: ModelNewsletterEmailModelConditionInput | null,
};

export type CreateNewsletterEmailModelMutation = {
  createNewsletterEmailModel?:  {
    __typename: "NewsletterEmailModel",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNewsletterEmailModelMutationVariables = {
  input: UpdateNewsletterEmailModelInput,
  condition?: ModelNewsletterEmailModelConditionInput | null,
};

export type UpdateNewsletterEmailModelMutation = {
  updateNewsletterEmailModel?:  {
    __typename: "NewsletterEmailModel",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNewsletterEmailModelMutationVariables = {
  input: DeleteNewsletterEmailModelInput,
  condition?: ModelNewsletterEmailModelConditionInput | null,
};

export type DeleteNewsletterEmailModelMutation = {
  deleteNewsletterEmailModel?:  {
    __typename: "NewsletterEmailModel",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUsersModelMutationVariables = {
  input: CreateUsersModelInput,
  condition?: ModelUsersModelConditionInput | null,
};

export type CreateUsersModelMutation = {
  createUsersModel?:  {
    __typename: "UsersModel",
    id: string,
    user_name: string,
    email: string,
    password: string,
    profile_image?: string | null,
    user_posts?:  {
      __typename: "ModelPostsModelConnection",
      items:  Array< {
        __typename: "PostsModel",
        id: string,
        post_title: string,
        description?: string | null,
        long_description?: string | null,
        project_link?: string | null,
        image_link?: string | null,
        post_date?: string | null,
        userID: string,
        creator_name?: string | null,
        lang_tag?: Array< LanguageTag | null > | null,
        dev_type_tag?: Array< DevelopmentTag | null > | null,
        interest_tag?: Array< InterestTag | null > | null,
        size_tag?: Array< SizeTag | null > | null,
        framework_tag?: Array< FrameworkTag | null > | null,
        difficulty_tag?: Array< DifficultyTag | null > | null,
        contributor_limit?: number | null,
        contributors?: Array< string | null > | null,
        reported?: boolean | null,
        experience_level?: Array< ExperienceTag | null > | null,
        application?: boolean | null,
        project_chat: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    user_comments?:  {
      __typename: "ModelCommentModelConnection",
      items:  Array< {
        __typename: "CommentModel",
        id: string,
        comment: string,
        profile_image?: string | null,
        comment_date?: string | null,
        parent_comment?: string | null,
        replies?: number | null,
        isReply?: boolean | null,
        postID: string,
        userID: string,
        user_name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    github_link?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageModelConnection",
      items:  Array< {
        __typename: "MessageModel",
        id: string,
        message: string,
        from: string,
        message_date?: string | null,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelUsersConvoConnection",
      items:  Array< {
        __typename: "UsersConvo",
        id: string,
        usersModelID: string,
        conversationModelID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    difficulty_tag?: Array< DifficultyTag | null > | null,
    new_user?: boolean | null,
    contributions?:  {
      __typename: "ModelContributionsModelConnection",
      items:  Array< {
        __typename: "ContributionsModel",
        id: string,
        author: string,
        type?: Array< ContributionTag | null > | null,
        description?: string | null,
        link_to?: string | null,
        point_value?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    credibility_score?: number | null,
    involved_projects?: Array< string | null > | null,
    experience_level?: Array< ExperienceTag | null > | null,
    years_of_experience?: number | null,
    user_type?: Array< AccountTag | null > | null,
    user_experiences?:  {
      __typename: "ModelExperienceModelConnection",
      items:  Array< {
        __typename: "ExperienceModel",
        id: string,
        user_id: string,
        org_name: string,
        start_date: string,
        end_date?: string | null,
        description: string,
        lang_tag?: Array< LanguageTag | null > | null,
        dev_type_tag?: Array< DevelopmentTag | null > | null,
        framework_tag?: Array< FrameworkTag | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUsersModelMutationVariables = {
  input: UpdateUsersModelInput,
  condition?: ModelUsersModelConditionInput | null,
};

export type UpdateUsersModelMutation = {
  updateUsersModel?:  {
    __typename: "UsersModel",
    id: string,
    user_name: string,
    email: string,
    password: string,
    profile_image?: string | null,
    user_posts?:  {
      __typename: "ModelPostsModelConnection",
      items:  Array< {
        __typename: "PostsModel",
        id: string,
        post_title: string,
        description?: string | null,
        long_description?: string | null,
        project_link?: string | null,
        image_link?: string | null,
        post_date?: string | null,
        userID: string,
        creator_name?: string | null,
        lang_tag?: Array< LanguageTag | null > | null,
        dev_type_tag?: Array< DevelopmentTag | null > | null,
        interest_tag?: Array< InterestTag | null > | null,
        size_tag?: Array< SizeTag | null > | null,
        framework_tag?: Array< FrameworkTag | null > | null,
        difficulty_tag?: Array< DifficultyTag | null > | null,
        contributor_limit?: number | null,
        contributors?: Array< string | null > | null,
        reported?: boolean | null,
        experience_level?: Array< ExperienceTag | null > | null,
        application?: boolean | null,
        project_chat: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    user_comments?:  {
      __typename: "ModelCommentModelConnection",
      items:  Array< {
        __typename: "CommentModel",
        id: string,
        comment: string,
        profile_image?: string | null,
        comment_date?: string | null,
        parent_comment?: string | null,
        replies?: number | null,
        isReply?: boolean | null,
        postID: string,
        userID: string,
        user_name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    github_link?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageModelConnection",
      items:  Array< {
        __typename: "MessageModel",
        id: string,
        message: string,
        from: string,
        message_date?: string | null,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelUsersConvoConnection",
      items:  Array< {
        __typename: "UsersConvo",
        id: string,
        usersModelID: string,
        conversationModelID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    difficulty_tag?: Array< DifficultyTag | null > | null,
    new_user?: boolean | null,
    contributions?:  {
      __typename: "ModelContributionsModelConnection",
      items:  Array< {
        __typename: "ContributionsModel",
        id: string,
        author: string,
        type?: Array< ContributionTag | null > | null,
        description?: string | null,
        link_to?: string | null,
        point_value?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    credibility_score?: number | null,
    involved_projects?: Array< string | null > | null,
    experience_level?: Array< ExperienceTag | null > | null,
    years_of_experience?: number | null,
    user_type?: Array< AccountTag | null > | null,
    user_experiences?:  {
      __typename: "ModelExperienceModelConnection",
      items:  Array< {
        __typename: "ExperienceModel",
        id: string,
        user_id: string,
        org_name: string,
        start_date: string,
        end_date?: string | null,
        description: string,
        lang_tag?: Array< LanguageTag | null > | null,
        dev_type_tag?: Array< DevelopmentTag | null > | null,
        framework_tag?: Array< FrameworkTag | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUsersModelMutationVariables = {
  input: DeleteUsersModelInput,
  condition?: ModelUsersModelConditionInput | null,
};

export type DeleteUsersModelMutation = {
  deleteUsersModel?:  {
    __typename: "UsersModel",
    id: string,
    user_name: string,
    email: string,
    password: string,
    profile_image?: string | null,
    user_posts?:  {
      __typename: "ModelPostsModelConnection",
      items:  Array< {
        __typename: "PostsModel",
        id: string,
        post_title: string,
        description?: string | null,
        long_description?: string | null,
        project_link?: string | null,
        image_link?: string | null,
        post_date?: string | null,
        userID: string,
        creator_name?: string | null,
        lang_tag?: Array< LanguageTag | null > | null,
        dev_type_tag?: Array< DevelopmentTag | null > | null,
        interest_tag?: Array< InterestTag | null > | null,
        size_tag?: Array< SizeTag | null > | null,
        framework_tag?: Array< FrameworkTag | null > | null,
        difficulty_tag?: Array< DifficultyTag | null > | null,
        contributor_limit?: number | null,
        contributors?: Array< string | null > | null,
        reported?: boolean | null,
        experience_level?: Array< ExperienceTag | null > | null,
        application?: boolean | null,
        project_chat: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    user_comments?:  {
      __typename: "ModelCommentModelConnection",
      items:  Array< {
        __typename: "CommentModel",
        id: string,
        comment: string,
        profile_image?: string | null,
        comment_date?: string | null,
        parent_comment?: string | null,
        replies?: number | null,
        isReply?: boolean | null,
        postID: string,
        userID: string,
        user_name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    github_link?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageModelConnection",
      items:  Array< {
        __typename: "MessageModel",
        id: string,
        message: string,
        from: string,
        message_date?: string | null,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelUsersConvoConnection",
      items:  Array< {
        __typename: "UsersConvo",
        id: string,
        usersModelID: string,
        conversationModelID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    difficulty_tag?: Array< DifficultyTag | null > | null,
    new_user?: boolean | null,
    contributions?:  {
      __typename: "ModelContributionsModelConnection",
      items:  Array< {
        __typename: "ContributionsModel",
        id: string,
        author: string,
        type?: Array< ContributionTag | null > | null,
        description?: string | null,
        link_to?: string | null,
        point_value?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    credibility_score?: number | null,
    involved_projects?: Array< string | null > | null,
    experience_level?: Array< ExperienceTag | null > | null,
    years_of_experience?: number | null,
    user_type?: Array< AccountTag | null > | null,
    user_experiences?:  {
      __typename: "ModelExperienceModelConnection",
      items:  Array< {
        __typename: "ExperienceModel",
        id: string,
        user_id: string,
        org_name: string,
        start_date: string,
        end_date?: string | null,
        description: string,
        lang_tag?: Array< LanguageTag | null > | null,
        dev_type_tag?: Array< DevelopmentTag | null > | null,
        framework_tag?: Array< FrameworkTag | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContributionsModelMutationVariables = {
  input: CreateContributionsModelInput,
  condition?: ModelContributionsModelConditionInput | null,
};

export type CreateContributionsModelMutation = {
  createContributionsModel?:  {
    __typename: "ContributionsModel",
    id: string,
    author: string,
    type?: Array< ContributionTag | null > | null,
    description?: string | null,
    link_to?: string | null,
    point_value?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContributionsModelMutationVariables = {
  input: UpdateContributionsModelInput,
  condition?: ModelContributionsModelConditionInput | null,
};

export type UpdateContributionsModelMutation = {
  updateContributionsModel?:  {
    __typename: "ContributionsModel",
    id: string,
    author: string,
    type?: Array< ContributionTag | null > | null,
    description?: string | null,
    link_to?: string | null,
    point_value?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContributionsModelMutationVariables = {
  input: DeleteContributionsModelInput,
  condition?: ModelContributionsModelConditionInput | null,
};

export type DeleteContributionsModelMutation = {
  deleteContributionsModel?:  {
    __typename: "ContributionsModel",
    id: string,
    author: string,
    type?: Array< ContributionTag | null > | null,
    description?: string | null,
    link_to?: string | null,
    point_value?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateExperienceModelMutationVariables = {
  input: CreateExperienceModelInput,
  condition?: ModelExperienceModelConditionInput | null,
};

export type CreateExperienceModelMutation = {
  createExperienceModel?:  {
    __typename: "ExperienceModel",
    id: string,
    user_id: string,
    org_name: string,
    start_date: string,
    end_date?: string | null,
    description: string,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateExperienceModelMutationVariables = {
  input: UpdateExperienceModelInput,
  condition?: ModelExperienceModelConditionInput | null,
};

export type UpdateExperienceModelMutation = {
  updateExperienceModel?:  {
    __typename: "ExperienceModel",
    id: string,
    user_id: string,
    org_name: string,
    start_date: string,
    end_date?: string | null,
    description: string,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteExperienceModelMutationVariables = {
  input: DeleteExperienceModelInput,
  condition?: ModelExperienceModelConditionInput | null,
};

export type DeleteExperienceModelMutation = {
  deleteExperienceModel?:  {
    __typename: "ExperienceModel",
    id: string,
    user_id: string,
    org_name: string,
    start_date: string,
    end_date?: string | null,
    description: string,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostsModelMutationVariables = {
  input: CreatePostsModelInput,
  condition?: ModelPostsModelConditionInput | null,
};

export type CreatePostsModelMutation = {
  createPostsModel?:  {
    __typename: "PostsModel",
    id: string,
    post_title: string,
    description?: string | null,
    long_description?: string | null,
    project_link?: string | null,
    image_link?: string | null,
    post_date?: string | null,
    userID: string,
    creator_name?: string | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    difficulty_tag?: Array< DifficultyTag | null > | null,
    post_comments?:  {
      __typename: "ModelCommentModelConnection",
      items:  Array< {
        __typename: "CommentModel",
        id: string,
        comment: string,
        profile_image?: string | null,
        comment_date?: string | null,
        parent_comment?: string | null,
        replies?: number | null,
        isReply?: boolean | null,
        postID: string,
        userID: string,
        user_name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    contributor_limit?: number | null,
    contributors?: Array< string | null > | null,
    reported?: boolean | null,
    experience_level?: Array< ExperienceTag | null > | null,
    application?: boolean | null,
    project_chat: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostsModelMutationVariables = {
  input: UpdatePostsModelInput,
  condition?: ModelPostsModelConditionInput | null,
};

export type UpdatePostsModelMutation = {
  updatePostsModel?:  {
    __typename: "PostsModel",
    id: string,
    post_title: string,
    description?: string | null,
    long_description?: string | null,
    project_link?: string | null,
    image_link?: string | null,
    post_date?: string | null,
    userID: string,
    creator_name?: string | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    difficulty_tag?: Array< DifficultyTag | null > | null,
    post_comments?:  {
      __typename: "ModelCommentModelConnection",
      items:  Array< {
        __typename: "CommentModel",
        id: string,
        comment: string,
        profile_image?: string | null,
        comment_date?: string | null,
        parent_comment?: string | null,
        replies?: number | null,
        isReply?: boolean | null,
        postID: string,
        userID: string,
        user_name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    contributor_limit?: number | null,
    contributors?: Array< string | null > | null,
    reported?: boolean | null,
    experience_level?: Array< ExperienceTag | null > | null,
    application?: boolean | null,
    project_chat: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostsModelMutationVariables = {
  input: DeletePostsModelInput,
  condition?: ModelPostsModelConditionInput | null,
};

export type DeletePostsModelMutation = {
  deletePostsModel?:  {
    __typename: "PostsModel",
    id: string,
    post_title: string,
    description?: string | null,
    long_description?: string | null,
    project_link?: string | null,
    image_link?: string | null,
    post_date?: string | null,
    userID: string,
    creator_name?: string | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    difficulty_tag?: Array< DifficultyTag | null > | null,
    post_comments?:  {
      __typename: "ModelCommentModelConnection",
      items:  Array< {
        __typename: "CommentModel",
        id: string,
        comment: string,
        profile_image?: string | null,
        comment_date?: string | null,
        parent_comment?: string | null,
        replies?: number | null,
        isReply?: boolean | null,
        postID: string,
        userID: string,
        user_name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    contributor_limit?: number | null,
    contributors?: Array< string | null > | null,
    reported?: boolean | null,
    experience_level?: Array< ExperienceTag | null > | null,
    application?: boolean | null,
    project_chat: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateConversationModelMutationVariables = {
  input: CreateConversationModelInput,
  condition?: ModelConversationModelConditionInput | null,
};

export type CreateConversationModelMutation = {
  createConversationModel?:  {
    __typename: "ConversationModel",
    id: string,
    users?:  {
      __typename: "ModelUsersConvoConnection",
      items:  Array< {
        __typename: "UsersConvo",
        id: string,
        usersModelID: string,
        conversationModelID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateConversationModelMutationVariables = {
  input: UpdateConversationModelInput,
  condition?: ModelConversationModelConditionInput | null,
};

export type UpdateConversationModelMutation = {
  updateConversationModel?:  {
    __typename: "ConversationModel",
    id: string,
    users?:  {
      __typename: "ModelUsersConvoConnection",
      items:  Array< {
        __typename: "UsersConvo",
        id: string,
        usersModelID: string,
        conversationModelID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteConversationModelMutationVariables = {
  input: DeleteConversationModelInput,
  condition?: ModelConversationModelConditionInput | null,
};

export type DeleteConversationModelMutation = {
  deleteConversationModel?:  {
    __typename: "ConversationModel",
    id: string,
    users?:  {
      __typename: "ModelUsersConvoConnection",
      items:  Array< {
        __typename: "UsersConvo",
        id: string,
        usersModelID: string,
        conversationModelID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageModelMutationVariables = {
  input: CreateMessageModelInput,
  condition?: ModelMessageModelConditionInput | null,
};

export type CreateMessageModelMutation = {
  createMessageModel?:  {
    __typename: "MessageModel",
    id: string,
    message: string,
    from: string,
    message_date?: string | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageModelMutationVariables = {
  input: UpdateMessageModelInput,
  condition?: ModelMessageModelConditionInput | null,
};

export type UpdateMessageModelMutation = {
  updateMessageModel?:  {
    __typename: "MessageModel",
    id: string,
    message: string,
    from: string,
    message_date?: string | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageModelMutationVariables = {
  input: DeleteMessageModelInput,
  condition?: ModelMessageModelConditionInput | null,
};

export type DeleteMessageModelMutation = {
  deleteMessageModel?:  {
    __typename: "MessageModel",
    id: string,
    message: string,
    from: string,
    message_date?: string | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentModelMutationVariables = {
  input: CreateCommentModelInput,
  condition?: ModelCommentModelConditionInput | null,
};

export type CreateCommentModelMutation = {
  createCommentModel?:  {
    __typename: "CommentModel",
    id: string,
    comment: string,
    profile_image?: string | null,
    comment_date?: string | null,
    parent_comment?: string | null,
    replies?: number | null,
    isReply?: boolean | null,
    postID: string,
    userID: string,
    user_name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentModelMutationVariables = {
  input: UpdateCommentModelInput,
  condition?: ModelCommentModelConditionInput | null,
};

export type UpdateCommentModelMutation = {
  updateCommentModel?:  {
    __typename: "CommentModel",
    id: string,
    comment: string,
    profile_image?: string | null,
    comment_date?: string | null,
    parent_comment?: string | null,
    replies?: number | null,
    isReply?: boolean | null,
    postID: string,
    userID: string,
    user_name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentModelMutationVariables = {
  input: DeleteCommentModelInput,
  condition?: ModelCommentModelConditionInput | null,
};

export type DeleteCommentModelMutation = {
  deleteCommentModel?:  {
    __typename: "CommentModel",
    id: string,
    comment: string,
    profile_image?: string | null,
    comment_date?: string | null,
    parent_comment?: string | null,
    replies?: number | null,
    isReply?: boolean | null,
    postID: string,
    userID: string,
    user_name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUsersConvoMutationVariables = {
  input: CreateUsersConvoInput,
  condition?: ModelUsersConvoConditionInput | null,
};

export type CreateUsersConvoMutation = {
  createUsersConvo?:  {
    __typename: "UsersConvo",
    id: string,
    usersModelID: string,
    conversationModelID: string,
    usersModel:  {
      __typename: "UsersModel",
      id: string,
      user_name: string,
      email: string,
      password: string,
      profile_image?: string | null,
      user_posts?:  {
        __typename: "ModelPostsModelConnection",
        nextToken?: string | null,
      } | null,
      user_comments?:  {
        __typename: "ModelCommentModelConnection",
        nextToken?: string | null,
      } | null,
      first_name?: string | null,
      last_name?: string | null,
      user_creation_date?: string | null,
      github_link?: string | null,
      saved_posts?: Array< string | null > | null,
      hide_posts?: Array< string | null > | null,
      messages?:  {
        __typename: "ModelMessageModelConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelUsersConvoConnection",
        nextToken?: string | null,
      } | null,
      lang_tag?: Array< LanguageTag | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      interest_tag?: Array< InterestTag | null > | null,
      size_tag?: Array< SizeTag | null > | null,
      framework_tag?: Array< FrameworkTag | null > | null,
      difficulty_tag?: Array< DifficultyTag | null > | null,
      new_user?: boolean | null,
      contributions?:  {
        __typename: "ModelContributionsModelConnection",
        nextToken?: string | null,
      } | null,
      credibility_score?: number | null,
      involved_projects?: Array< string | null > | null,
      experience_level?: Array< ExperienceTag | null > | null,
      years_of_experience?: number | null,
      user_type?: Array< AccountTag | null > | null,
      user_experiences?:  {
        __typename: "ModelExperienceModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    conversationModel:  {
      __typename: "ConversationModel",
      id: string,
      users?:  {
        __typename: "ModelUsersConvoConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUsersConvoMutationVariables = {
  input: UpdateUsersConvoInput,
  condition?: ModelUsersConvoConditionInput | null,
};

export type UpdateUsersConvoMutation = {
  updateUsersConvo?:  {
    __typename: "UsersConvo",
    id: string,
    usersModelID: string,
    conversationModelID: string,
    usersModel:  {
      __typename: "UsersModel",
      id: string,
      user_name: string,
      email: string,
      password: string,
      profile_image?: string | null,
      user_posts?:  {
        __typename: "ModelPostsModelConnection",
        nextToken?: string | null,
      } | null,
      user_comments?:  {
        __typename: "ModelCommentModelConnection",
        nextToken?: string | null,
      } | null,
      first_name?: string | null,
      last_name?: string | null,
      user_creation_date?: string | null,
      github_link?: string | null,
      saved_posts?: Array< string | null > | null,
      hide_posts?: Array< string | null > | null,
      messages?:  {
        __typename: "ModelMessageModelConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelUsersConvoConnection",
        nextToken?: string | null,
      } | null,
      lang_tag?: Array< LanguageTag | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      interest_tag?: Array< InterestTag | null > | null,
      size_tag?: Array< SizeTag | null > | null,
      framework_tag?: Array< FrameworkTag | null > | null,
      difficulty_tag?: Array< DifficultyTag | null > | null,
      new_user?: boolean | null,
      contributions?:  {
        __typename: "ModelContributionsModelConnection",
        nextToken?: string | null,
      } | null,
      credibility_score?: number | null,
      involved_projects?: Array< string | null > | null,
      experience_level?: Array< ExperienceTag | null > | null,
      years_of_experience?: number | null,
      user_type?: Array< AccountTag | null > | null,
      user_experiences?:  {
        __typename: "ModelExperienceModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    conversationModel:  {
      __typename: "ConversationModel",
      id: string,
      users?:  {
        __typename: "ModelUsersConvoConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUsersConvoMutationVariables = {
  input: DeleteUsersConvoInput,
  condition?: ModelUsersConvoConditionInput | null,
};

export type DeleteUsersConvoMutation = {
  deleteUsersConvo?:  {
    __typename: "UsersConvo",
    id: string,
    usersModelID: string,
    conversationModelID: string,
    usersModel:  {
      __typename: "UsersModel",
      id: string,
      user_name: string,
      email: string,
      password: string,
      profile_image?: string | null,
      user_posts?:  {
        __typename: "ModelPostsModelConnection",
        nextToken?: string | null,
      } | null,
      user_comments?:  {
        __typename: "ModelCommentModelConnection",
        nextToken?: string | null,
      } | null,
      first_name?: string | null,
      last_name?: string | null,
      user_creation_date?: string | null,
      github_link?: string | null,
      saved_posts?: Array< string | null > | null,
      hide_posts?: Array< string | null > | null,
      messages?:  {
        __typename: "ModelMessageModelConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelUsersConvoConnection",
        nextToken?: string | null,
      } | null,
      lang_tag?: Array< LanguageTag | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      interest_tag?: Array< InterestTag | null > | null,
      size_tag?: Array< SizeTag | null > | null,
      framework_tag?: Array< FrameworkTag | null > | null,
      difficulty_tag?: Array< DifficultyTag | null > | null,
      new_user?: boolean | null,
      contributions?:  {
        __typename: "ModelContributionsModelConnection",
        nextToken?: string | null,
      } | null,
      credibility_score?: number | null,
      involved_projects?: Array< string | null > | null,
      experience_level?: Array< ExperienceTag | null > | null,
      years_of_experience?: number | null,
      user_type?: Array< AccountTag | null > | null,
      user_experiences?:  {
        __typename: "ModelExperienceModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    conversationModel:  {
      __typename: "ConversationModel",
      id: string,
      users?:  {
        __typename: "ModelUsersConvoConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetNewsletterEmailModelQueryVariables = {
  id: string,
};

export type GetNewsletterEmailModelQuery = {
  getNewsletterEmailModel?:  {
    __typename: "NewsletterEmailModel",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNewsletterEmailModelsQueryVariables = {
  filter?: ModelNewsletterEmailModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNewsletterEmailModelsQuery = {
  listNewsletterEmailModels?:  {
    __typename: "ModelNewsletterEmailModelConnection",
    items:  Array< {
      __typename: "NewsletterEmailModel",
      id: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchNewsletterEmailModelsQueryVariables = {
  filter?: SearchableNewsletterEmailModelFilterInput | null,
  sort?: Array< SearchableNewsletterEmailModelSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableNewsletterEmailModelAggregationInput | null > | null,
};

export type SearchNewsletterEmailModelsQuery = {
  searchNewsletterEmailModels?:  {
    __typename: "SearchableNewsletterEmailModelConnection",
    items:  Array< {
      __typename: "NewsletterEmailModel",
      id: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetUsersModelQueryVariables = {
  id: string,
};

export type GetUsersModelQuery = {
  getUsersModel?:  {
    __typename: "UsersModel",
    id: string,
    user_name: string,
    email: string,
    password: string,
    profile_image?: string | null,
    user_posts?:  {
      __typename: "ModelPostsModelConnection",
      items:  Array< {
        __typename: "PostsModel",
        id: string,
        post_title: string,
        description?: string | null,
        long_description?: string | null,
        project_link?: string | null,
        image_link?: string | null,
        post_date?: string | null,
        userID: string,
        creator_name?: string | null,
        lang_tag?: Array< LanguageTag | null > | null,
        dev_type_tag?: Array< DevelopmentTag | null > | null,
        interest_tag?: Array< InterestTag | null > | null,
        size_tag?: Array< SizeTag | null > | null,
        framework_tag?: Array< FrameworkTag | null > | null,
        difficulty_tag?: Array< DifficultyTag | null > | null,
        contributor_limit?: number | null,
        contributors?: Array< string | null > | null,
        reported?: boolean | null,
        experience_level?: Array< ExperienceTag | null > | null,
        application?: boolean | null,
        project_chat: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    user_comments?:  {
      __typename: "ModelCommentModelConnection",
      items:  Array< {
        __typename: "CommentModel",
        id: string,
        comment: string,
        profile_image?: string | null,
        comment_date?: string | null,
        parent_comment?: string | null,
        replies?: number | null,
        isReply?: boolean | null,
        postID: string,
        userID: string,
        user_name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    github_link?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageModelConnection",
      items:  Array< {
        __typename: "MessageModel",
        id: string,
        message: string,
        from: string,
        message_date?: string | null,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelUsersConvoConnection",
      items:  Array< {
        __typename: "UsersConvo",
        id: string,
        usersModelID: string,
        conversationModelID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    difficulty_tag?: Array< DifficultyTag | null > | null,
    new_user?: boolean | null,
    contributions?:  {
      __typename: "ModelContributionsModelConnection",
      items:  Array< {
        __typename: "ContributionsModel",
        id: string,
        author: string,
        type?: Array< ContributionTag | null > | null,
        description?: string | null,
        link_to?: string | null,
        point_value?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    credibility_score?: number | null,
    involved_projects?: Array< string | null > | null,
    experience_level?: Array< ExperienceTag | null > | null,
    years_of_experience?: number | null,
    user_type?: Array< AccountTag | null > | null,
    user_experiences?:  {
      __typename: "ModelExperienceModelConnection",
      items:  Array< {
        __typename: "ExperienceModel",
        id: string,
        user_id: string,
        org_name: string,
        start_date: string,
        end_date?: string | null,
        description: string,
        lang_tag?: Array< LanguageTag | null > | null,
        dev_type_tag?: Array< DevelopmentTag | null > | null,
        framework_tag?: Array< FrameworkTag | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersModelsQueryVariables = {
  filter?: ModelUsersModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersModelsQuery = {
  listUsersModels?:  {
    __typename: "ModelUsersModelConnection",
    items:  Array< {
      __typename: "UsersModel",
      id: string,
      user_name: string,
      email: string,
      password: string,
      profile_image?: string | null,
      user_posts?:  {
        __typename: "ModelPostsModelConnection",
        nextToken?: string | null,
      } | null,
      user_comments?:  {
        __typename: "ModelCommentModelConnection",
        nextToken?: string | null,
      } | null,
      first_name?: string | null,
      last_name?: string | null,
      user_creation_date?: string | null,
      github_link?: string | null,
      saved_posts?: Array< string | null > | null,
      hide_posts?: Array< string | null > | null,
      messages?:  {
        __typename: "ModelMessageModelConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelUsersConvoConnection",
        nextToken?: string | null,
      } | null,
      lang_tag?: Array< LanguageTag | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      interest_tag?: Array< InterestTag | null > | null,
      size_tag?: Array< SizeTag | null > | null,
      framework_tag?: Array< FrameworkTag | null > | null,
      difficulty_tag?: Array< DifficultyTag | null > | null,
      new_user?: boolean | null,
      contributions?:  {
        __typename: "ModelContributionsModelConnection",
        nextToken?: string | null,
      } | null,
      credibility_score?: number | null,
      involved_projects?: Array< string | null > | null,
      experience_level?: Array< ExperienceTag | null > | null,
      years_of_experience?: number | null,
      user_type?: Array< AccountTag | null > | null,
      user_experiences?:  {
        __typename: "ModelExperienceModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchUsersModelsQueryVariables = {
  filter?: SearchableUsersModelFilterInput | null,
  sort?: Array< SearchableUsersModelSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableUsersModelAggregationInput | null > | null,
};

export type SearchUsersModelsQuery = {
  searchUsersModels?:  {
    __typename: "SearchableUsersModelConnection",
    items:  Array< {
      __typename: "UsersModel",
      id: string,
      user_name: string,
      email: string,
      password: string,
      profile_image?: string | null,
      user_posts?:  {
        __typename: "ModelPostsModelConnection",
        nextToken?: string | null,
      } | null,
      user_comments?:  {
        __typename: "ModelCommentModelConnection",
        nextToken?: string | null,
      } | null,
      first_name?: string | null,
      last_name?: string | null,
      user_creation_date?: string | null,
      github_link?: string | null,
      saved_posts?: Array< string | null > | null,
      hide_posts?: Array< string | null > | null,
      messages?:  {
        __typename: "ModelMessageModelConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelUsersConvoConnection",
        nextToken?: string | null,
      } | null,
      lang_tag?: Array< LanguageTag | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      interest_tag?: Array< InterestTag | null > | null,
      size_tag?: Array< SizeTag | null > | null,
      framework_tag?: Array< FrameworkTag | null > | null,
      difficulty_tag?: Array< DifficultyTag | null > | null,
      new_user?: boolean | null,
      contributions?:  {
        __typename: "ModelContributionsModelConnection",
        nextToken?: string | null,
      } | null,
      credibility_score?: number | null,
      involved_projects?: Array< string | null > | null,
      experience_level?: Array< ExperienceTag | null > | null,
      years_of_experience?: number | null,
      user_type?: Array< AccountTag | null > | null,
      user_experiences?:  {
        __typename: "ModelExperienceModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetContributionsModelQueryVariables = {
  id: string,
};

export type GetContributionsModelQuery = {
  getContributionsModel?:  {
    __typename: "ContributionsModel",
    id: string,
    author: string,
    type?: Array< ContributionTag | null > | null,
    description?: string | null,
    link_to?: string | null,
    point_value?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContributionsModelsQueryVariables = {
  filter?: ModelContributionsModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContributionsModelsQuery = {
  listContributionsModels?:  {
    __typename: "ModelContributionsModelConnection",
    items:  Array< {
      __typename: "ContributionsModel",
      id: string,
      author: string,
      type?: Array< ContributionTag | null > | null,
      description?: string | null,
      link_to?: string | null,
      point_value?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchContributionsModelsQueryVariables = {
  filter?: SearchableContributionsModelFilterInput | null,
  sort?: Array< SearchableContributionsModelSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableContributionsModelAggregationInput | null > | null,
};

export type SearchContributionsModelsQuery = {
  searchContributionsModels?:  {
    __typename: "SearchableContributionsModelConnection",
    items:  Array< {
      __typename: "ContributionsModel",
      id: string,
      author: string,
      type?: Array< ContributionTag | null > | null,
      description?: string | null,
      link_to?: string | null,
      point_value?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetExperienceModelQueryVariables = {
  id: string,
};

export type GetExperienceModelQuery = {
  getExperienceModel?:  {
    __typename: "ExperienceModel",
    id: string,
    user_id: string,
    org_name: string,
    start_date: string,
    end_date?: string | null,
    description: string,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListExperienceModelsQueryVariables = {
  filter?: ModelExperienceModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExperienceModelsQuery = {
  listExperienceModels?:  {
    __typename: "ModelExperienceModelConnection",
    items:  Array< {
      __typename: "ExperienceModel",
      id: string,
      user_id: string,
      org_name: string,
      start_date: string,
      end_date?: string | null,
      description: string,
      lang_tag?: Array< LanguageTag | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      framework_tag?: Array< FrameworkTag | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchExperienceModelsQueryVariables = {
  filter?: SearchableExperienceModelFilterInput | null,
  sort?: Array< SearchableExperienceModelSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableExperienceModelAggregationInput | null > | null,
};

export type SearchExperienceModelsQuery = {
  searchExperienceModels?:  {
    __typename: "SearchableExperienceModelConnection",
    items:  Array< {
      __typename: "ExperienceModel",
      id: string,
      user_id: string,
      org_name: string,
      start_date: string,
      end_date?: string | null,
      description: string,
      lang_tag?: Array< LanguageTag | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      framework_tag?: Array< FrameworkTag | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetPostsModelQueryVariables = {
  id: string,
};

export type GetPostsModelQuery = {
  getPostsModel?:  {
    __typename: "PostsModel",
    id: string,
    post_title: string,
    description?: string | null,
    long_description?: string | null,
    project_link?: string | null,
    image_link?: string | null,
    post_date?: string | null,
    userID: string,
    creator_name?: string | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    difficulty_tag?: Array< DifficultyTag | null > | null,
    post_comments?:  {
      __typename: "ModelCommentModelConnection",
      items:  Array< {
        __typename: "CommentModel",
        id: string,
        comment: string,
        profile_image?: string | null,
        comment_date?: string | null,
        parent_comment?: string | null,
        replies?: number | null,
        isReply?: boolean | null,
        postID: string,
        userID: string,
        user_name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    contributor_limit?: number | null,
    contributors?: Array< string | null > | null,
    reported?: boolean | null,
    experience_level?: Array< ExperienceTag | null > | null,
    application?: boolean | null,
    project_chat: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsModelsQueryVariables = {
  filter?: ModelPostsModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsModelsQuery = {
  listPostsModels?:  {
    __typename: "ModelPostsModelConnection",
    items:  Array< {
      __typename: "PostsModel",
      id: string,
      post_title: string,
      description?: string | null,
      long_description?: string | null,
      project_link?: string | null,
      image_link?: string | null,
      post_date?: string | null,
      userID: string,
      creator_name?: string | null,
      lang_tag?: Array< LanguageTag | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      interest_tag?: Array< InterestTag | null > | null,
      size_tag?: Array< SizeTag | null > | null,
      framework_tag?: Array< FrameworkTag | null > | null,
      difficulty_tag?: Array< DifficultyTag | null > | null,
      post_comments?:  {
        __typename: "ModelCommentModelConnection",
        nextToken?: string | null,
      } | null,
      contributor_limit?: number | null,
      contributors?: Array< string | null > | null,
      reported?: boolean | null,
      experience_level?: Array< ExperienceTag | null > | null,
      application?: boolean | null,
      project_chat: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchPostsModelsQueryVariables = {
  filter?: SearchablePostsModelFilterInput | null,
  sort?: Array< SearchablePostsModelSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchablePostsModelAggregationInput | null > | null,
};

export type SearchPostsModelsQuery = {
  searchPostsModels?:  {
    __typename: "SearchablePostsModelConnection",
    items:  Array< {
      __typename: "PostsModel",
      id: string,
      post_title: string,
      description?: string | null,
      long_description?: string | null,
      project_link?: string | null,
      image_link?: string | null,
      post_date?: string | null,
      userID: string,
      creator_name?: string | null,
      lang_tag?: Array< LanguageTag | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      interest_tag?: Array< InterestTag | null > | null,
      size_tag?: Array< SizeTag | null > | null,
      framework_tag?: Array< FrameworkTag | null > | null,
      difficulty_tag?: Array< DifficultyTag | null > | null,
      post_comments?:  {
        __typename: "ModelCommentModelConnection",
        nextToken?: string | null,
      } | null,
      contributor_limit?: number | null,
      contributors?: Array< string | null > | null,
      reported?: boolean | null,
      experience_level?: Array< ExperienceTag | null > | null,
      application?: boolean | null,
      project_chat: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetConversationModelQueryVariables = {
  id: string,
};

export type GetConversationModelQuery = {
  getConversationModel?:  {
    __typename: "ConversationModel",
    id: string,
    users?:  {
      __typename: "ModelUsersConvoConnection",
      items:  Array< {
        __typename: "UsersConvo",
        id: string,
        usersModelID: string,
        conversationModelID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListConversationModelsQueryVariables = {
  filter?: ModelConversationModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConversationModelsQuery = {
  listConversationModels?:  {
    __typename: "ModelConversationModelConnection",
    items:  Array< {
      __typename: "ConversationModel",
      id: string,
      users?:  {
        __typename: "ModelUsersConvoConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchConversationModelsQueryVariables = {
  filter?: SearchableConversationModelFilterInput | null,
  sort?: Array< SearchableConversationModelSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableConversationModelAggregationInput | null > | null,
};

export type SearchConversationModelsQuery = {
  searchConversationModels?:  {
    __typename: "SearchableConversationModelConnection",
    items:  Array< {
      __typename: "ConversationModel",
      id: string,
      users?:  {
        __typename: "ModelUsersConvoConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetMessageModelQueryVariables = {
  id: string,
};

export type GetMessageModelQuery = {
  getMessageModel?:  {
    __typename: "MessageModel",
    id: string,
    message: string,
    from: string,
    message_date?: string | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessageModelsQueryVariables = {
  filter?: ModelMessageModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessageModelsQuery = {
  listMessageModels?:  {
    __typename: "ModelMessageModelConnection",
    items:  Array< {
      __typename: "MessageModel",
      id: string,
      message: string,
      from: string,
      message_date?: string | null,
      conversationID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchMessageModelsQueryVariables = {
  filter?: SearchableMessageModelFilterInput | null,
  sort?: Array< SearchableMessageModelSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableMessageModelAggregationInput | null > | null,
};

export type SearchMessageModelsQuery = {
  searchMessageModels?:  {
    __typename: "SearchableMessageModelConnection",
    items:  Array< {
      __typename: "MessageModel",
      id: string,
      message: string,
      from: string,
      message_date?: string | null,
      conversationID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetCommentModelQueryVariables = {
  id: string,
};

export type GetCommentModelQuery = {
  getCommentModel?:  {
    __typename: "CommentModel",
    id: string,
    comment: string,
    profile_image?: string | null,
    comment_date?: string | null,
    parent_comment?: string | null,
    replies?: number | null,
    isReply?: boolean | null,
    postID: string,
    userID: string,
    user_name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentModelsQueryVariables = {
  filter?: ModelCommentModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentModelsQuery = {
  listCommentModels?:  {
    __typename: "ModelCommentModelConnection",
    items:  Array< {
      __typename: "CommentModel",
      id: string,
      comment: string,
      profile_image?: string | null,
      comment_date?: string | null,
      parent_comment?: string | null,
      replies?: number | null,
      isReply?: boolean | null,
      postID: string,
      userID: string,
      user_name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchCommentModelsQueryVariables = {
  filter?: SearchableCommentModelFilterInput | null,
  sort?: Array< SearchableCommentModelSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableCommentModelAggregationInput | null > | null,
};

export type SearchCommentModelsQuery = {
  searchCommentModels?:  {
    __typename: "SearchableCommentModelConnection",
    items:  Array< {
      __typename: "CommentModel",
      id: string,
      comment: string,
      profile_image?: string | null,
      comment_date?: string | null,
      parent_comment?: string | null,
      replies?: number | null,
      isReply?: boolean | null,
      postID: string,
      userID: string,
      user_name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetUsersConvoQueryVariables = {
  id: string,
};

export type GetUsersConvoQuery = {
  getUsersConvo?:  {
    __typename: "UsersConvo",
    id: string,
    usersModelID: string,
    conversationModelID: string,
    usersModel:  {
      __typename: "UsersModel",
      id: string,
      user_name: string,
      email: string,
      password: string,
      profile_image?: string | null,
      user_posts?:  {
        __typename: "ModelPostsModelConnection",
        nextToken?: string | null,
      } | null,
      user_comments?:  {
        __typename: "ModelCommentModelConnection",
        nextToken?: string | null,
      } | null,
      first_name?: string | null,
      last_name?: string | null,
      user_creation_date?: string | null,
      github_link?: string | null,
      saved_posts?: Array< string | null > | null,
      hide_posts?: Array< string | null > | null,
      messages?:  {
        __typename: "ModelMessageModelConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelUsersConvoConnection",
        nextToken?: string | null,
      } | null,
      lang_tag?: Array< LanguageTag | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      interest_tag?: Array< InterestTag | null > | null,
      size_tag?: Array< SizeTag | null > | null,
      framework_tag?: Array< FrameworkTag | null > | null,
      difficulty_tag?: Array< DifficultyTag | null > | null,
      new_user?: boolean | null,
      contributions?:  {
        __typename: "ModelContributionsModelConnection",
        nextToken?: string | null,
      } | null,
      credibility_score?: number | null,
      involved_projects?: Array< string | null > | null,
      experience_level?: Array< ExperienceTag | null > | null,
      years_of_experience?: number | null,
      user_type?: Array< AccountTag | null > | null,
      user_experiences?:  {
        __typename: "ModelExperienceModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    conversationModel:  {
      __typename: "ConversationModel",
      id: string,
      users?:  {
        __typename: "ModelUsersConvoConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersConvosQueryVariables = {
  filter?: ModelUsersConvoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersConvosQuery = {
  listUsersConvos?:  {
    __typename: "ModelUsersConvoConnection",
    items:  Array< {
      __typename: "UsersConvo",
      id: string,
      usersModelID: string,
      conversationModelID: string,
      usersModel:  {
        __typename: "UsersModel",
        id: string,
        user_name: string,
        email: string,
        password: string,
        profile_image?: string | null,
        first_name?: string | null,
        last_name?: string | null,
        user_creation_date?: string | null,
        github_link?: string | null,
        saved_posts?: Array< string | null > | null,
        hide_posts?: Array< string | null > | null,
        lang_tag?: Array< LanguageTag | null > | null,
        dev_type_tag?: Array< DevelopmentTag | null > | null,
        interest_tag?: Array< InterestTag | null > | null,
        size_tag?: Array< SizeTag | null > | null,
        framework_tag?: Array< FrameworkTag | null > | null,
        difficulty_tag?: Array< DifficultyTag | null > | null,
        new_user?: boolean | null,
        credibility_score?: number | null,
        involved_projects?: Array< string | null > | null,
        experience_level?: Array< ExperienceTag | null > | null,
        years_of_experience?: number | null,
        user_type?: Array< AccountTag | null > | null,
        createdAt: string,
        updatedAt: string,
      },
      conversationModel:  {
        __typename: "ConversationModel",
        id: string,
        title?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateNewsletterEmailModelSubscriptionVariables = {
  filter?: ModelSubscriptionNewsletterEmailModelFilterInput | null,
};

export type OnCreateNewsletterEmailModelSubscription = {
  onCreateNewsletterEmailModel?:  {
    __typename: "NewsletterEmailModel",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNewsletterEmailModelSubscriptionVariables = {
  filter?: ModelSubscriptionNewsletterEmailModelFilterInput | null,
};

export type OnUpdateNewsletterEmailModelSubscription = {
  onUpdateNewsletterEmailModel?:  {
    __typename: "NewsletterEmailModel",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNewsletterEmailModelSubscriptionVariables = {
  filter?: ModelSubscriptionNewsletterEmailModelFilterInput | null,
};

export type OnDeleteNewsletterEmailModelSubscription = {
  onDeleteNewsletterEmailModel?:  {
    __typename: "NewsletterEmailModel",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUsersModelSubscriptionVariables = {
  filter?: ModelSubscriptionUsersModelFilterInput | null,
};

export type OnCreateUsersModelSubscription = {
  onCreateUsersModel?:  {
    __typename: "UsersModel",
    id: string,
    user_name: string,
    email: string,
    password: string,
    profile_image?: string | null,
    user_posts?:  {
      __typename: "ModelPostsModelConnection",
      items:  Array< {
        __typename: "PostsModel",
        id: string,
        post_title: string,
        description?: string | null,
        long_description?: string | null,
        project_link?: string | null,
        image_link?: string | null,
        post_date?: string | null,
        userID: string,
        creator_name?: string | null,
        lang_tag?: Array< LanguageTag | null > | null,
        dev_type_tag?: Array< DevelopmentTag | null > | null,
        interest_tag?: Array< InterestTag | null > | null,
        size_tag?: Array< SizeTag | null > | null,
        framework_tag?: Array< FrameworkTag | null > | null,
        difficulty_tag?: Array< DifficultyTag | null > | null,
        contributor_limit?: number | null,
        contributors?: Array< string | null > | null,
        reported?: boolean | null,
        experience_level?: Array< ExperienceTag | null > | null,
        application?: boolean | null,
        project_chat: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    user_comments?:  {
      __typename: "ModelCommentModelConnection",
      items:  Array< {
        __typename: "CommentModel",
        id: string,
        comment: string,
        profile_image?: string | null,
        comment_date?: string | null,
        parent_comment?: string | null,
        replies?: number | null,
        isReply?: boolean | null,
        postID: string,
        userID: string,
        user_name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    github_link?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageModelConnection",
      items:  Array< {
        __typename: "MessageModel",
        id: string,
        message: string,
        from: string,
        message_date?: string | null,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelUsersConvoConnection",
      items:  Array< {
        __typename: "UsersConvo",
        id: string,
        usersModelID: string,
        conversationModelID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    difficulty_tag?: Array< DifficultyTag | null > | null,
    new_user?: boolean | null,
    contributions?:  {
      __typename: "ModelContributionsModelConnection",
      items:  Array< {
        __typename: "ContributionsModel",
        id: string,
        author: string,
        type?: Array< ContributionTag | null > | null,
        description?: string | null,
        link_to?: string | null,
        point_value?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    credibility_score?: number | null,
    involved_projects?: Array< string | null > | null,
    experience_level?: Array< ExperienceTag | null > | null,
    years_of_experience?: number | null,
    user_type?: Array< AccountTag | null > | null,
    user_experiences?:  {
      __typename: "ModelExperienceModelConnection",
      items:  Array< {
        __typename: "ExperienceModel",
        id: string,
        user_id: string,
        org_name: string,
        start_date: string,
        end_date?: string | null,
        description: string,
        lang_tag?: Array< LanguageTag | null > | null,
        dev_type_tag?: Array< DevelopmentTag | null > | null,
        framework_tag?: Array< FrameworkTag | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUsersModelSubscriptionVariables = {
  filter?: ModelSubscriptionUsersModelFilterInput | null,
};

export type OnUpdateUsersModelSubscription = {
  onUpdateUsersModel?:  {
    __typename: "UsersModel",
    id: string,
    user_name: string,
    email: string,
    password: string,
    profile_image?: string | null,
    user_posts?:  {
      __typename: "ModelPostsModelConnection",
      items:  Array< {
        __typename: "PostsModel",
        id: string,
        post_title: string,
        description?: string | null,
        long_description?: string | null,
        project_link?: string | null,
        image_link?: string | null,
        post_date?: string | null,
        userID: string,
        creator_name?: string | null,
        lang_tag?: Array< LanguageTag | null > | null,
        dev_type_tag?: Array< DevelopmentTag | null > | null,
        interest_tag?: Array< InterestTag | null > | null,
        size_tag?: Array< SizeTag | null > | null,
        framework_tag?: Array< FrameworkTag | null > | null,
        difficulty_tag?: Array< DifficultyTag | null > | null,
        contributor_limit?: number | null,
        contributors?: Array< string | null > | null,
        reported?: boolean | null,
        experience_level?: Array< ExperienceTag | null > | null,
        application?: boolean | null,
        project_chat: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    user_comments?:  {
      __typename: "ModelCommentModelConnection",
      items:  Array< {
        __typename: "CommentModel",
        id: string,
        comment: string,
        profile_image?: string | null,
        comment_date?: string | null,
        parent_comment?: string | null,
        replies?: number | null,
        isReply?: boolean | null,
        postID: string,
        userID: string,
        user_name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    github_link?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageModelConnection",
      items:  Array< {
        __typename: "MessageModel",
        id: string,
        message: string,
        from: string,
        message_date?: string | null,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelUsersConvoConnection",
      items:  Array< {
        __typename: "UsersConvo",
        id: string,
        usersModelID: string,
        conversationModelID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    difficulty_tag?: Array< DifficultyTag | null > | null,
    new_user?: boolean | null,
    contributions?:  {
      __typename: "ModelContributionsModelConnection",
      items:  Array< {
        __typename: "ContributionsModel",
        id: string,
        author: string,
        type?: Array< ContributionTag | null > | null,
        description?: string | null,
        link_to?: string | null,
        point_value?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    credibility_score?: number | null,
    involved_projects?: Array< string | null > | null,
    experience_level?: Array< ExperienceTag | null > | null,
    years_of_experience?: number | null,
    user_type?: Array< AccountTag | null > | null,
    user_experiences?:  {
      __typename: "ModelExperienceModelConnection",
      items:  Array< {
        __typename: "ExperienceModel",
        id: string,
        user_id: string,
        org_name: string,
        start_date: string,
        end_date?: string | null,
        description: string,
        lang_tag?: Array< LanguageTag | null > | null,
        dev_type_tag?: Array< DevelopmentTag | null > | null,
        framework_tag?: Array< FrameworkTag | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUsersModelSubscriptionVariables = {
  filter?: ModelSubscriptionUsersModelFilterInput | null,
};

export type OnDeleteUsersModelSubscription = {
  onDeleteUsersModel?:  {
    __typename: "UsersModel",
    id: string,
    user_name: string,
    email: string,
    password: string,
    profile_image?: string | null,
    user_posts?:  {
      __typename: "ModelPostsModelConnection",
      items:  Array< {
        __typename: "PostsModel",
        id: string,
        post_title: string,
        description?: string | null,
        long_description?: string | null,
        project_link?: string | null,
        image_link?: string | null,
        post_date?: string | null,
        userID: string,
        creator_name?: string | null,
        lang_tag?: Array< LanguageTag | null > | null,
        dev_type_tag?: Array< DevelopmentTag | null > | null,
        interest_tag?: Array< InterestTag | null > | null,
        size_tag?: Array< SizeTag | null > | null,
        framework_tag?: Array< FrameworkTag | null > | null,
        difficulty_tag?: Array< DifficultyTag | null > | null,
        contributor_limit?: number | null,
        contributors?: Array< string | null > | null,
        reported?: boolean | null,
        experience_level?: Array< ExperienceTag | null > | null,
        application?: boolean | null,
        project_chat: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    user_comments?:  {
      __typename: "ModelCommentModelConnection",
      items:  Array< {
        __typename: "CommentModel",
        id: string,
        comment: string,
        profile_image?: string | null,
        comment_date?: string | null,
        parent_comment?: string | null,
        replies?: number | null,
        isReply?: boolean | null,
        postID: string,
        userID: string,
        user_name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    github_link?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageModelConnection",
      items:  Array< {
        __typename: "MessageModel",
        id: string,
        message: string,
        from: string,
        message_date?: string | null,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelUsersConvoConnection",
      items:  Array< {
        __typename: "UsersConvo",
        id: string,
        usersModelID: string,
        conversationModelID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    difficulty_tag?: Array< DifficultyTag | null > | null,
    new_user?: boolean | null,
    contributions?:  {
      __typename: "ModelContributionsModelConnection",
      items:  Array< {
        __typename: "ContributionsModel",
        id: string,
        author: string,
        type?: Array< ContributionTag | null > | null,
        description?: string | null,
        link_to?: string | null,
        point_value?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    credibility_score?: number | null,
    involved_projects?: Array< string | null > | null,
    experience_level?: Array< ExperienceTag | null > | null,
    years_of_experience?: number | null,
    user_type?: Array< AccountTag | null > | null,
    user_experiences?:  {
      __typename: "ModelExperienceModelConnection",
      items:  Array< {
        __typename: "ExperienceModel",
        id: string,
        user_id: string,
        org_name: string,
        start_date: string,
        end_date?: string | null,
        description: string,
        lang_tag?: Array< LanguageTag | null > | null,
        dev_type_tag?: Array< DevelopmentTag | null > | null,
        framework_tag?: Array< FrameworkTag | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContributionsModelSubscriptionVariables = {
  filter?: ModelSubscriptionContributionsModelFilterInput | null,
};

export type OnCreateContributionsModelSubscription = {
  onCreateContributionsModel?:  {
    __typename: "ContributionsModel",
    id: string,
    author: string,
    type?: Array< ContributionTag | null > | null,
    description?: string | null,
    link_to?: string | null,
    point_value?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContributionsModelSubscriptionVariables = {
  filter?: ModelSubscriptionContributionsModelFilterInput | null,
};

export type OnUpdateContributionsModelSubscription = {
  onUpdateContributionsModel?:  {
    __typename: "ContributionsModel",
    id: string,
    author: string,
    type?: Array< ContributionTag | null > | null,
    description?: string | null,
    link_to?: string | null,
    point_value?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContributionsModelSubscriptionVariables = {
  filter?: ModelSubscriptionContributionsModelFilterInput | null,
};

export type OnDeleteContributionsModelSubscription = {
  onDeleteContributionsModel?:  {
    __typename: "ContributionsModel",
    id: string,
    author: string,
    type?: Array< ContributionTag | null > | null,
    description?: string | null,
    link_to?: string | null,
    point_value?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateExperienceModelSubscriptionVariables = {
  filter?: ModelSubscriptionExperienceModelFilterInput | null,
};

export type OnCreateExperienceModelSubscription = {
  onCreateExperienceModel?:  {
    __typename: "ExperienceModel",
    id: string,
    user_id: string,
    org_name: string,
    start_date: string,
    end_date?: string | null,
    description: string,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateExperienceModelSubscriptionVariables = {
  filter?: ModelSubscriptionExperienceModelFilterInput | null,
};

export type OnUpdateExperienceModelSubscription = {
  onUpdateExperienceModel?:  {
    __typename: "ExperienceModel",
    id: string,
    user_id: string,
    org_name: string,
    start_date: string,
    end_date?: string | null,
    description: string,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteExperienceModelSubscriptionVariables = {
  filter?: ModelSubscriptionExperienceModelFilterInput | null,
};

export type OnDeleteExperienceModelSubscription = {
  onDeleteExperienceModel?:  {
    __typename: "ExperienceModel",
    id: string,
    user_id: string,
    org_name: string,
    start_date: string,
    end_date?: string | null,
    description: string,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostsModelSubscriptionVariables = {
  filter?: ModelSubscriptionPostsModelFilterInput | null,
};

export type OnCreatePostsModelSubscription = {
  onCreatePostsModel?:  {
    __typename: "PostsModel",
    id: string,
    post_title: string,
    description?: string | null,
    long_description?: string | null,
    project_link?: string | null,
    image_link?: string | null,
    post_date?: string | null,
    userID: string,
    creator_name?: string | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    difficulty_tag?: Array< DifficultyTag | null > | null,
    post_comments?:  {
      __typename: "ModelCommentModelConnection",
      items:  Array< {
        __typename: "CommentModel",
        id: string,
        comment: string,
        profile_image?: string | null,
        comment_date?: string | null,
        parent_comment?: string | null,
        replies?: number | null,
        isReply?: boolean | null,
        postID: string,
        userID: string,
        user_name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    contributor_limit?: number | null,
    contributors?: Array< string | null > | null,
    reported?: boolean | null,
    experience_level?: Array< ExperienceTag | null > | null,
    application?: boolean | null,
    project_chat: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostsModelSubscriptionVariables = {
  filter?: ModelSubscriptionPostsModelFilterInput | null,
};

export type OnUpdatePostsModelSubscription = {
  onUpdatePostsModel?:  {
    __typename: "PostsModel",
    id: string,
    post_title: string,
    description?: string | null,
    long_description?: string | null,
    project_link?: string | null,
    image_link?: string | null,
    post_date?: string | null,
    userID: string,
    creator_name?: string | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    difficulty_tag?: Array< DifficultyTag | null > | null,
    post_comments?:  {
      __typename: "ModelCommentModelConnection",
      items:  Array< {
        __typename: "CommentModel",
        id: string,
        comment: string,
        profile_image?: string | null,
        comment_date?: string | null,
        parent_comment?: string | null,
        replies?: number | null,
        isReply?: boolean | null,
        postID: string,
        userID: string,
        user_name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    contributor_limit?: number | null,
    contributors?: Array< string | null > | null,
    reported?: boolean | null,
    experience_level?: Array< ExperienceTag | null > | null,
    application?: boolean | null,
    project_chat: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostsModelSubscriptionVariables = {
  filter?: ModelSubscriptionPostsModelFilterInput | null,
};

export type OnDeletePostsModelSubscription = {
  onDeletePostsModel?:  {
    __typename: "PostsModel",
    id: string,
    post_title: string,
    description?: string | null,
    long_description?: string | null,
    project_link?: string | null,
    image_link?: string | null,
    post_date?: string | null,
    userID: string,
    creator_name?: string | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    difficulty_tag?: Array< DifficultyTag | null > | null,
    post_comments?:  {
      __typename: "ModelCommentModelConnection",
      items:  Array< {
        __typename: "CommentModel",
        id: string,
        comment: string,
        profile_image?: string | null,
        comment_date?: string | null,
        parent_comment?: string | null,
        replies?: number | null,
        isReply?: boolean | null,
        postID: string,
        userID: string,
        user_name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    contributor_limit?: number | null,
    contributors?: Array< string | null > | null,
    reported?: boolean | null,
    experience_level?: Array< ExperienceTag | null > | null,
    application?: boolean | null,
    project_chat: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateConversationModelSubscriptionVariables = {
  filter?: ModelSubscriptionConversationModelFilterInput | null,
};

export type OnCreateConversationModelSubscription = {
  onCreateConversationModel?:  {
    __typename: "ConversationModel",
    id: string,
    users?:  {
      __typename: "ModelUsersConvoConnection",
      items:  Array< {
        __typename: "UsersConvo",
        id: string,
        usersModelID: string,
        conversationModelID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateConversationModelSubscriptionVariables = {
  filter?: ModelSubscriptionConversationModelFilterInput | null,
};

export type OnUpdateConversationModelSubscription = {
  onUpdateConversationModel?:  {
    __typename: "ConversationModel",
    id: string,
    users?:  {
      __typename: "ModelUsersConvoConnection",
      items:  Array< {
        __typename: "UsersConvo",
        id: string,
        usersModelID: string,
        conversationModelID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteConversationModelSubscriptionVariables = {
  filter?: ModelSubscriptionConversationModelFilterInput | null,
};

export type OnDeleteConversationModelSubscription = {
  onDeleteConversationModel?:  {
    __typename: "ConversationModel",
    id: string,
    users?:  {
      __typename: "ModelUsersConvoConnection",
      items:  Array< {
        __typename: "UsersConvo",
        id: string,
        usersModelID: string,
        conversationModelID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageModelSubscriptionVariables = {
  filter?: ModelSubscriptionMessageModelFilterInput | null,
};

export type OnCreateMessageModelSubscription = {
  onCreateMessageModel?:  {
    __typename: "MessageModel",
    id: string,
    message: string,
    from: string,
    message_date?: string | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageModelSubscriptionVariables = {
  filter?: ModelSubscriptionMessageModelFilterInput | null,
};

export type OnUpdateMessageModelSubscription = {
  onUpdateMessageModel?:  {
    __typename: "MessageModel",
    id: string,
    message: string,
    from: string,
    message_date?: string | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageModelSubscriptionVariables = {
  filter?: ModelSubscriptionMessageModelFilterInput | null,
};

export type OnDeleteMessageModelSubscription = {
  onDeleteMessageModel?:  {
    __typename: "MessageModel",
    id: string,
    message: string,
    from: string,
    message_date?: string | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentModelSubscriptionVariables = {
  filter?: ModelSubscriptionCommentModelFilterInput | null,
};

export type OnCreateCommentModelSubscription = {
  onCreateCommentModel?:  {
    __typename: "CommentModel",
    id: string,
    comment: string,
    profile_image?: string | null,
    comment_date?: string | null,
    parent_comment?: string | null,
    replies?: number | null,
    isReply?: boolean | null,
    postID: string,
    userID: string,
    user_name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentModelSubscriptionVariables = {
  filter?: ModelSubscriptionCommentModelFilterInput | null,
};

export type OnUpdateCommentModelSubscription = {
  onUpdateCommentModel?:  {
    __typename: "CommentModel",
    id: string,
    comment: string,
    profile_image?: string | null,
    comment_date?: string | null,
    parent_comment?: string | null,
    replies?: number | null,
    isReply?: boolean | null,
    postID: string,
    userID: string,
    user_name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentModelSubscriptionVariables = {
  filter?: ModelSubscriptionCommentModelFilterInput | null,
};

export type OnDeleteCommentModelSubscription = {
  onDeleteCommentModel?:  {
    __typename: "CommentModel",
    id: string,
    comment: string,
    profile_image?: string | null,
    comment_date?: string | null,
    parent_comment?: string | null,
    replies?: number | null,
    isReply?: boolean | null,
    postID: string,
    userID: string,
    user_name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUsersConvoSubscriptionVariables = {
  filter?: ModelSubscriptionUsersConvoFilterInput | null,
};

export type OnCreateUsersConvoSubscription = {
  onCreateUsersConvo?:  {
    __typename: "UsersConvo",
    id: string,
    usersModelID: string,
    conversationModelID: string,
    usersModel:  {
      __typename: "UsersModel",
      id: string,
      user_name: string,
      email: string,
      password: string,
      profile_image?: string | null,
      user_posts?:  {
        __typename: "ModelPostsModelConnection",
        nextToken?: string | null,
      } | null,
      user_comments?:  {
        __typename: "ModelCommentModelConnection",
        nextToken?: string | null,
      } | null,
      first_name?: string | null,
      last_name?: string | null,
      user_creation_date?: string | null,
      github_link?: string | null,
      saved_posts?: Array< string | null > | null,
      hide_posts?: Array< string | null > | null,
      messages?:  {
        __typename: "ModelMessageModelConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelUsersConvoConnection",
        nextToken?: string | null,
      } | null,
      lang_tag?: Array< LanguageTag | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      interest_tag?: Array< InterestTag | null > | null,
      size_tag?: Array< SizeTag | null > | null,
      framework_tag?: Array< FrameworkTag | null > | null,
      difficulty_tag?: Array< DifficultyTag | null > | null,
      new_user?: boolean | null,
      contributions?:  {
        __typename: "ModelContributionsModelConnection",
        nextToken?: string | null,
      } | null,
      credibility_score?: number | null,
      involved_projects?: Array< string | null > | null,
      experience_level?: Array< ExperienceTag | null > | null,
      years_of_experience?: number | null,
      user_type?: Array< AccountTag | null > | null,
      user_experiences?:  {
        __typename: "ModelExperienceModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    conversationModel:  {
      __typename: "ConversationModel",
      id: string,
      users?:  {
        __typename: "ModelUsersConvoConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUsersConvoSubscriptionVariables = {
  filter?: ModelSubscriptionUsersConvoFilterInput | null,
};

export type OnUpdateUsersConvoSubscription = {
  onUpdateUsersConvo?:  {
    __typename: "UsersConvo",
    id: string,
    usersModelID: string,
    conversationModelID: string,
    usersModel:  {
      __typename: "UsersModel",
      id: string,
      user_name: string,
      email: string,
      password: string,
      profile_image?: string | null,
      user_posts?:  {
        __typename: "ModelPostsModelConnection",
        nextToken?: string | null,
      } | null,
      user_comments?:  {
        __typename: "ModelCommentModelConnection",
        nextToken?: string | null,
      } | null,
      first_name?: string | null,
      last_name?: string | null,
      user_creation_date?: string | null,
      github_link?: string | null,
      saved_posts?: Array< string | null > | null,
      hide_posts?: Array< string | null > | null,
      messages?:  {
        __typename: "ModelMessageModelConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelUsersConvoConnection",
        nextToken?: string | null,
      } | null,
      lang_tag?: Array< LanguageTag | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      interest_tag?: Array< InterestTag | null > | null,
      size_tag?: Array< SizeTag | null > | null,
      framework_tag?: Array< FrameworkTag | null > | null,
      difficulty_tag?: Array< DifficultyTag | null > | null,
      new_user?: boolean | null,
      contributions?:  {
        __typename: "ModelContributionsModelConnection",
        nextToken?: string | null,
      } | null,
      credibility_score?: number | null,
      involved_projects?: Array< string | null > | null,
      experience_level?: Array< ExperienceTag | null > | null,
      years_of_experience?: number | null,
      user_type?: Array< AccountTag | null > | null,
      user_experiences?:  {
        __typename: "ModelExperienceModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    conversationModel:  {
      __typename: "ConversationModel",
      id: string,
      users?:  {
        __typename: "ModelUsersConvoConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUsersConvoSubscriptionVariables = {
  filter?: ModelSubscriptionUsersConvoFilterInput | null,
};

export type OnDeleteUsersConvoSubscription = {
  onDeleteUsersConvo?:  {
    __typename: "UsersConvo",
    id: string,
    usersModelID: string,
    conversationModelID: string,
    usersModel:  {
      __typename: "UsersModel",
      id: string,
      user_name: string,
      email: string,
      password: string,
      profile_image?: string | null,
      user_posts?:  {
        __typename: "ModelPostsModelConnection",
        nextToken?: string | null,
      } | null,
      user_comments?:  {
        __typename: "ModelCommentModelConnection",
        nextToken?: string | null,
      } | null,
      first_name?: string | null,
      last_name?: string | null,
      user_creation_date?: string | null,
      github_link?: string | null,
      saved_posts?: Array< string | null > | null,
      hide_posts?: Array< string | null > | null,
      messages?:  {
        __typename: "ModelMessageModelConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelUsersConvoConnection",
        nextToken?: string | null,
      } | null,
      lang_tag?: Array< LanguageTag | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      interest_tag?: Array< InterestTag | null > | null,
      size_tag?: Array< SizeTag | null > | null,
      framework_tag?: Array< FrameworkTag | null > | null,
      difficulty_tag?: Array< DifficultyTag | null > | null,
      new_user?: boolean | null,
      contributions?:  {
        __typename: "ModelContributionsModelConnection",
        nextToken?: string | null,
      } | null,
      credibility_score?: number | null,
      involved_projects?: Array< string | null > | null,
      experience_level?: Array< ExperienceTag | null > | null,
      years_of_experience?: number | null,
      user_type?: Array< AccountTag | null > | null,
      user_experiences?:  {
        __typename: "ModelExperienceModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    conversationModel:  {
      __typename: "ConversationModel",
      id: string,
      users?:  {
        __typename: "ModelUsersConvoConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
