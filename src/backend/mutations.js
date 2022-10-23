
import { BlackListedPosts, PostModel, SavedPosts, TagsModel, UserModel } from '../models'
import { DataStore } from 'aws-amplify'
import * as query from './queries'

export async function createUser(username, tags) {

    const exist = await query.getUsersByUsername(username)
    console.log(exist)
    if (exist.length > 0) return
    console.log("Creating Us")

    const user = await DataStore.save(
        new UserModel ({
            "user_name": username
        })
    )
    for (let tag of tags) {
        await DataStore.save(
            new TagsModel({
            "tag" : tag,
            "usermodelID" : user.id
            })
        )
    }
}

export async function createPost(username, title, description, projLink, imageLink, tags) {

    const user = await query.getUsersByUsername(username)
    if (user.length === 0) return
    console.log(user[0].id)
    const post = await DataStore.save(
        new PostModel({
            "usermodelID": user[0].id,
            "title": title,
            "description": description,
            "project_link": projLink,
            "image_link": imageLink
        })
    )
    for (let tag of tags) {
        await DataStore.save(
            new TagsModel({
                "tag" : tag,
                "usermodelID" : post.id
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

export async function createSavedPost(username, postID) {
    
    const user = query.getUsersByUsername(username)
    if(user.length === 0) return

    await DataStore.save(
        new SavedPosts({
            "postID" : postID,
            "usermodelID" : user[0].id
        })
    )       
}

export async function createBlackListedPost(username, postID) {
    
    const user = query.getUsersByUsername(username)
    if(user.length === 0) return

    await DataStore.save(
        new BlackListedPosts({
            "postID" : postID,
            "usermodelID" : user[0].id
        })
    )       
}

