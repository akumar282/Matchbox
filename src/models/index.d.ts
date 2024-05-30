import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum SizeTag {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE"
}

export enum InterestTag {
  COMMUNICATION = "COMMUNICATION",
  ENVIRONMENT = "ENVIRONMENT",
  EDUCATION = "EDUCATION",
  ENTERTAINMENT = "ENTERTAINMENT",
  GAMING = "GAMING",
  HEALTHCARE = "HEALTHCARE",
  LIFESTYLE = "LIFESTYLE"
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
  CYBERSECURITY = "CYBERSECURITY"
}

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
  HANDLEBARS = "HANDLEBARS"
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
  WEB2_PY = "WEB2PY",
  APACHE_PLAY = "APACHE_PLAY"
}

export enum DifficultyTag {
  GOOD_FIRST_PROJECT = "GOOD_FIRST_PROJECT",
  EXPERIENCED_CONTRIBUTOR = "EXPERIENCED_CONTRIBUTOR",
  EXPERT = "EXPERT"
}

export enum ExperienceTag {
  BEGINNER = "BEGINNER",
  MINIMAL_EXPERIENCE = "MINIMAL_EXPERIENCE",
  EXPERIENCED_CONTRIBUTOR = "EXPERIENCED_CONTRIBUTOR",
  EXPERT = "EXPERT"
}

export enum AccountTag {
  DEVELOPER = "DEVELOPER",
  ORGANIZATION = "ORGANIZATION"
}

export enum ContributionTag {
  PULL_REQUEST = "PULL_REQUEST",
  ISSUE = "ISSUE",
  COMMENT = "COMMENT",
  REVIEW = "REVIEW"
}

type NewsletterEmailModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ContributionsModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ExperienceModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostsModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ConversationModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessageModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersConvoMetaData = {
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
  readonly github_link?: string | null;
  readonly saved_posts?: (string | null)[] | null;
  readonly hide_posts?: (string | null)[] | null;
  readonly messages?: (MessageModel | null)[] | null;
  readonly conversations?: (UsersConvo | null)[] | null;
  readonly lang_tag?: (LanguageTag | null)[] | keyof typeof LanguageTag | null;
  readonly dev_type_tag?: (DevelopmentTag | null)[] | keyof typeof DevelopmentTag | null;
  readonly interest_tag?: (InterestTag | null)[] | keyof typeof InterestTag | null;
  readonly size_tag?: (SizeTag | null)[] | keyof typeof SizeTag | null;
  readonly framework_tag?: (FrameworkTag | null)[] | keyof typeof FrameworkTag | null;
  readonly difficulty_tag?: (DifficultyTag | null)[] | keyof typeof DifficultyTag | null;
  readonly new_user?: boolean | null;
  readonly contributions?: (ContributionsModel | null)[] | null;
  readonly credibility_score?: number | null;
  readonly involved_projects?: (string | null)[] | null;
  readonly experience_level?: (ExperienceTag | null)[] | keyof typeof ExperienceTag | null;
  readonly years_of_experience?: number | null;
  readonly user_type?: (AccountTag | null)[] | keyof typeof AccountTag | null;
  readonly user_experiences?: (ExperienceModel | null)[] | null;
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
  readonly github_link?: string | null;
  readonly saved_posts?: (string | null)[] | null;
  readonly hide_posts?: (string | null)[] | null;
  readonly messages: AsyncCollection<MessageModel>;
  readonly conversations: AsyncCollection<UsersConvo>;
  readonly lang_tag?: (LanguageTag | null)[] | keyof typeof LanguageTag | null;
  readonly dev_type_tag?: (DevelopmentTag | null)[] | keyof typeof DevelopmentTag | null;
  readonly interest_tag?: (InterestTag | null)[] | keyof typeof InterestTag | null;
  readonly size_tag?: (SizeTag | null)[] | keyof typeof SizeTag | null;
  readonly framework_tag?: (FrameworkTag | null)[] | keyof typeof FrameworkTag | null;
  readonly difficulty_tag?: (DifficultyTag | null)[] | keyof typeof DifficultyTag | null;
  readonly new_user?: boolean | null;
  readonly contributions: AsyncCollection<ContributionsModel>;
  readonly credibility_score?: number | null;
  readonly involved_projects?: (string | null)[] | null;
  readonly experience_level?: (ExperienceTag | null)[] | keyof typeof ExperienceTag | null;
  readonly years_of_experience?: number | null;
  readonly user_type?: (AccountTag | null)[] | keyof typeof AccountTag | null;
  readonly user_experiences: AsyncCollection<ExperienceModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsersModel = LazyLoading extends LazyLoadingDisabled ? EagerUsersModel : LazyUsersModel

export declare const UsersModel: (new (init: ModelInit<UsersModel, UsersModelMetaData>) => UsersModel) & {
  copyOf(source: UsersModel, mutator: (draft: MutableModel<UsersModel, UsersModelMetaData>) => MutableModel<UsersModel, UsersModelMetaData> | void): UsersModel;
}

type EagerContributionsModel = {
  readonly id: string;
  readonly author: string;
  readonly type?: (ContributionTag | null)[] | keyof typeof ContributionTag | null;
  readonly description?: string | null;
  readonly link_to?: string | null;
  readonly point_value?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContributionsModel = {
  readonly id: string;
  readonly author: string;
  readonly type?: (ContributionTag | null)[] | keyof typeof ContributionTag | null;
  readonly description?: string | null;
  readonly link_to?: string | null;
  readonly point_value?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ContributionsModel = LazyLoading extends LazyLoadingDisabled ? EagerContributionsModel : LazyContributionsModel

export declare const ContributionsModel: (new (init: ModelInit<ContributionsModel, ContributionsModelMetaData>) => ContributionsModel) & {
  copyOf(source: ContributionsModel, mutator: (draft: MutableModel<ContributionsModel, ContributionsModelMetaData>) => MutableModel<ContributionsModel, ContributionsModelMetaData> | void): ContributionsModel;
}

type EagerExperienceModel = {
  readonly id: string;
  readonly user_id: string;
  readonly org_name: string;
  readonly start_date: string;
  readonly end_date?: string | null;
  readonly description: string;
  readonly lang_tag?: (LanguageTag | null)[] | keyof typeof LanguageTag | null;
  readonly dev_type_tag?: (DevelopmentTag | null)[] | keyof typeof DevelopmentTag | null;
  readonly framework_tag?: (FrameworkTag | null)[] | keyof typeof FrameworkTag | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExperienceModel = {
  readonly id: string;
  readonly user_id: string;
  readonly org_name: string;
  readonly start_date: string;
  readonly end_date?: string | null;
  readonly description: string;
  readonly lang_tag?: (LanguageTag | null)[] | keyof typeof LanguageTag | null;
  readonly dev_type_tag?: (DevelopmentTag | null)[] | keyof typeof DevelopmentTag | null;
  readonly framework_tag?: (FrameworkTag | null)[] | keyof typeof FrameworkTag | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ExperienceModel = LazyLoading extends LazyLoadingDisabled ? EagerExperienceModel : LazyExperienceModel

export declare const ExperienceModel: (new (init: ModelInit<ExperienceModel, ExperienceModelMetaData>) => ExperienceModel) & {
  copyOf(source: ExperienceModel, mutator: (draft: MutableModel<ExperienceModel, ExperienceModelMetaData>) => MutableModel<ExperienceModel, ExperienceModelMetaData> | void): ExperienceModel;
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
  readonly creator_name?: string | null;
  readonly lang_tag?: (LanguageTag | null)[] | keyof typeof LanguageTag | null;
  readonly dev_type_tag?: (DevelopmentTag | null)[] | keyof typeof DevelopmentTag | null;
  readonly interest_tag?: (InterestTag | null)[] | keyof typeof InterestTag | null;
  readonly size_tag?: (SizeTag | null)[] | keyof typeof SizeTag | null;
  readonly framework_tag?: (FrameworkTag | null)[] | keyof typeof FrameworkTag | null;
  readonly difficulty_tag?: (DifficultyTag | null)[] | keyof typeof DifficultyTag | null;
  readonly post_comments?: (CommentModel | null)[] | null;
  readonly contributor_limit?: number | null;
  readonly contributors?: (string | null)[] | null;
  readonly reported?: boolean | null;
  readonly experience_level?: (ExperienceTag | null)[] | keyof typeof ExperienceTag | null;
  readonly application?: boolean | null;
  readonly project_chat: string;
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
  readonly creator_name?: string | null;
  readonly lang_tag?: (LanguageTag | null)[] | keyof typeof LanguageTag | null;
  readonly dev_type_tag?: (DevelopmentTag | null)[] | keyof typeof DevelopmentTag | null;
  readonly interest_tag?: (InterestTag | null)[] | keyof typeof InterestTag | null;
  readonly size_tag?: (SizeTag | null)[] | keyof typeof SizeTag | null;
  readonly framework_tag?: (FrameworkTag | null)[] | keyof typeof FrameworkTag | null;
  readonly difficulty_tag?: (DifficultyTag | null)[] | keyof typeof DifficultyTag | null;
  readonly post_comments: AsyncCollection<CommentModel>;
  readonly contributor_limit?: number | null;
  readonly contributors?: (string | null)[] | null;
  readonly reported?: boolean | null;
  readonly experience_level?: (ExperienceTag | null)[] | keyof typeof ExperienceTag | null;
  readonly application?: boolean | null;
  readonly project_chat: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PostsModel = LazyLoading extends LazyLoadingDisabled ? EagerPostsModel : LazyPostsModel

export declare const PostsModel: (new (init: ModelInit<PostsModel, PostsModelMetaData>) => PostsModel) & {
  copyOf(source: PostsModel, mutator: (draft: MutableModel<PostsModel, PostsModelMetaData>) => MutableModel<PostsModel, PostsModelMetaData> | void): PostsModel;
}

type EagerConversationModel = {
  readonly id: string;
  readonly users?: (UsersConvo | null)[] | null;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConversationModel = {
  readonly id: string;
  readonly users: AsyncCollection<UsersConvo>;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ConversationModel = LazyLoading extends LazyLoadingDisabled ? EagerConversationModel : LazyConversationModel

export declare const ConversationModel: (new (init: ModelInit<ConversationModel, ConversationModelMetaData>) => ConversationModel) & {
  copyOf(source: ConversationModel, mutator: (draft: MutableModel<ConversationModel, ConversationModelMetaData>) => MutableModel<ConversationModel, ConversationModelMetaData> | void): ConversationModel;
}

type EagerMessageModel = {
  readonly id: string;
  readonly message: string;
  readonly from: string;
  readonly message_date?: string | null;
  readonly conversationID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessageModel = {
  readonly id: string;
  readonly message: string;
  readonly from: string;
  readonly message_date?: string | null;
  readonly conversationID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MessageModel = LazyLoading extends LazyLoadingDisabled ? EagerMessageModel : LazyMessageModel

export declare const MessageModel: (new (init: ModelInit<MessageModel, MessageModelMetaData>) => MessageModel) & {
  copyOf(source: MessageModel, mutator: (draft: MutableModel<MessageModel, MessageModelMetaData>) => MutableModel<MessageModel, MessageModelMetaData> | void): MessageModel;
}

type EagerCommentModel = {
  readonly id: string;
  readonly comment: string;
  readonly profile_image?: string | null;
  readonly comment_date?: string | null;
  readonly parent_comment?: string | null;
  readonly replies?: number | null;
  readonly isReply?: boolean | null;
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
  readonly parent_comment?: string | null;
  readonly replies?: number | null;
  readonly isReply?: boolean | null;
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

type EagerUsersConvo = {
  readonly id: string;
  readonly usersModel: UsersModel;
  readonly conversationModel: ConversationModel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsersConvo = {
  readonly id: string;
  readonly usersModel: AsyncItem<UsersModel>;
  readonly conversationModel: AsyncItem<ConversationModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsersConvo = LazyLoading extends LazyLoadingDisabled ? EagerUsersConvo : LazyUsersConvo

export declare const UsersConvo: (new (init: ModelInit<UsersConvo, UsersConvoMetaData>) => UsersConvo) & {
  copyOf(source: UsersConvo, mutator: (draft: MutableModel<UsersConvo, UsersConvoMetaData>) => MutableModel<UsersConvo, UsersConvoMetaData> | void): UsersConvo;
}