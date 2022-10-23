import * as query from '../graphql'
import { PostMode, PostModel, TagsModel, UserModel } from '../models'
import { DataStore } from 'aws-amplify'
import isTag from './tags'

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
    for (let tag of Tags) {
        await DataStore.save(
            new TagsModel({
                "tag" : tag,
                "userID" : userId
            })
        )
    }
}

export async function newUser(username, ...Tags) {
    await DataStore.save(
        new UserModel({
            "user_name": username,
            "UsersPosts": [],
            "UsersSavedPosts": [],
            "UsersBlackListedPosts": [],
            "TagsModels": []
        })
    );
    for (let tag of Tags) {
        await DataStore.save(
            new TagsModel({
                "tag" : tag,
                "userID" : userId
            })
        )
    }
}

