import * as query from '../graphql'
import { BlackListedPosts, PostMode, PostModel, SavedPosts, TagsModel, UserModel } from '../models'
import { DataStore } from 'aws-amplify'
import isTag from './tags'

export async function createPost(title, description, userId, Tags = []) {
    const post = await DataStore.save(
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
                "userID" : post.userID
            })
        )
    }
}

export async function createUser(username, ...Tags) {
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

export async function createTag(tag) {
    await DataStore.save(
        new TagsModel({
            "tag" : tag
        })
    )
}

export async function createSavedPost(userID, postID) {
    
    const user = DataStore.query(userID)
    let savedPosts = user.SavedPosts

    const newPost = await DataStore.save(
        new SavedPosts({
            postID : postID
        })
    )       
    savedPosts.push(newPost)

    await DataStore.save(
        UserModel.copyOf(user, update => {
          update.SavedPosts = savedPosts
        })
      );
}

export async function createBlacklistedPost (userID, postID) {
    
    const user = DataStore.query(userID)
    let blacklistPost = user.BlackListedPosts

    const newPost = await DataStore.save(
        new BlackListedPosts({
            postID : postID
        })
    )       
    blacklistPost.push(newPost)

    await DataStore.save(
        UserModel.copyOf(user, update => {
          update.BlackListedPosts = blacklistPost
        })
      );
}

