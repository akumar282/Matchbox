import * as query from '../graphql'
import { DataStore } from 'aws-amplify'

async function getPostsByTags(...tags) {
    // const post = DataStore.query(PostModel)

    const post = DataStore.query(PostModel, (c) => c.title("contains", "java"))
}

async function getBlackListedPosts() {
    
}
