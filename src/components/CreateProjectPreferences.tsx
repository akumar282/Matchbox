import React, { useEffect } from 'react'
import PreferencesComponent from '../components/PreferencesComponent'
import { CloudProviderTag, DevelopmentTag, DifficultyTag, FrameworkTag, InterestTag, LanguageTag, SizeTag } from '../API'
interface Props {
  nextSlide: () => void
  prevSlide: () => void
  setAllTags: (tags: {
    LanguageTags: LanguageTag[],
    FrameworkTags: FrameworkTag[],
    DevelopmentTags: DevelopmentTag[],
    InterestTags: InterestTag[],
    CloudProviderTags: CloudProviderTag[],
    DifficultyTags: DifficultyTag[],
    SizeTags: SizeTag[],
  }) => void
  editable: boolean,
  editTags: {
    LanguageTags: LanguageTag[],
    FrameworkTags: FrameworkTag[],
    DevelopmentTags: DevelopmentTag[],
    InterestTags: InterestTag[],
    CloudProviderTags: CloudProviderTag[],
    DifficultyTags: DifficultyTag[],
    SizeTags: SizeTag[],
  }

}

export default function CreateProjectPreferences(props: Props) {
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

  useEffect(() => {
    props.setAllTags(tags)
  }, [tags])
  
  function nextSlide() {
    if (tags.LanguageTags.length === 0) {
      alert('Please select at least one language')
      return
    }
    props.nextSlide()
  }

  return (
    <div className='mx-auto bg-white mt-8 mb-8 lg:max-w-[1170px] w-[97%] font-primary rounded-lg pt-4 px-4 pb-2'>
      <h1 className='text-2xl font-primary mt-3 font-bold'>Setup Project Preferences</h1>
      { props.editable ?
        <h2 className="font-primary text-xs pt-1 pb-3">Note: This will overwrite your previous preference
          selection
        </h2>
        :
        <>
        </>
      }
      <PreferencesComponent setTags={setTags}/>
      <div className="flex gap-3 items-center justify-center">
        <button
          className='py-2 px-6 mb-3 md:w-1/5 bg-gray-300 hover:bg-gray-200 rounded-md'
          onClick={props.prevSlide}
        >
          Go Back
        </button>
        <button
          className='py-2 px-6 mb-3 md:w-1/5  bg-blue-700 hover:bg-blue-400 rounded-md text-white'
          onClick={() => nextSlide()}
        >
          Review
        </button>
      </div>
    </div>
  )
}