/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNewsletterEmailModelInput = {
  id?: string | null,
  email: string,
  _version?: number | null,
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
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateNewsletterEmailModelInput = {
  id: string,
  email?: string | null,
  _version?: number | null,
};

export type DeleteNewsletterEmailModelInput = {
  id: string,
  _version?: number | null,
};

export type CreateConversationModelInput = {
  id?: string | null,
  user_one: string,
  user_two: string,
  messages?: Array< string | null > | null,
  _version?: number | null,
};

export type ModelConversationModelConditionInput = {
  user_one?: ModelIDInput | null,
  user_two?: ModelStringInput | null,
  messages?: ModelIDInput | null,
  and?: Array< ModelConversationModelConditionInput | null > | null,
  or?: Array< ModelConversationModelConditionInput | null > | null,
  not?: ModelConversationModelConditionInput | null,
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

export type ConversationModel = {
  __typename: "ConversationModel",
  id: string,
  user_one: string,
  user_two: string,
  messages?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateConversationModelInput = {
  id: string,
  user_one?: string | null,
  user_two?: string | null,
  messages?: Array< string | null > | null,
  _version?: number | null,
};

export type DeleteConversationModelInput = {
  id: string,
  _version?: number | null,
};

export type CreateMessageModelInput = {
  id?: string | null,
  message: string,
  to: string,
  from: string,
  message_date?: string | null,
  conversationID: string,
  _version?: number | null,
};

export type ModelMessageModelConditionInput = {
  message?: ModelStringInput | null,
  to?: ModelStringInput | null,
  from?: ModelIDInput | null,
  message_date?: ModelStringInput | null,
  conversationID?: ModelIDInput | null,
  and?: Array< ModelMessageModelConditionInput | null > | null,
  or?: Array< ModelMessageModelConditionInput | null > | null,
  not?: ModelMessageModelConditionInput | null,
};

export type MessageModel = {
  __typename: "MessageModel",
  id: string,
  message: string,
  to: string,
  from: string,
  message_date?: string | null,
  conversationID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMessageModelInput = {
  id: string,
  message?: string | null,
  to?: string | null,
  from?: string | null,
  message_date?: string | null,
  conversationID?: string | null,
  _version?: number | null,
};

export type DeleteMessageModelInput = {
  id: string,
  _version?: number | null,
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
  lang_tag?: Array< LanguageTag | null > | null,
  dev_type_tag?: Array< DevelopmentTag | null > | null,
  interest_tag?: Array< InterestTag | null > | null,
  size_tag?: Array< SizeTag | null > | null,
  framework_tag?: Array< FrameworkTag | null > | null,
  _version?: number | null,
};

export enum LanguageTag {
  C_SHARP = "C_SHARP",
  C_PLUS_PLUS = "C_PLUS_PLUS",
  C = "C",
  JAVA = "JAVA",
  PYTHON = "PYTHON",
  TYPESCRIPT = "TYPESCRIPT",
  JAVASCRIPT = "JAVASCRIPT",
  KOTLIN = "KOTLIN",
  SWIFT = "SWIFT",
  RUBY = "RUBY",
  RUST = "RUST",
  SQL = "SQL",
  PHP = "PHP",
  HTML = "HTML",
  CSS = "CSS",
  GO = "GO",
  DART = "DART",
  SCALA = "SCALA",
}


export enum DevelopmentTag {
  FRONTEND = "FRONTEND",
  BACKEND = "BACKEND",
  FULL_STACK = "FULL_STACK",
  DESKTOP = "DESKTOP",
  WEB_DEV = "WEB_DEV",
  DATABASE = "DATABASE",
  MOBILE = "MOBILE",
  CLOUD = "CLOUD",
  DEV_OPS = "DEV_OPS",
  CYBER_SEC = "CYBER_SEC",
}


export enum InterestTag {
  COMMUNICATION = "COMMUNICATION",
  CONNECTING = "CONNECTING",
  ENVIRONMENT = "ENVIRONMENT",
  EDUCATION = "EDUCATION",
  ENTERTAINMENT = "ENTERTAINMENT",
  GAMING = "GAMING",
}


export enum SizeTag {
  LESS_FIVE = "LESS_FIVE",
  MORE_FIVE = "MORE_FIVE",
  MORE_TEN = "MORE_TEN",
  MORE_TWENTY_FIVE = "MORE_TWENTY_FIVE",
  MORE_FIFTY = "MORE_FIFTY",
  MORE_HUND = "MORE_HUND",
}


export enum FrameworkTag {
  REACT = "REACT",
  REACT_NATIVE = "REACT_NATIVE",
  ANGULAR = "ANGULAR",
  VUE = "VUE",
  NODE = "NODE",
  EXPRESS = "EXPRESS",
  WEB_SOCKET_IO = "WEB_SOCKET_IO",
  DJANGO = "DJANGO",
  FLASK = "FLASK",
  MONGO_DB = "MONGO_DB",
  MY_SQL = "MY_SQL",
  POSTGRES_SQL = "POSTGRES_SQL",
  FIREBASE = "FIREBASE",
  AWS = "AWS",
  AZURE = "AZURE",
  HEROKU = "HEROKU",
}


export type ModelPostsModelConditionInput = {
  post_title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  long_description?: ModelStringInput | null,
  project_link?: ModelStringInput | null,
  image_link?: ModelStringInput | null,
  post_date?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  lang_tag?: ModelLanguageTagListInput | null,
  dev_type_tag?: ModelDevelopmentTagListInput | null,
  interest_tag?: ModelInterestTagListInput | null,
  size_tag?: ModelSizeTagListInput | null,
  framework_tag?: ModelFrameworkTagListInput | null,
  and?: Array< ModelPostsModelConditionInput | null > | null,
  or?: Array< ModelPostsModelConditionInput | null > | null,
  not?: ModelPostsModelConditionInput | null,
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
  lang_tag?: Array< LanguageTag | null > | null,
  dev_type_tag?: Array< DevelopmentTag | null > | null,
  interest_tag?: Array< InterestTag | null > | null,
  size_tag?: Array< SizeTag | null > | null,
  framework_tag?: Array< FrameworkTag | null > | null,
  post_comments?: ModelCommentModelConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelCommentModelConnection = {
  __typename: "ModelCommentModelConnection",
  items:  Array<CommentModel | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CommentModel = {
  __typename: "CommentModel",
  id: string,
  comment: string,
  profile_image?: string | null,
  comment_date?: string | null,
  postID: string,
  userID: string,
  user_name: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
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
  lang_tag?: Array< LanguageTag | null > | null,
  dev_type_tag?: Array< DevelopmentTag | null > | null,
  interest_tag?: Array< InterestTag | null > | null,
  size_tag?: Array< SizeTag | null > | null,
  framework_tag?: Array< FrameworkTag | null > | null,
  _version?: number | null,
};

export type DeletePostsModelInput = {
  id: string,
  _version?: number | null,
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
  dahublink?: string | null,
  saved_posts?: Array< string | null > | null,
  hide_posts?: Array< string | null > | null,
  lang_tag?: Array< LanguageTag | null > | null,
  dev_type_tag?: Array< DevelopmentTag | null > | null,
  interest_tag?: Array< InterestTag | null > | null,
  size_tag?: Array< SizeTag | null > | null,
  framework_tag?: Array< FrameworkTag | null > | null,
  _version?: number | null,
};

export type ModelUsersModelConditionInput = {
  user_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  profile_image?: ModelStringInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  user_creation_date?: ModelStringInput | null,
  dahublink?: ModelStringInput | null,
  saved_posts?: ModelIDInput | null,
  hide_posts?: ModelIDInput | null,
  lang_tag?: ModelLanguageTagListInput | null,
  dev_type_tag?: ModelDevelopmentTagListInput | null,
  interest_tag?: ModelInterestTagListInput | null,
  size_tag?: ModelSizeTagListInput | null,
  framework_tag?: ModelFrameworkTagListInput | null,
  and?: Array< ModelUsersModelConditionInput | null > | null,
  or?: Array< ModelUsersModelConditionInput | null > | null,
  not?: ModelUsersModelConditionInput | null,
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
  dahublink?: string | null,
  saved_posts?: Array< string | null > | null,
  hide_posts?: Array< string | null > | null,
  messages?: ModelMessageModelConnection | null,
  conversations?: ModelConversationModelConnection | null,
  lang_tag?: Array< LanguageTag | null > | null,
  dev_type_tag?: Array< DevelopmentTag | null > | null,
  interest_tag?: Array< InterestTag | null > | null,
  size_tag?: Array< SizeTag | null > | null,
  framework_tag?: Array< FrameworkTag | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelPostsModelConnection = {
  __typename: "ModelPostsModelConnection",
  items:  Array<PostsModel | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMessageModelConnection = {
  __typename: "ModelMessageModelConnection",
  items:  Array<MessageModel | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelConversationModelConnection = {
  __typename: "ModelConversationModelConnection",
  items:  Array<ConversationModel | null >,
  nextToken?: string | null,
  startedAt?: number | null,
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
  dahublink?: string | null,
  saved_posts?: Array< string | null > | null,
  hide_posts?: Array< string | null > | null,
  lang_tag?: Array< LanguageTag | null > | null,
  dev_type_tag?: Array< DevelopmentTag | null > | null,
  interest_tag?: Array< InterestTag | null > | null,
  size_tag?: Array< SizeTag | null > | null,
  framework_tag?: Array< FrameworkTag | null > | null,
  _version?: number | null,
};

export type DeleteUsersModelInput = {
  id: string,
  _version?: number | null,
};

export type CreateCommentModelInput = {
  id?: string | null,
  comment: string,
  profile_image?: string | null,
  comment_date?: string | null,
  postID: string,
  userID: string,
  user_name: string,
  _version?: number | null,
};

export type ModelCommentModelConditionInput = {
  comment?: ModelStringInput | null,
  profile_image?: ModelStringInput | null,
  comment_date?: ModelStringInput | null,
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
  postID?: string | null,
  userID?: string | null,
  user_name?: string | null,
  _version?: number | null,
};

export type DeleteCommentModelInput = {
  id: string,
  _version?: number | null,
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
  startedAt?: number | null,
};

export type SearchableNewsletterEmailModelFilterInput = {
  id?: SearchableIDFilterInput | null,
  email?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  _version?: SearchableIntFilterInput | null,
  _deleted?: SearchableBooleanFilterInput | null,
  _lastChangedAt?: SearchableIntFilterInput | null,
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

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null,
  ne?: boolean | null,
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
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
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
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
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

export type ModelConversationModelFilterInput = {
  id?: ModelIDInput | null,
  user_one?: ModelIDInput | null,
  user_two?: ModelStringInput | null,
  messages?: ModelIDInput | null,
  and?: Array< ModelConversationModelFilterInput | null > | null,
  or?: Array< ModelConversationModelFilterInput | null > | null,
  not?: ModelConversationModelFilterInput | null,
};

export type SearchableConversationModelFilterInput = {
  id?: SearchableIDFilterInput | null,
  user_one?: SearchableIDFilterInput | null,
  user_two?: SearchableStringFilterInput | null,
  messages?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  _version?: SearchableIntFilterInput | null,
  _deleted?: SearchableBooleanFilterInput | null,
  _lastChangedAt?: SearchableIntFilterInput | null,
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
  user_one = "user_one",
  user_two = "user_two",
  messages = "messages",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
}


export type SearchableConversationModelAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableConversationModelAggregateField,
};

export enum SearchableConversationModelAggregateField {
  id = "id",
  user_one = "user_one",
  user_two = "user_two",
  messages = "messages",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
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
  to?: ModelStringInput | null,
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
  to?: SearchableStringFilterInput | null,
  from?: SearchableIDFilterInput | null,
  message_date?: SearchableStringFilterInput | null,
  conversationID?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  _version?: SearchableIntFilterInput | null,
  _deleted?: SearchableBooleanFilterInput | null,
  _lastChangedAt?: SearchableIntFilterInput | null,
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
  to = "to",
  from = "from",
  message_date = "message_date",
  conversationID = "conversationID",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
}


export type SearchableMessageModelAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableMessageModelAggregateField,
};

export enum SearchableMessageModelAggregateField {
  id = "id",
  message = "message",
  to = "to",
  from = "from",
  message_date = "message_date",
  conversationID = "conversationID",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
}


export type SearchableMessageModelConnection = {
  __typename: "SearchableMessageModelConnection",
  items:  Array<MessageModel | null >,
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
  lang_tag?: ModelLanguageTagListInput | null,
  dev_type_tag?: ModelDevelopmentTagListInput | null,
  interest_tag?: ModelInterestTagListInput | null,
  size_tag?: ModelSizeTagListInput | null,
  framework_tag?: ModelFrameworkTagListInput | null,
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
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  _version?: SearchableIntFilterInput | null,
  _deleted?: SearchableBooleanFilterInput | null,
  _lastChangedAt?: SearchableIntFilterInput | null,
  lang_tag?: SearchableStringFilterInput | null,
  dev_type_tag?: SearchableStringFilterInput | null,
  interest_tag?: SearchableStringFilterInput | null,
  size_tag?: SearchableStringFilterInput | null,
  framework_tag?: SearchableStringFilterInput | null,
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
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
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
  lang_tag = "lang_tag",
  dev_type_tag = "dev_type_tag",
  interest_tag = "interest_tag",
  size_tag = "size_tag",
  framework_tag = "framework_tag",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
}


export type SearchablePostsModelConnection = {
  __typename: "SearchablePostsModelConnection",
  items:  Array<PostsModel | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
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
  dahublink?: ModelStringInput | null,
  saved_posts?: ModelIDInput | null,
  hide_posts?: ModelIDInput | null,
  lang_tag?: ModelLanguageTagListInput | null,
  dev_type_tag?: ModelDevelopmentTagListInput | null,
  interest_tag?: ModelInterestTagListInput | null,
  size_tag?: ModelSizeTagListInput | null,
  framework_tag?: ModelFrameworkTagListInput | null,
  and?: Array< ModelUsersModelFilterInput | null > | null,
  or?: Array< ModelUsersModelFilterInput | null > | null,
  not?: ModelUsersModelFilterInput | null,
};

export type ModelUsersModelConnection = {
  __typename: "ModelUsersModelConnection",
  items:  Array<UsersModel | null >,
  nextToken?: string | null,
  startedAt?: number | null,
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
  dahublink?: SearchableStringFilterInput | null,
  saved_posts?: SearchableIDFilterInput | null,
  hide_posts?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  _version?: SearchableIntFilterInput | null,
  _deleted?: SearchableBooleanFilterInput | null,
  _lastChangedAt?: SearchableIntFilterInput | null,
  lang_tag?: SearchableStringFilterInput | null,
  dev_type_tag?: SearchableStringFilterInput | null,
  interest_tag?: SearchableStringFilterInput | null,
  size_tag?: SearchableStringFilterInput | null,
  framework_tag?: SearchableStringFilterInput | null,
  and?: Array< SearchableUsersModelFilterInput | null > | null,
  or?: Array< SearchableUsersModelFilterInput | null > | null,
  not?: SearchableUsersModelFilterInput | null,
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
  dahublink = "dahublink",
  saved_posts = "saved_posts",
  hide_posts = "hide_posts",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
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
  dahublink = "dahublink",
  saved_posts = "saved_posts",
  hide_posts = "hide_posts",
  lang_tag = "lang_tag",
  dev_type_tag = "dev_type_tag",
  interest_tag = "interest_tag",
  size_tag = "size_tag",
  framework_tag = "framework_tag",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
}


export type SearchableUsersModelConnection = {
  __typename: "SearchableUsersModelConnection",
  items:  Array<UsersModel | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type ModelCommentModelFilterInput = {
  id?: ModelIDInput | null,
  comment?: ModelStringInput | null,
  profile_image?: ModelStringInput | null,
  comment_date?: ModelStringInput | null,
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
  postID?: SearchableIDFilterInput | null,
  userID?: SearchableIDFilterInput | null,
  user_name?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  _version?: SearchableIntFilterInput | null,
  _deleted?: SearchableBooleanFilterInput | null,
  _lastChangedAt?: SearchableIntFilterInput | null,
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
  postID = "postID",
  userID = "userID",
  user_name = "user_name",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
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
  postID = "postID",
  userID = "userID",
  user_name = "user_name",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
}


export type SearchableCommentModelConnection = {
  __typename: "SearchableCommentModelConnection",
  items:  Array<CommentModel | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
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

export type ModelSubscriptionConversationModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  user_one?: ModelSubscriptionIDInput | null,
  user_two?: ModelSubscriptionStringInput | null,
  messages?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionConversationModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionConversationModelFilterInput | null > | null,
};

export type ModelSubscriptionMessageModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  to?: ModelSubscriptionStringInput | null,
  from?: ModelSubscriptionIDInput | null,
  message_date?: ModelSubscriptionStringInput | null,
  conversationID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMessageModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageModelFilterInput | null > | null,
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
  lang_tag?: ModelSubscriptionStringInput | null,
  dev_type_tag?: ModelSubscriptionStringInput | null,
  interest_tag?: ModelSubscriptionStringInput | null,
  size_tag?: ModelSubscriptionStringInput | null,
  framework_tag?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostsModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostsModelFilterInput | null > | null,
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
  dahublink?: ModelSubscriptionStringInput | null,
  saved_posts?: ModelSubscriptionIDInput | null,
  hide_posts?: ModelSubscriptionIDInput | null,
  lang_tag?: ModelSubscriptionStringInput | null,
  dev_type_tag?: ModelSubscriptionStringInput | null,
  interest_tag?: ModelSubscriptionStringInput | null,
  size_tag?: ModelSubscriptionStringInput | null,
  framework_tag?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUsersModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionUsersModelFilterInput | null > | null,
};

export type ModelSubscriptionCommentModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  comment?: ModelSubscriptionStringInput | null,
  profile_image?: ModelSubscriptionStringInput | null,
  comment_date?: ModelSubscriptionStringInput | null,
  postID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  user_name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommentModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentModelFilterInput | null > | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    user_one: string,
    user_two: string,
    messages?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    user_one: string,
    user_two: string,
    messages?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    user_one: string,
    user_two: string,
    messages?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    to: string,
    from: string,
    message_date?: string | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    to: string,
    from: string,
    message_date?: string | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    to: string,
    from: string,
    message_date?: string | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    post_comments?:  {
      __typename: "ModelCommentModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    post_comments?:  {
      __typename: "ModelCommentModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    post_comments?:  {
      __typename: "ModelCommentModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user_comments?:  {
      __typename: "ModelCommentModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    dahublink?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user_comments?:  {
      __typename: "ModelCommentModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    dahublink?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user_comments?:  {
      __typename: "ModelCommentModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    dahublink?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    postID: string,
    userID: string,
    user_name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    postID: string,
    userID: string,
    user_name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    postID: string,
    userID: string,
    user_name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncNewsletterEmailModelsQueryVariables = {
  filter?: ModelNewsletterEmailModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncNewsletterEmailModelsQuery = {
  syncNewsletterEmailModels?:  {
    __typename: "ModelNewsletterEmailModelConnection",
    items:  Array< {
      __typename: "NewsletterEmailModel",
      id: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
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
    user_one: string,
    user_two: string,
    messages?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      user_one: string,
      user_two: string,
      messages?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncConversationModelsQueryVariables = {
  filter?: ModelConversationModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncConversationModelsQuery = {
  syncConversationModels?:  {
    __typename: "ModelConversationModelConnection",
    items:  Array< {
      __typename: "ConversationModel",
      id: string,
      user_one: string,
      user_two: string,
      messages?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      user_one: string,
      user_two: string,
      messages?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
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
    to: string,
    from: string,
    message_date?: string | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      to: string,
      from: string,
      message_date?: string | null,
      conversationID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMessageModelsQueryVariables = {
  filter?: ModelMessageModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMessageModelsQuery = {
  syncMessageModels?:  {
    __typename: "ModelMessageModelConnection",
    items:  Array< {
      __typename: "MessageModel",
      id: string,
      message: string,
      to: string,
      from: string,
      message_date?: string | null,
      conversationID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      to: string,
      from: string,
      message_date?: string | null,
      conversationID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
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
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    post_comments?:  {
      __typename: "ModelCommentModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      lang_tag?: Array< LanguageTag | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      interest_tag?: Array< InterestTag | null > | null,
      size_tag?: Array< SizeTag | null > | null,
      framework_tag?: Array< FrameworkTag | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPostsModelsQueryVariables = {
  filter?: ModelPostsModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPostsModelsQuery = {
  syncPostsModels?:  {
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
      lang_tag?: Array< LanguageTag | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      interest_tag?: Array< InterestTag | null > | null,
      size_tag?: Array< SizeTag | null > | null,
      framework_tag?: Array< FrameworkTag | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      lang_tag?: Array< LanguageTag | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      interest_tag?: Array< InterestTag | null > | null,
      size_tag?: Array< SizeTag | null > | null,
      framework_tag?: Array< FrameworkTag | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
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
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user_comments?:  {
      __typename: "ModelCommentModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    dahublink?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      first_name?: string | null,
      last_name?: string | null,
      user_creation_date?: string | null,
      dahublink?: string | null,
      saved_posts?: Array< string | null > | null,
      hide_posts?: Array< string | null > | null,
      lang_tag?: Array< LanguageTag | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      interest_tag?: Array< InterestTag | null > | null,
      size_tag?: Array< SizeTag | null > | null,
      framework_tag?: Array< FrameworkTag | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersModelsQueryVariables = {
  filter?: ModelUsersModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersModelsQuery = {
  syncUsersModels?:  {
    __typename: "ModelUsersModelConnection",
    items:  Array< {
      __typename: "UsersModel",
      id: string,
      user_name: string,
      email: string,
      password: string,
      profile_image?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      user_creation_date?: string | null,
      dahublink?: string | null,
      saved_posts?: Array< string | null > | null,
      hide_posts?: Array< string | null > | null,
      lang_tag?: Array< LanguageTag | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      interest_tag?: Array< InterestTag | null > | null,
      size_tag?: Array< SizeTag | null > | null,
      framework_tag?: Array< FrameworkTag | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      first_name?: string | null,
      last_name?: string | null,
      user_creation_date?: string | null,
      dahublink?: string | null,
      saved_posts?: Array< string | null > | null,
      hide_posts?: Array< string | null > | null,
      lang_tag?: Array< LanguageTag | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      interest_tag?: Array< InterestTag | null > | null,
      size_tag?: Array< SizeTag | null > | null,
      framework_tag?: Array< FrameworkTag | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
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
    postID: string,
    userID: string,
    user_name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      postID: string,
      userID: string,
      user_name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCommentModelsQueryVariables = {
  filter?: ModelCommentModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCommentModelsQuery = {
  syncCommentModels?:  {
    __typename: "ModelCommentModelConnection",
    items:  Array< {
      __typename: "CommentModel",
      id: string,
      comment: string,
      profile_image?: string | null,
      comment_date?: string | null,
      postID: string,
      userID: string,
      user_name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      postID: string,
      userID: string,
      user_name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateConversationModelSubscriptionVariables = {
  filter?: ModelSubscriptionConversationModelFilterInput | null,
};

export type OnCreateConversationModelSubscription = {
  onCreateConversationModel?:  {
    __typename: "ConversationModel",
    id: string,
    user_one: string,
    user_two: string,
    messages?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateConversationModelSubscriptionVariables = {
  filter?: ModelSubscriptionConversationModelFilterInput | null,
};

export type OnUpdateConversationModelSubscription = {
  onUpdateConversationModel?:  {
    __typename: "ConversationModel",
    id: string,
    user_one: string,
    user_two: string,
    messages?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteConversationModelSubscriptionVariables = {
  filter?: ModelSubscriptionConversationModelFilterInput | null,
};

export type OnDeleteConversationModelSubscription = {
  onDeleteConversationModel?:  {
    __typename: "ConversationModel",
    id: string,
    user_one: string,
    user_two: string,
    messages?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    to: string,
    from: string,
    message_date?: string | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    to: string,
    from: string,
    message_date?: string | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    to: string,
    from: string,
    message_date?: string | null,
    conversationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    post_comments?:  {
      __typename: "ModelCommentModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    post_comments?:  {
      __typename: "ModelCommentModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    post_comments?:  {
      __typename: "ModelCommentModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user_comments?:  {
      __typename: "ModelCommentModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    dahublink?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user_comments?:  {
      __typename: "ModelCommentModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    dahublink?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user_comments?:  {
      __typename: "ModelCommentModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    dahublink?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    lang_tag?: Array< LanguageTag | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    framework_tag?: Array< FrameworkTag | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    postID: string,
    userID: string,
    user_name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    postID: string,
    userID: string,
    user_name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    postID: string,
    userID: string,
    user_name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
