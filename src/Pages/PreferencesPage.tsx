import React from 'react'
import LandingPageNavBar from '../components/LandingPageNavBar'
import PreferencesComponent from '../components/PreferencesComponent'
import { CloudProviderTag, DevelopmentTag, DifficultyTag, FrameworkTag, InterestTag, LanguageTag, SizeTag } from '../API'

export default function PreferencesPage() {
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
  return (
    <div>
      <LandingPageNavBar />
      <div className='w-11/12 mx-auto flex flex-col mt-4 '>
        <h1 className='font-secondary text-3xl font-light'>Project Preferences</h1>
        <h2 className='font-primary text-medium pt-1 pb-3'>We&apos;ll use this to match you with projects of your liking</h2>
      </div>
      <div className='w-11/12 mx-auto mt-2 '>
        <PreferencesComponent setTags = {setTags}/>
      </div>
    </div>
  )
}