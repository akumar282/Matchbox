import { updateUser } from '../mutations/userMutations';
import { getUserById } from '../queries/userQueries';

async function updateSavedPosts(userId: string, postId: string): Promise<void> { 
  const projectToSave: string = postId
  let savedPosts : string[]
  const result = await getUserById(userId)
  savedPosts = result.data.getUsersModel.saved_posts
  if(!savedPosts.includes(projectToSave)) {
    await updateUser({
      input: {
        id: userId,
        saved_posts: [projectToSave]
      }
    })
  } else {
    console.log('project already saved')
  }
}