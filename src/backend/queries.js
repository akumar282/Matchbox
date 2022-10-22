import * as query from '../graphql'

import { PostModel, TagsModel, UserModel } from '../models'

import { DataStore } from 'aws-amplify'

export async function getPostsByTags(...tags) {

    const posts = DataStore.query(PostModel)
    posts = JSON.parse(posts)

    // filter for every tag
    for (let tag of tags) 
    {
        let filteredPosts = posts.filter(post => post.tag.tag === tag)
        if (filteredPosts.length < 10) return posts // not enough results; stop removing posts
        posts = filteredPosts
    }
    
    return posts
        
}

