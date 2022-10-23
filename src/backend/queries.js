import { BlackListedPosts, PostModel, SavedPosts, TagsModel, UserModel } from '../models'
import { DataStore } from 'aws-amplify'
import isTag from './tags'

export async function getUsersByID(id) {
    return DataStore.query(UserModel, id)
}

export async function getUsersByUsername(username) {
    return DataStore.query(UserModel, c => c.user_name("eq", username))
} 

export async function getPostsByTags(...tags) {

    let posts = DataStore.query(PostModel)
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

export async function getPostsByLink(proj_link) {
    return DataStore.query(PostModel, (c) => c.project_link("eq", proj_link))
}

export async function getPostsByID(id) {
    return DataStore.query(PostModel, c => c.id)
}

export async function getSavedPostsByID(id) {
    return DataStore.query(SavedPosts, id)
}

export async function getBlackListedPosts(id) {
    return DataStore.query(BlackListedPosts, id)
}

export async function getTagsByID(id) {
    return DataStore.query(TagsModel, id)
}

