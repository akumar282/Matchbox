import React, { useEffect } from 'react'
import PreferencesComponent from '../components/PreferencesComponent'
import { preferenceTags } from '../backend/types'

interface Props {
    nextSlide: () => void
    prevSlide: () => void
    }

export default function CPrefrences(props: Props) {
  const [checkedTags, setCheckedTags] = React.useState<preferenceTags[]>([])
  useEffect(() => {
    console.log(checkedTags)
  }, [checkedTags])
  
  return (
    <div className='mx-auto bg-white mt-8 mb-8 lg:max-w-[1170px] w-[97%] font-primary rounded-lg pt-4 px-2 pb-2'>
      <h1 className='text-2xl font-primary lg:ml-16 ml-4 mt-3'>Setup Project Preferences</h1>
      <PreferencesComponent setChecked = {setCheckedTags}/>
      <button
        className='py-1 px-6 mb-3 bg-gray-300 hover:bg-gray-200 rounded-full'
        onClick={props.prevSlide}
      >
            Back
      </button>
      <button
        className='py-1 px-6 mb-3 bg-blue-700 hover:bg-blue-400 rounded-full text-white'
        onClick={props.nextSlide}
      >
            Next
      </button>

    </div>
  )
}