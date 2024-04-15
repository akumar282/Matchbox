import React, {useContext} from 'react'
import LandingPageNavBar from '../components/LandingPageNavBar'
import PreferencesComponent from '../components/PreferencesComponent'
import { CloudProviderTag, DevelopmentTag, DifficultyTag, FrameworkTag, InterestTag, LanguageTag, SizeTag } from '../API'
import {updateUser} from '../backend/mutations/userMutations'
import {AuthContext} from '../components/AuthWrapper'

export default function PreferencesPage() {

  const userInfo = useContext(AuthContext)

  const [tags, setTags] = React.useState<{
    LanguageTags: LanguageTag[],
    FrameworkTags: FrameworkTag[],
    DevelopmentTags: DevelopmentTag[],
    InterestTags: InterestTag[],
    CloudProviderTags: CloudProviderTag[],
    DifficultyTags: DifficultyTag[],
    SizeTags: SizeTag[],
  }>({
    LanguageTags: [],
    FrameworkTags: [],
    DevelopmentTags: [],
    InterestTags: [],
    CloudProviderTags: [],
    DifficultyTags: [],
    SizeTags: [],
  })
  console.log(tags)

  const useSubmit = async () => {
    if(userInfo && userInfo.id) {
      const updateUserFn = await updateUser({
        input: {
          id: userInfo.id,
          lang_tag: tags.LanguageTags,
          dev_type_tag: tags.DevelopmentTags,
          interest_tag: tags.InterestTags,
          size_tag: tags.SizeTags,
          framework_tag: tags.FrameworkTags,
          difficulty_tag: tags.DifficultyTags,
          cloud_provider_tag: tags.CloudProviderTags,
        }
      })
      console.log(updateUserFn)
    }
  }


  return (
    <div>
      <LandingPageNavBar />
      <div className='w-11/12 mx-auto flex flex-col mt-4 '>
        <h1 className='font-secondary text-3xl font-light'>Project Preferences</h1>
        <h2 className='font-primary text-medium pt-1 pb-3'>We&apos;ll use this to match you with projects of your liking</h2>
      </div>
      <div className='w-11/12 mx-auto mt-2 mb-6'>
        <PreferencesComponent setTags={setTags}/>
        <div className='flex justify-center mt-8'>
          <button className='font-primary hover:bg-indigo-400 bg-secondary-blue text-white text-lg rounded-lg px-24 py-2' onClick={()=> useSubmit()}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}