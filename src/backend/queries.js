import * as query from '../graphql'
import { PostMode, PostModel, TagsModel, UserModel } from '../models'
import { DataStore } from 'aws-amplify'
import isTag from './tags'

export async function getPostsByTags(...tags) {

    const posts = DataStore.query(PostModel)
    posts = JSON.parse(posts)

    // filter for every tag
    for (let tag of tags) 
    {
        if (!isTag(tag)) continue; // not a valid tag in database   
        let filteredPosts = posts.filter(post => post.TagsModel.contains(tag)   )
        if (filteredPosts.length < 10) return posts // not enough results; stop removing posts
        posts = filteredPosts
    }
    
    return posts
}

export async function getPostsByID(id) {
    return DataStore.query(PostModel, c => c.id)
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

