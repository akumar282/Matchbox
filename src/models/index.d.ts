import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum SizeTag {
  LESS_FIVE = "LESS_FIVE",
  MORE_FIVE = "MORE_FIVE",
  LESS_TEN = "LESS_TEN",
  MORE_TEN = "MORE_TEN",
  MORE_TWENTY_FIVE = "MORE_TWENTY_FIVE",
  MORE_FIFTY = "MORE_FIFTY",
  HUNDRED = "HUNDRED",
  MORE_HUND = "MORE_HUND"
}

export enum InterestTag {
  COMMUNICATE = "COMMUNICATE",
  CONNECT = "CONNECT",
  ENVIRON = "ENVIRON",
  EDU = "EDU",
  ENTERTAIN = "ENTERTAIN",
  GAME = "GAME"
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
  CYBER_SEC = "CYBER_SEC"
}

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
  SQL = "SQL"
}

type PostsModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerPostsModel = {
  readonly id: string;
  readonly post_title: string;
  readonly description?: string | null;
  readonly project_link?: string | null;
  readonly image_link?: string | null;
  readonly post_date?: string | null;
  readonly userID: string;
  readonly lang_tag?: (LanguageEnum | null)[] | keyof typeof LanguageEnum | null;
  readonly dev_type_tag?: (DevelopmentTag | null)[] | keyof typeof DevelopmentTag | null;
  readonly interest_tag?: (InterestTag | null)[] | keyof typeof InterestTag | null;
  readonly size_tag?: (SizeTag | null)[] | keyof typeof SizeTag | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPostsModel = {
  readonly id: string;
  readonly post_title: string;
  readonly description?: string | null;
  readonly project_link?: string | null;
  readonly image_link?: string | null;
  readonly post_date?: string | null;
  readonly userID: string;
  readonly lang_tag?: (LanguageEnum | null)[] | keyof typeof LanguageEnum | null;
  readonly dev_type_tag?: (DevelopmentTag | null)[] | keyof typeof DevelopmentTag | null;
  readonly interest_tag?: (InterestTag | null)[] | keyof typeof InterestTag | null;
  readonly size_tag?: (SizeTag | null)[] | keyof typeof SizeTag | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PostsModel = LazyLoading extends LazyLoadingDisabled ? EagerPostsModel : LazyPostsModel

export declare const PostsModel: (new (init: ModelInit<PostsModel, PostsModelMetaData>) => PostsModel) & {
  copyOf(source: PostsModel, mutator: (draft: MutableModel<PostsModel, PostsModelMetaData>) => MutableModel<PostsModel, PostsModelMetaData> | void): PostsModel;
}

type EagerUsersModel = {
  readonly id: string;
  readonly user_name: string;
  readonly email: string;
  readonly password: string;
  readonly user_posts?: (PostsModel | null)[] | null;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly user_creation_date?: string | null;
  readonly dahublink?: string | null;
  readonly saved_posts?: (string | null)[] | null;
  readonly hide_posts?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsersModel = {
  readonly id: string;
  readonly user_name: string;
  readonly email: string;
  readonly password: string;
  readonly user_posts: AsyncCollection<PostsModel>;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly user_creation_date?: string | null;
  readonly dahublink?: string | null;
  readonly saved_posts?: (string | null)[] | null;
  readonly hide_posts?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsersModel = LazyLoading extends LazyLoadingDisabled ? EagerUsersModel : LazyUsersModel

export declare const UsersModel: (new (init: ModelInit<UsersModel, UsersModelMetaData>) => UsersModel) & {
  copyOf(source: UsersModel, mutator: (draft: MutableModel<UsersModel, UsersModelMetaData>) => MutableModel<UsersModel, UsersModelMetaData> | void): UsersModel;
}