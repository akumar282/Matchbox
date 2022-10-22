import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type BlackListedPostsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SavedPostsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostModeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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

type EagerPostMode = {
  readonly id: string;
  readonly usermodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPostMode = {
  readonly id: string;
  readonly usermodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PostMode = LazyLoading extends LazyLoadingDisabled ? EagerPostMode : LazyPostMode

export declare const PostMode: (new (init: ModelInit<PostMode, PostModeMetaData>) => PostMode) & {
  copyOf(source: PostMode, mutator: (draft: MutableModel<PostMode, PostModeMetaData>) => MutableModel<PostMode, PostModeMetaData> | void): PostMode;
}

type EagerUserModel = {
  readonly id: string;
  readonly user_name?: string | null;
  readonly UsersPosts?: (PostMode | null)[] | null;
  readonly UsersSavedPosts?: (SavedPosts | null)[] | null;
  readonly UsersBlackListedPosts?: (BlackListedPosts | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserModel = {
  readonly id: string;
  readonly user_name?: string | null;
  readonly UsersPosts: AsyncCollection<PostMode>;
  readonly UsersSavedPosts: AsyncCollection<SavedPosts>;
  readonly UsersBlackListedPosts: AsyncCollection<BlackListedPosts>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserModel = LazyLoading extends LazyLoadingDisabled ? EagerUserModel : LazyUserModel

export declare const UserModel: (new (init: ModelInit<UserModel, UserModelMetaData>) => UserModel) & {
  copyOf(source: UserModel, mutator: (draft: MutableModel<UserModel, UserModelMetaData>) => MutableModel<UserModel, UserModelMetaData> | void): UserModel;
}