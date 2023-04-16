import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum SizeTag {
  LESS_FIVE = "LESS_FIVE",
  MORE_FIVE = "MORE_FIVE",
  MORE_TEN = "MORE_TEN",
  MORE_TWENTY_FIVE = "MORE_TWENTY_FIVE",
  MORE_FIFTY = "MORE_FIFTY",
  MORE_HUND = "MORE_HUND"
}

export enum InterestTag {
  COMMUNICATION = "COMMUNICATION",
  CONNECTING = "CONNECTING",
  ENVIRONMENT = "ENVIRONMENT",
  EDUCATION = "EDUCATION",
  ENTERTAINMENT = "ENTERTAINMENT",
  GAMING = "GAMING"
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
  SCALA = "SCALA"
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
  HEROKU = "HEROKU"
}

type NewsletterEmailModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessageModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostsModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerNewsletterEmailModel = {
  readonly id: string;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNewsletterEmailModel = {
  readonly id: string;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NewsletterEmailModel = LazyLoading extends LazyLoadingDisabled ? EagerNewsletterEmailModel : LazyNewsletterEmailModel

export declare const NewsletterEmailModel: (new (init: ModelInit<NewsletterEmailModel, NewsletterEmailModelMetaData>) => NewsletterEmailModel) & {
  copyOf(source: NewsletterEmailModel, mutator: (draft: MutableModel<NewsletterEmailModel, NewsletterEmailModelMetaData>) => MutableModel<NewsletterEmailModel, NewsletterEmailModelMetaData> | void): NewsletterEmailModel;
}

type EagerMessageModel = {
  readonly id: string;
  readonly message: string;
  readonly to: string;
  readonly from: string;
  readonly message_date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessageModel = {
  readonly id: string;
  readonly message: string;
  readonly to: string;
  readonly from: string;
  readonly message_date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MessageModel = LazyLoading extends LazyLoadingDisabled ? EagerMessageModel : LazyMessageModel

export declare const MessageModel: (new (init: ModelInit<MessageModel, MessageModelMetaData>) => MessageModel) & {
  copyOf(source: MessageModel, mutator: (draft: MutableModel<MessageModel, MessageModelMetaData>) => MutableModel<MessageModel, MessageModelMetaData> | void): MessageModel;
}

type EagerPostsModel = {
  readonly id: string;
  readonly post_title: string;
  readonly description?: string | null;
  readonly long_description?: string | null;
  readonly project_link?: string | null;
  readonly image_link?: string | null;
  readonly post_date?: string | null;
  readonly userID: string;
  readonly lang_tag?: (LanguageTag | null)[] | keyof typeof LanguageTag | null;
  readonly dev_type_tag?: (DevelopmentTag | null)[] | keyof typeof DevelopmentTag | null;
  readonly interest_tag?: (InterestTag | null)[] | keyof typeof InterestTag | null;
  readonly size_tag?: (SizeTag | null)[] | keyof typeof SizeTag | null;
  readonly framework_tag?: (FrameworkTag | null)[] | keyof typeof FrameworkTag | null;
  readonly post_comments?: (CommentModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPostsModel = {
  readonly id: string;
  readonly post_title: string;
  readonly description?: string | null;
  readonly long_description?: string | null;
  readonly project_link?: string | null;
  readonly image_link?: string | null;
  readonly post_date?: string | null;
  readonly userID: string;
  readonly lang_tag?: (LanguageTag | null)[] | keyof typeof LanguageTag | null;
  readonly dev_type_tag?: (DevelopmentTag | null)[] | keyof typeof DevelopmentTag | null;
  readonly interest_tag?: (InterestTag | null)[] | keyof typeof InterestTag | null;
  readonly size_tag?: (SizeTag | null)[] | keyof typeof SizeTag | null;
  readonly framework_tag?: (FrameworkTag | null)[] | keyof typeof FrameworkTag | null;
  readonly post_comments: AsyncCollection<CommentModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PostsModel = LazyLoading extends LazyLoadingDisabled ? EagerPostsModel : LazyPostsModel

export declare const PostsModel: (new (init: ModelInit<PostsModel, PostsModelMetaData>) => PostsModel) & {
  copyOf(source: PostsModel, mutator: (draft: MutableModel<PostsModel, PostsModelMetaData>) => MutableModel<PostsModel, PostsModelMetaData> | void): PostsModel;
}

type EagerCommentModel = {
  readonly id: string;
  readonly comment: string;
  readonly profile_image?: string | null;
  readonly comment_date?: string | null;
  readonly postID: string;
  readonly userID: string;
  readonly user_name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCommentModel = {
  readonly id: string;
  readonly comment: string;
  readonly profile_image?: string | null;
  readonly comment_date?: string | null;
  readonly postID: string;
  readonly userID: string;
  readonly user_name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CommentModel = LazyLoading extends LazyLoadingDisabled ? EagerCommentModel : LazyCommentModel

export declare const CommentModel: (new (init: ModelInit<CommentModel, CommentModelMetaData>) => CommentModel) & {
  copyOf(source: CommentModel, mutator: (draft: MutableModel<CommentModel, CommentModelMetaData>) => MutableModel<CommentModel, CommentModelMetaData> | void): CommentModel;
}

type EagerUsersModel = {
  readonly id: string;
  readonly user_name: string;
  readonly email: string;
  readonly password: string;
  readonly profile_image?: string | null;
  readonly user_posts?: (PostsModel | null)[] | null;
  readonly user_comments?: (CommentModel | null)[] | null;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly user_creation_date?: string | null;
  readonly dahublink?: string | null;
  readonly saved_posts?: (string | null)[] | null;
  readonly hide_posts?: (string | null)[] | null;
  readonly messages?: (MessageModel | null)[] | null;
  readonly lang_tag?: (LanguageTag | null)[] | keyof typeof LanguageTag | null;
  readonly dev_type_tag?: (DevelopmentTag | null)[] | keyof typeof DevelopmentTag | null;
  readonly interest_tag?: (InterestTag | null)[] | keyof typeof InterestTag | null;
  readonly size_tag?: (SizeTag | null)[] | keyof typeof SizeTag | null;
  readonly framework_tag?: (FrameworkTag | null)[] | keyof typeof FrameworkTag | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsersModel = {
  readonly id: string;
  readonly user_name: string;
  readonly email: string;
  readonly password: string;
  readonly profile_image?: string | null;
  readonly user_posts: AsyncCollection<PostsModel>;
  readonly user_comments: AsyncCollection<CommentModel>;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly user_creation_date?: string | null;
  readonly dahublink?: string | null;
  readonly saved_posts?: (string | null)[] | null;
  readonly hide_posts?: (string | null)[] | null;
  readonly messages: AsyncCollection<MessageModel>;
  readonly lang_tag?: (LanguageTag | null)[] | keyof typeof LanguageTag | null;
  readonly dev_type_tag?: (DevelopmentTag | null)[] | keyof typeof DevelopmentTag | null;
  readonly interest_tag?: (InterestTag | null)[] | keyof typeof InterestTag | null;
  readonly size_tag?: (SizeTag | null)[] | keyof typeof SizeTag | null;
  readonly framework_tag?: (FrameworkTag | null)[] | keyof typeof FrameworkTag | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsersModel = LazyLoading extends LazyLoadingDisabled ? EagerUsersModel : LazyUsersModel

export declare const UsersModel: (new (init: ModelInit<UsersModel, UsersModelMetaData>) => UsersModel) & {
  copyOf(source: UsersModel, mutator: (draft: MutableModel<UsersModel, UsersModelMetaData>) => MutableModel<UsersModel, UsersModelMetaData> | void): UsersModel;
}