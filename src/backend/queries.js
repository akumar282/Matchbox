import * as query from '../graphql'
import { DataStore } from 'aws-amplify'

async function getPostsByTags(...tags) {

    const post = await DataStore.query()
}