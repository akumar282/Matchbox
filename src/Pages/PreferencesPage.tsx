/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import LandingPageNavBar from '../components/LandingPageNavBar'
import { enumBundle, preferenceTags } from '../backend/types'
import * as Preferences from './constants'
import { CloudProviderTag, DevelopmentTag, DifficultyTag, ExperienceTag, FrameworkTag, InterestTag, LanguageTag, SizeTag } from '../API'
import Tags from '../components/Tags'


export default function PreferencesPage() {

  const [LanguageTags, setLanguageTags] = React.useState<LanguageTag[]>([])
  const [FrameworkTags, setFrameworkTags] = React.useState<FrameworkTag[]>([])
  const [DevelopmentTags, setDevelopmentTags] = React.useState<DevelopmentTag[]>([])
  const [InterestTags, setInterestTags] = React.useState<InterestTag[]>([])
  const [CloudProviderTags, setCloudProviderTags] = React.useState<CloudProviderTag[]>([])
  const [DifficultyTags, setDifficultyTags] = React.useState<DifficultyTag[]>([])
  const [ExperienceTags, setExperienceTags] = React.useState<ExperienceTag[]>([])
  const [SizeTags, setSizeTags] = React.useState<SizeTag[]>([])
  const [checkedTags, setCheckedTags] = React.useState<preferenceTags[]>([])

  React.useEffect(() => {
    console.log(checkedTags)
  }, [checkedTags])

  function generateTags(TagArr: preferenceTags[], typeTag: preferenceTags[]) {
    return TagArr.map((tag) => {
      const bundle: enumBundle = {
        enumMap: tag,
        value: tag,
      }
      return (
        <Tags
          itemID={typeof typeTag}
          key={tag}
          bundle={bundle}
          checked={typeTag.includes(tag) && checkedTags.includes(tag)}
          onClick={() => handleTagClick(tag, typeTag)} />
      )
    })
  }

  async function handleTagClick(tag: preferenceTags, typeTag: preferenceTags[]) {
    // Create a new array based on the current state
    const updatedTags = typeTag.includes(tag)
      ? typeTag.filter((t) => t !== tag) && checkedTags.filter((t) => t !== tag)
      : [...typeTag, tag]

    const updatedCheckedTags = checkedTags.includes(tag)
      ? checkedTags.filter((t) => t !== tag) && updatedTags.filter((t) => t !== tag)
      : [...checkedTags, tag]

    // Update the state with the new array
    switch (typeTag) {
    case LanguageTags:
      setLanguageTags(updatedTags as LanguageTag[])
      break
    case FrameworkTags:
      setFrameworkTags(updatedTags as FrameworkTag[])
      break
    case DevelopmentTags:
      setDevelopmentTags(updatedTags as DevelopmentTag[])
      break
    case CloudProviderTags:
      setCloudProviderTags(updatedTags as CloudProviderTag[])
      break
    case InterestTags:
      setInterestTags(updatedTags as InterestTag[])
      break
    case DifficultyTags:
      setDifficultyTags(updatedTags as DifficultyTag[])
      break
    case SizeTags:
      setSizeTags(updatedTags as SizeTag[])
      break
    case checkedTags:
      setCheckedTags(updatedCheckedTags)
      break
      // Add cases for other tag types as needed
    default:
      break
    }

    // Update the checkedTags state
    setCheckedTags(updatedCheckedTags)

    console.log(updatedTags)
  }

  return (
    <div>
      <LandingPageNavBar />
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