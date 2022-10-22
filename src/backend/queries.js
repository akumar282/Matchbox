import * as query from '../graphql'

import { PostModel } from '../models'
import { TagsModel } from '../models'
import { UserModel } from '../models'

import { DataStore } from 'aws-amplify'

async function getPostsByTags(...tags) {
        
    let tag = tags[0]

    const post = DataStore.query(PostModel, (c) => c.tag.tag("contains", tag))
}

async function getBlackListedPosts() {

}
