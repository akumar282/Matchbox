import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type TagsModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BlackListedPostsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SavedPostsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerTagsModel = {
  readonly id: string;
  readonly tag?: string | null;
  readonly postmodelID: string;
  readonly usermodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTagsModel = {
  readonly id: string;
  readonly tag?: string | null;
  readonly postmodelID: string;
  readonly usermodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TagsModel = LazyLoading extends LazyLoadingDisabled ? EagerTagsModel : LazyTagsModel

export declare const TagsModel: (new (init: ModelInit<TagsModel, TagsModelMetaData>) => TagsModel) & {
  copyOf(source: TagsModel, mutator: (draft: MutableModel<TagsModel, TagsModelMetaData>) => MutableModel<TagsModel, TagsModelMetaData> | void): TagsModel;
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

type EagerPostModel = {
  readonly id: string;
  readonly usermodelID: string;
  readonly TagsModels?: (TagsModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPostModel = {
  readonly id: string;
  readonly usermodelID: string;
  readonly TagsModels: AsyncCollection<TagsModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PostModel = LazyLoading extends LazyLoadingDisabled ? EagerPostModel : LazyPostModel

export declare const PostModel: (new (init: ModelInit<PostModel, PostModelMetaData>) => PostModel) & {
  copyOf(source: PostModel, mutator: (draft: MutableModel<PostModel, PostModelMetaData>) => MutableModel<PostModel, PostModelMetaData> | void): PostModel;
}

type EagerUserModel = {
  readonly id: string;
  readonly user_name?: string | null;
  readonly UsersPosts?: (PostModel | null)[] | null;
  readonly UsersSavedPosts?: (PostModel | null)[] | null;
  readonly UsersBlackListedPosts?: (PostModel | null)[] | null;
  readonly TagsModelsToUser?: (TagsModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserModel = {
  readonly id: string;
  readonly user_name?: string | null;
  readonly UsersPosts: AsyncCollection<PostModel>;
  readonly UsersSavedPosts: AsyncCollection<PostModel>;
  readonly UsersBlackListedPosts: AsyncCollection<PostModel>;
  readonly TagsModelsToUser: AsyncCollection<TagsModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserModel = LazyLoading extends LazyLoadingDisabled ? EagerUserModel : LazyUserModel

export declare const UserModel: (new (init: ModelInit<UserModel, UserModelMetaData>) => UserModel) & {
  copyOf(source: UserModel, mutator: (draft: MutableModel<UserModel, UserModelMetaData>) => MutableModel<UserModel, UserModelMetaData> | void): UserModel;
}