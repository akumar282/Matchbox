import React from 'react'
import { enumBundle, preferenceTags } from '../backend/types'
import { CloudProviderTag, DevelopmentTag, DifficultyTag, FrameworkTag, InterestTag, LanguageTag, SizeTag } from '../API'
import Tags from '../components/Tags'


export default function PreferencesComponent() {

  const [LanguageTags, setLanguageTags] = React.useState<LanguageTag[]>([])
  const [FrameworkTags, setFrameworkTags] = React.useState<FrameworkTag[]>([])
  const [DevelopmentTags, setDevelopmentTags] = React.useState<DevelopmentTag[]>([])
  const [InterestTags, setInterestTags] = React.useState<InterestTag[]>([])
  const [CloudProviderTags, setCloudProviderTags] = React.useState<CloudProviderTag[]>([])
  const [DifficultyTags, setDifficultyTags] = React.useState<DifficultyTag[]>([])
  const [SizeTags, setSizeTags] = React.useState<SizeTag[]>([])
  const [checkedTags, setCheckedTags] = React.useState<preferenceTags[]>([])

  function generateTags(TagArr: preferenceTags[], typeTag: preferenceTags[], colorTag: string = 'bg-green-300') {
    return TagArr.map((tag) => {
      const bundle: enumBundle = {
        enumMap: tag,
        value: tag,
      }
      const isChecked = checkedTags.includes(tag) && typeTag.includes(tag)
      const tagClasses = `rounded-lg hover:bg-violet-400 ${isChecked ? 'bg-violet-400' : `${colorTag}`} my-2 ml-3 px-3 py-2 font-primary`
      return (
        <Tags
          itemID={typeof typeTag}
          key={tag}
          bundle={bundle}
          checked={isChecked}
          onClick={() => handleTagClick(tag, typeTag)}
          className={tagClasses}/>
      )
    })
  }

  function removeFromAll(tag: preferenceTags) {
    setLanguageTags((prevTags) => prevTags.filter((t) => t !== tag))
    setFrameworkTags((prevTags) => prevTags.filter((t) => t !== tag))
    setDevelopmentTags((prevTags) => prevTags.filter((t) => t !== tag))
    setInterestTags((prevTags) => prevTags.filter((t) => t !== tag))
    setCloudProviderTags((prevTags) => prevTags.filter((t) => t !== tag))
    setDifficultyTags((prevTags) => prevTags.filter((t) => t !== tag))
    setSizeTags((prevTags) => prevTags.filter((t) => t !== tag))
  }

  async function handleTagClick(tag: preferenceTags, typeTag: preferenceTags[]) {
    const isTagIncluded = typeTag.includes(tag)

    switch (typeTag) {
    case LanguageTags:
      setLanguageTags((prevTags) =>
        isTagIncluded ? prevTags.filter((t) => t !== tag) : [...prevTags, tag] as LanguageTag[]
      )
      break
    case FrameworkTags:
      setFrameworkTags((prevTags) =>
        isTagIncluded ? prevTags.filter((t) => t !== tag) : [...prevTags, tag] as FrameworkTag[]
      )
      break
    case DevelopmentTags:
      setDevelopmentTags((prevTags) =>
        isTagIncluded ? prevTags.filter((t) => t !== tag) : [...prevTags, tag] as DevelopmentTag[]
      )
      break
    case CloudProviderTags:
      setCloudProviderTags((prevTags) =>
        isTagIncluded ? prevTags.filter((t) => t !== tag) : [...prevTags, tag] as CloudProviderTag[]
      )
      break
    case InterestTags:
      setInterestTags((prevTags) =>
        isTagIncluded ? prevTags.filter((t) => t !== tag) : [...prevTags, tag] as InterestTag[]
      )
      break
    case DifficultyTags:
      setDifficultyTags((prevTags) =>
        isTagIncluded ? prevTags.filter((t) => t !== tag) : [...prevTags, tag] as DifficultyTag[]
      )
      break
    case SizeTags:
      setSizeTags((prevTags) =>
        isTagIncluded ? prevTags.filter((t) => t !== tag) : [...prevTags, tag] as SizeTag[]
      )
      break
    case checkedTags:
      setCheckedTags((prevTags) =>
        isTagIncluded ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
      )
      removeFromAll(tag)
      break
    default:
      break
    }

    // Update the checkedTags state
    setCheckedTags((prevCheckedTags) => {
      return isTagIncluded
        ? prevCheckedTags.filter((t) => t !== tag)
        : [...prevCheckedTags, tag]
    })
  }

  return (
    <div>
      <div className='flex flex-row mt-6'>
        <div className='flex flex-col items-start mx-8 pl-2'>
          <h1 className='font-primary text-3xl font-semibold'>Project Preferences</h1>
          <h2 className='font-primary text-medium pt-1 pb-3'>We&apos;ll use this to match you with projects of your liking</h2>
          <div>
            {generateTags(checkedTags, checkedTags)}
          </div>
        </div>
      </div>
      <div className='bg-slate-200 lg:mx-8 mx-6 my-4 rounded-lg'>
        <h1 className='px-4 py-2 text-bold font-primary text-base'>Languages</h1>
        {generateTags([...Object.values(LanguageTag)], LanguageTags, 'bg-green-300')}
        <h1 className='px-4 py-2 text-bold font-primary text-base'>Frameworks</h1>
        {generateTags([...Object.values(FrameworkTag)], FrameworkTags, 'bg-rose-300')}
        <h1 className='px-4 py-2 text-bold font-primary text-base'>Domains</h1>
        {generateTags([...Object.values(DevelopmentTag)], DevelopmentTags, 'bg-blue-300')}
        <h1 className='px-4 py-2 text-bold font-primary text-base'>Cloud Computing</h1>
        {generateTags([...Object.values(CloudProviderTag)], CloudProviderTags, 'bg-amber-300')}
        <h1 className='px-4 py-2 text-bold font-primary text-base'>Interests</h1>
        {generateTags([...Object.values(InterestTag)], InterestTags, 'bg-violet-300')}
        <h1 className='px-4 py-2 text-bold font-primary text-base'>Difficulty</h1>
        {generateTags([...Object.values(DifficultyTag)], DifficultyTags, 'bg-orange-300')}
        <h1 className='px-4 py-2 text-bold font-primary text-base'>Size</h1>
        {generateTags([...Object.values(SizeTag)], SizeTags, 'bg-lime-300')}
      </div>
    </div>
  )
}