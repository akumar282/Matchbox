import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { CreatePostsModelInput, FrameworkTag } from '../../../src/API'
import { createPost } from '../../../src/backend/mutations/postMutations'
import awsconfig from '../../../src/aws-exports'
import { CreatePostsModelPayload } from '../../../src/backend/types'
import { LanguageTag, DevelopmentTag, InterestTag, SizeTag} from '../../../src/API'
import { async } from 'q'
Amplify.configure(awsconfig)

let dateTime = new Date
const testload: CreatePostsModelPayload = {
  input: {
    post_title: `Matchbox`,
    description: `A very cool project`,
    project_link: `https://github.com/testuser/testproj.git`,
    image_link: `https://image.link/image.pn`,
    post_date: dateTime.toISOString(),
    userID: `1`,
    lang_tag:  [LanguageTag.C_PLUS_PLUS],
    dev_type_tag:  [DevelopmentTag.BACKEND],
    interest_tag:  [InterestTag.COMMUNICATION, InterestTag.CONNECTING, InterestTag.ENTERTAINMENT],
    size_tag: [SizeTag.LESS_FIVE],
    _version:  0
  }
}

describe('Mutation Tests', () => {

  // test creation
  test.skip('Create post', async () => {
    const result = await createPost(testload)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain(`Matchbox`)
  })
  
  // write 100

  test('Create 100 post', async () => {
    
    
    let stagingLang = [LanguageTag.C_PLUS_PLUS]
    let stagingDevType = [DevelopmentTag.BACKEND]
    let stagingInterest = [InterestTag.COMMUNICATION, InterestTag.CONNECTING, InterestTag.ENTERTAINMENT]
    let stagingSize = [SizeTag.LESS_FIVE]
    let stagingFrame = [FrameworkTag.ANGULAR, FrameworkTag.AWS]
    
    for(let i = 0; i < 100; ++i) {
      
      if(i <= 25) {
        // use defaults
      }
      else if(i > 25 && i <= 50) {
        stagingLang = [LanguageTag.C_PLUS_PLUS, LanguageTag.C, LanguageTag.JAVA, LanguageTag.TYPESCRIPT, LanguageTag.JAVASCRIPT]
        stagingDevType = [DevelopmentTag.FULL_STACK]
        stagingInterest = [InterestTag.COMMUNICATION]
        stagingSize = [SizeTag.LESS_FIVE]
        stagingFrame = [FrameworkTag.AZURE, FrameworkTag.EXPRESS, FrameworkTag.MY_SQL, FrameworkTag.POSTGRES_SQL]
      }
      else if(i > 50 && i <= 75) {
        stagingLang = [LanguageTag.JAVA, LanguageTag.TYPESCRIPT, LanguageTag.C_PLUS_PLUS]
        stagingDevType = [DevelopmentTag.BACKEND]
        stagingInterest = [InterestTag.ENTERTAINMENT]
        stagingSize = [SizeTag.MORE_FIFTY]
        stagingFrame = [FrameworkTag.ANGULAR, FrameworkTag.DJANGO]
      }
    else if(i > 75 && i <= 100) {
      stagingLang = [LanguageTag.JAVASCRIPT, LanguageTag.PYTHON]
      stagingDevType = [DevelopmentTag.FRONTEND]
      stagingInterest = [InterestTag.COMMUNICATION, InterestTag.CONNECTING, InterestTag.ENTERTAINMENT]
      stagingSize = [SizeTag.MORE_TEN]
      stagingFrame = [FrameworkTag.ANGULAR, FrameworkTag.REACT, FrameworkTag.REACT_NATIVE]
    }
    
    let stagingLoad: CreatePostsModelPayload = {
      input: {
        post_title: `post${i}`,
        description: `description${i}`,
        project_link: `https://github.com/testuser/testproj${i}.git`,
        image_link: `https://avatars.githubusercontent.com/u/13607064?s=64&v=4`,
        post_date: dateTime.toISOString(),
        userID: `eb91bda2-7560-44c6-a89d-b2ada79bc7cf`,
        lang_tag: stagingLang,
        dev_type_tag:  stagingDevType,
        interest_tag:  stagingInterest,
        size_tag: stagingSize,
        framework_tag: stagingFrame,
        _version:  0
      }
    }
    
    const result = createPost(stagingLoad)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain(`post${i}`)
    }
  })

  test.skip('Create post', async () => {
    const result = await createPost(testload)
    const flatResult = JSON.stringify(result)
    expect(flatResult).toContain(`Matchbox`)
  })

})