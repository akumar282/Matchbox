import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type TagsModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BlackListedPostsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SavedPostsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserModelTagsModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostModelTagsModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerTagsModel = {
  readonly id: string;
  readonly tag?: string | null;
  readonly postmodelID: string;
  readonly usermodels?: (UserModelTagsModel | null)[] | null;
  readonly postmodels?: (PostModelTagsModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTagsModel = {
  readonly id: string;
  readonly tag?: string | null;
  readonly postmodelID: string;
  readonly usermodels: AsyncCollection<UserModelTagsModel>;
  readonly postmodels: AsyncCollection<PostModelTagsModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TagsModel = LazyLoading extends LazyLoadingDisabled ? EagerTagsModel : LazyTagsModel

export declare const TagsModel: (new (init: ModelInit<TagsModel, TagsModelMetaData>) => TagsModel) & {
  copyOf(source: TagsModel, mutator: (draft: MutableModel<TagsModel, TagsModelMetaData>) => MutableModel<TagsModel, TagsModelMetaData> | void): TagsModel;
}

type EagerUserModel = {
  readonly id: string;
  readonly user_name?: string | null;
  readonly UsersPosts?: (PostModel | null)[] | null;
  readonly UsersSavedPosts?: (PostModel | null)[] | null;
  readonly UsersBlackListedPosts?: (PostModel | null)[] | null;
  readonly TagsModels?: (UserModelTagsModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserModel = {
  readonly id: string;
  readonly user_name?: string | null;
  readonly UsersPosts: AsyncCollection<PostModel>;
  readonly UsersSavedPosts: AsyncCollection<PostModel>;
  readonly UsersBlackListedPosts: AsyncCollection<PostModel>;
  readonly TagsModels: AsyncCollection<UserModelTagsModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserModel = LazyLoading extends LazyLoadingDisabled ? EagerUserModel : LazyUserModel

export declare const UserModel: (new (init: ModelInit<UserModel, UserModelMetaData>) => UserModel) & {
  copyOf(source: UserModel, mutator: (draft: MutableModel<UserModel, UserModelMetaData>) => MutableModel<UserModel, UserModelMetaData> | void): UserModel;
}

type EagerPostModel = {
  readonly id: string;
  readonly usermodelID: string;
  readonly TagsModels?: (PostModelTagsModel | null)[] | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly link?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPostModel = {
  readonly id: string;
  readonly usermodelID: string;
  readonly TagsModels: AsyncCollection<PostModelTagsModel>;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly link?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PostModel = LazyLoading extends LazyLoadingDisabled ? EagerPostModel : LazyPostModel

export declare const PostModel: (new (init: ModelInit<PostModel, PostModelMetaData>) => PostModel) & {
  copyOf(source: PostModel, mutator: (draft: MutableModel<PostModel, PostModelMetaData>) => MutableModel<PostModel, PostModelMetaData> | void): PostModel;
}

type EagerBlackListedPosts = {
  readonly id: string;
  readonly post_id?: string | null;
  readonly usermodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlackListedPosts = {
  readonly id: string;
  readonly post_id?: string | null;
  readonly usermodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BlackListedPosts = LazyLoading extends LazyLoadingDisabled ? EagerBlackListedPosts : LazyBlackListedPosts

export declare const BlackListedPosts: (new (init: ModelInit<BlackListedPosts, BlackListedPostsMetaData>) => BlackListedPosts) & {
  copyOf(source: BlackListedPosts, mutator: (draft: MutableModel<BlackListedPosts, BlackListedPostsMetaData>) => MutableModel<BlackListedPosts, BlackListedPostsMetaData> | void): BlackListedPosts;
}

type EagerSavedPosts = {
  readonly id: string;
  readonly post_id?: string | null;
  readonly usermodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySavedPosts = {
  readonly id: string;
  readonly post_id?: string | null;
  readonly usermodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SavedPosts = LazyLoading extends LazyLoadingDisabled ? EagerSavedPosts : LazySavedPosts

export declare const SavedPosts: (new (init: ModelInit<SavedPosts, SavedPostsMetaData>) => SavedPosts) & {
  copyOf(source: SavedPosts, mutator: (draft: MutableModel<SavedPosts, SavedPostsMetaData>) => MutableModel<SavedPosts, SavedPostsMetaData> | void): SavedPosts;
}

type EagerUserModelTagsModel = {
  readonly id: string;
  readonly tagsModel: TagsModel;
  readonly userModel: UserModel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserModelTagsModel = {
  readonly id: string;
  readonly tagsModel: AsyncItem<TagsModel>;
  readonly userModel: AsyncItem<UserModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserModelTagsModel = LazyLoading extends LazyLoadingDisabled ? EagerUserModelTagsModel : LazyUserModelTagsModel

export declare const UserModelTagsModel: (new (init: ModelInit<UserModelTagsModel, UserModelTagsModelMetaData>) => UserModelTagsModel) & {
  copyOf(source: UserModelTagsModel, mutator: (draft: MutableModel<UserModelTagsModel, UserModelTagsModelMetaData>) => MutableModel<UserModelTagsModel, UserModelTagsModelMetaData> | void): UserModelTagsModel;
}

type EagerPostModelTagsModel = {
  readonly id: string;
  readonly tagsModel: TagsModel;
  readonly postModel: PostModel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPostModelTagsModel = {
  readonly id: string;
  readonly tagsModel: AsyncItem<TagsModel>;
  readonly postModel: AsyncItem<PostModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PostModelTagsModel = LazyLoading extends LazyLoadingDisabled ? EagerPostModelTagsModel : LazyPostModelTagsModel

export declare const PostModelTagsModel: (new (init: ModelInit<PostModelTagsModel, PostModelTagsModelMetaData>) => PostModelTagsModel) & {
  copyOf(source: PostModelTagsModel, mutator: (draft: MutableModel<PostModelTagsModel, PostModelTagsModelMetaData>) => MutableModel<PostModelTagsModel, PostModelTagsModelMetaData> | void): PostModelTagsModel;
}