// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TagsModel, UserModel, PostModel, BlackListedPosts, SavedPosts, UserModelTagsModel, PostModelTagsModel } = initSchema(schema);

export {
  TagsModel,
  UserModel,
  PostModel,
  BlackListedPosts,
  SavedPosts,
  UserModelTagsModel,
  PostModelTagsModel
};