/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostsModelInput = {
  id?: string | null,
  post_title: string,
  description?: string | null,
  project_link?: string | null,
  image_link?: string | null,
  post_date?: string | null,
  userID: string,
  lang_tag?: Array< LanguageEnum | null > | null,
  dev_type_tag?: Array< DevelopmentTag | null > | null,
  interest_tag?: Array< InterestTag | null > | null,
  size_tag?: Array< SizeTag | null > | null,
  dahublink?: string | null,
  _version?: number | null,
};

export enum LanguageEnum {
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
  COMMUNICATE = "COMMUNICATE",
  CONNECT = "CONNECT",
  ENVIRON = "ENVIRON",
  EDU = "EDU",
  ENTERTAIN = "ENTERTAIN",
  GAME = "GAME",
}


export enum SizeTag {
  LESS_FIVE = "LESS_FIVE",
  MORE_FIVE = "MORE_FIVE",
  LESS_TEN = "LESS_TEN",
  MORE_TEN = "MORE_TEN",
  MORE_TWENTY_FIVE = "MORE_TWENTY_FIVE",
  MORE_FIFTY = "MORE_FIFTY",
  HUNDRED = "HUNDRED",
  MORE_HUND = "MORE_HUND",
}


export type ModelPostsModelConditionInput = {
  post_title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  project_link?: ModelStringInput | null,
  image_link?: ModelStringInput | null,
  post_date?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  lang_tag?: ModelLanguageEnumListInput | null,
  dev_type_tag?: ModelDevelopmentTagListInput | null,
  interest_tag?: ModelInterestTagListInput | null,
  size_tag?: ModelSizeTagListInput | null,
  dahublink?: ModelStringInput | null,
  and?: Array< ModelPostsModelConditionInput | null > | null,
  or?: Array< ModelPostsModelConditionInput | null > | null,
  not?: ModelPostsModelConditionInput | null,
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

export type ModelLanguageEnumListInput = {
  eq?: Array< LanguageEnum | null > | null,
  ne?: Array< LanguageEnum | null > | null,
  contains?: LanguageEnum | null,
  notContains?: LanguageEnum | null,
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

export type PostsModel = {
  __typename: "PostsModel",
  id: string,
  post_title: string,
  description?: string | null,
  project_link?: string | null,
  image_link?: string | null,
  post_date?: string | null,
  userID: string,
  lang_tag?: Array< LanguageEnum | null > | null,
  dev_type_tag?: Array< DevelopmentTag | null > | null,
  interest_tag?: Array< InterestTag | null > | null,
  size_tag?: Array< SizeTag | null > | null,
  dahublink?: string | null,
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
  project_link?: string | null,
  image_link?: string | null,
  post_date?: string | null,
  userID?: string | null,
  lang_tag?: Array< LanguageEnum | null > | null,
  dev_type_tag?: Array< DevelopmentTag | null > | null,
  interest_tag?: Array< InterestTag | null > | null,
  size_tag?: Array< SizeTag | null > | null,
  dahublink?: string | null,
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
  first_name?: string | null,
  last_name?: string | null,
  user_creation_date?: string | null,
  dahublink?: string | null,
  saved_posts?: Array< string | null > | null,
  hide_posts?: Array< string | null > | null,
  _version?: number | null,
};

export type ModelUsersModelConditionInput = {
  user_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  user_creation_date?: ModelStringInput | null,
  dahublink?: ModelStringInput | null,
  saved_posts?: ModelIDInput | null,
  hide_posts?: ModelIDInput | null,
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
  user_posts?: ModelPostsModelConnection | null,
  first_name?: string | null,
  last_name?: string | null,
  user_creation_date?: string | null,
  dahublink?: string | null,
  saved_posts?: Array< string | null > | null,
  hide_posts?: Array< string | null > | null,
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

export type UpdateUsersModelInput = {
  id: string,
  user_name?: string | null,
  email?: string | null,
  password?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  user_creation_date?: string | null,
  dahublink?: string | null,
  saved_posts?: Array< string | null > | null,
  hide_posts?: Array< string | null > | null,
  _version?: number | null,
};

export type DeleteUsersModelInput = {
  id: string,
  _version?: number | null,
};

export type ModelPostsModelFilterInput = {
  id?: ModelIDInput | null,
  post_title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  project_link?: ModelStringInput | null,
  image_link?: ModelStringInput | null,
  post_date?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  lang_tag?: ModelLanguageEnumListInput | null,
  dev_type_tag?: ModelDevelopmentTagListInput | null,
  interest_tag?: ModelInterestTagListInput | null,
  size_tag?: ModelSizeTagListInput | null,
  dahublink?: ModelStringInput | null,
  and?: Array< ModelPostsModelFilterInput | null > | null,
  or?: Array< ModelPostsModelFilterInput | null > | null,
  not?: ModelPostsModelFilterInput | null,
};

export type ModelUsersModelFilterInput = {
  id?: ModelIDInput | null,
  user_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  user_creation_date?: ModelStringInput | null,
  dahublink?: ModelStringInput | null,
  saved_posts?: ModelIDInput | null,
  hide_posts?: ModelIDInput | null,
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

export type ModelSubscriptionPostsModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  post_title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  project_link?: ModelSubscriptionStringInput | null,
  image_link?: ModelSubscriptionStringInput | null,
  post_date?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  lang_tag?: ModelSubscriptionStringInput | null,
  dev_type_tag?: ModelSubscriptionStringInput | null,
  interest_tag?: ModelSubscriptionStringInput | null,
  size_tag?: ModelSubscriptionStringInput | null,
  dahublink?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostsModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostsModelFilterInput | null > | null,
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
  first_name?: ModelSubscriptionStringInput | null,
  last_name?: ModelSubscriptionStringInput | null,
  user_creation_date?: ModelSubscriptionStringInput | null,
  dahublink?: ModelSubscriptionStringInput | null,
  saved_posts?: ModelSubscriptionIDInput | null,
  hide_posts?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUsersModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionUsersModelFilterInput | null > | null,
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
    project_link?: string | null,
    image_link?: string | null,
    post_date?: string | null,
    userID: string,
    lang_tag?: Array< LanguageEnum | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    dahublink?: string | null,
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
    project_link?: string | null,
    image_link?: string | null,
    post_date?: string | null,
    userID: string,
    lang_tag?: Array< LanguageEnum | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    dahublink?: string | null,
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
    project_link?: string | null,
    image_link?: string | null,
    post_date?: string | null,
    userID: string,
    lang_tag?: Array< LanguageEnum | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    dahublink?: string | null,
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
    user_posts?:  {
      __typename: "ModelPostsModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    dahublink?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
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
    user_posts?:  {
      __typename: "ModelPostsModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    dahublink?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
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
    user_posts?:  {
      __typename: "ModelPostsModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    dahublink?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    project_link?: string | null,
    image_link?: string | null,
    post_date?: string | null,
    userID: string,
    lang_tag?: Array< LanguageEnum | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    dahublink?: string | null,
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
      project_link?: string | null,
      image_link?: string | null,
      post_date?: string | null,
      userID: string,
      lang_tag?: Array< LanguageEnum | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      interest_tag?: Array< InterestTag | null > | null,
      size_tag?: Array< SizeTag | null > | null,
      dahublink?: string | null,
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
      project_link?: string | null,
      image_link?: string | null,
      post_date?: string | null,
      userID: string,
      lang_tag?: Array< LanguageEnum | null > | null,
      dev_type_tag?: Array< DevelopmentTag | null > | null,
      interest_tag?: Array< InterestTag | null > | null,
      size_tag?: Array< SizeTag | null > | null,
      dahublink?: string | null,
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
    user_posts?:  {
      __typename: "ModelPostsModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    dahublink?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
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
      first_name?: string | null,
      last_name?: string | null,
      user_creation_date?: string | null,
      dahublink?: string | null,
      saved_posts?: Array< string | null > | null,
      hide_posts?: Array< string | null > | null,
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
      first_name?: string | null,
      last_name?: string | null,
      user_creation_date?: string | null,
      dahublink?: string | null,
      saved_posts?: Array< string | null > | null,
      hide_posts?: Array< string | null > | null,
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

export type OnCreatePostsModelSubscriptionVariables = {
  filter?: ModelSubscriptionPostsModelFilterInput | null,
};

export type OnCreatePostsModelSubscription = {
  onCreatePostsModel?:  {
    __typename: "PostsModel",
    id: string,
    post_title: string,
    description?: string | null,
    project_link?: string | null,
    image_link?: string | null,
    post_date?: string | null,
    userID: string,
    lang_tag?: Array< LanguageEnum | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    dahublink?: string | null,
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
    project_link?: string | null,
    image_link?: string | null,
    post_date?: string | null,
    userID: string,
    lang_tag?: Array< LanguageEnum | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    dahublink?: string | null,
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
    project_link?: string | null,
    image_link?: string | null,
    post_date?: string | null,
    userID: string,
    lang_tag?: Array< LanguageEnum | null > | null,
    dev_type_tag?: Array< DevelopmentTag | null > | null,
    interest_tag?: Array< InterestTag | null > | null,
    size_tag?: Array< SizeTag | null > | null,
    dahublink?: string | null,
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
    user_posts?:  {
      __typename: "ModelPostsModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    dahublink?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
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
    user_posts?:  {
      __typename: "ModelPostsModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    dahublink?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
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
    user_posts?:  {
      __typename: "ModelPostsModelConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    first_name?: string | null,
    last_name?: string | null,
    user_creation_date?: string | null,
    dahublink?: string | null,
    saved_posts?: Array< string | null > | null,
    hide_posts?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
