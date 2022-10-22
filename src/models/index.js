// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BlackListedPosts, SavedPosts, PostMode, UserModel } = initSchema(schema);

export {
  BlackListedPosts,
  SavedPosts,
  PostMode,
  UserModel
};