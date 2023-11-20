/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import LandingPageNavBar from '../components/LandingPageNavBar'
import Tags from '../components/Tags'
import { enumBundle, preferenceTags } from '../backend/types'
import * as Preferences from './constants'
import { CloudProviderTag, DevelopmentTag, DifficultyTag, ExperienceTag, FrameworkTag, InterestTag, LanguageTag, SizeTag } from '../API'


export default function PreferencesPage() {

  const [LanguageTags, setLanguageTags] = React.useState<LanguageTag[]>([])
  const [FrameworkTags, setFrameworkTags] = React.useState<FrameworkTag[]>([])
  const [DevelopmentTags, setDevelopmentTags] = React.useState<DevelopmentTag[]>([])
  const [InterestTags, setInterestTags] = React.useState<InterestTag[]>([])
  const [CloudProviderTags, setCloudProviderTags] = React.useState<CloudProviderTag[]>([])
  const [DifficultyTags, setDifficultyTags] = React.useState<DifficultyTag[]>([])
  const [ExperienceTags] = React.useState<ExperienceTag[]>([])
  const [SizeTags, setSizeTags] = React.useState<SizeTag[]>([])
  const [checkedTags, setCheckedTags] = React.useState<preferenceTags[]>([])



  function generateTags(TagArr: preferenceTags[], typeTag: preferenceTags[]) {
    return TagArr.map((tag) => {
      const bundle: enumBundle = {
        enumMap: tag,
        value: tag,
      }
      return (
        <Tags
          key={tag}
          bundle={bundle}
          checked={typeTag.includes(tag)}
          onClick={() => handleTagClick(tag, typeTag)}
        />
      )
    })
  }

  function handleTagClick(tag: preferenceTags, typeTag?: preferenceTags[]) {
    // Toggle the tag in the corresponding type state array
    if (typeTag) {
      if (typeTag.includes(tag)) {
        typeTag = typeTag.filter((t) => t !== tag)
      } else {
        typeTag = [...typeTag, tag]
      }
    }

    // Toggle the tag in the checkedTags state array
    if (checkedTags.includes(tag)) {
      setCheckedTags(checkedTags.filter((t) => t !== tag))
    } else {
      setCheckedTags([...checkedTags, tag])
    }
    console.log(checkedTags)
    console.log(typeTag)
  }

  return (
    <div>
      <LandingPageNavBar/>
      <div className='flex flex-row mt-6'>
        <div className='flex flex-col items-start mx-4 pl-2'>
          <h1 className='font-primary text-3xl font-semibold'>Project Preferences</h1>
          <h2 className='font-primary text-medium pt-1 pb-3'>We&apos;ll use this to match you with projects of your liking</h2>
          <div>
            {generateTags(checkedTags, checkedTags)}
          </div>
        </div>

      </div>
      <div className='bg-slate-200 mx-6 my-4 rounded-lg'>
        <h1 className='px-4 py-2 text-bold font-primary text-base'>Languages</h1>
        {generateTags(Preferences.Languages, LanguageTags)}
        <h1 className='px-4 py-2 text-bold font-primary text-base'>Frameworks</h1>
        {generateTags(Preferences.Frameworks, FrameworkTags)}
        <h1 className='px-4 py-2 text-bold font-primary text-base'>Domains</h1>
        {generateTags(Preferences.Developments, DevelopmentTags)}
        <h1 className='px-4 py-2 text-bold font-primary text-base'>Cloud Computing</h1>
        {generateTags(Preferences.CloudProviders, CloudProviderTags)}
        <h1 className='px-4 py-2 text-bold font-primary text-base'>Interests</h1>
        {generateTags(Preferences.InterestTags, InterestTags)}
        <h1 className='px-4 py-2 text-bold font-primary text-base'>Difficulty</h1>
        {generateTags(Preferences.Difficulty, DifficultyTags)}
        <h1 className='px-4 py-2 text-bold font-primary text-base'>Size</h1>
        {generateTags(Preferences.Size, SizeTags)}
      </div>

    </div>
    
  )
}