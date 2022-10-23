// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TagsModel, BlackListedPosts, SavedPosts, PostModel, UserModel } = initSchema(schema);

export {
  TagsModel,
  BlackListedPosts,
  SavedPosts,
  PostModel,
  UserModel
};