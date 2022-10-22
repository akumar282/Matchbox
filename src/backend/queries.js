import * as query from '../graphql'
import { PostMode, PostModel, TagsModel, UserModel } from '../models'

import { DataStore } from 'aws-amplify'

async function getPostsByTags(...tags) {
        
    let tag = tags[0]

    const post = DataStore.query(PostModel, (c) => c.tag.tag("contains", tag))
}

async function getBlackListedPosts() {

}

export async function createPost(title, description, userId, Tags = []) {
    await DataStore.save(
        new PostModel({
            "usermodelID": userId,
            "TagsModel": Tags,
            "title": title,
            "description": description,
        })
    )
}

export async function newUser(username) {
    await DataStore.save(
        new UserModel({
            "user_name": username,
            "UsersPosts": [],
            "UsersSavedPosts": [],
            "UsersBlackListedPosts": [],
            "TagsModels": []
        })
    );
}

