import React from 'react'
import LandingPageNavBar from '../components/LandingPageNavBar'
import PreferencesComponent from '../components/PreferencesComponent'
import { preferenceTags } from '../backend/types'

export default function PreferencesPage() {
  const [checkedTags, setCheckedTags] = React.useState<preferenceTags[]>([])
  React.useEffect(() => {
    console.log(checkedTags)
  }, [checkedTags])
  return (
    <div>
      <LandingPageNavBar />
      <div className='w-11/12 mx-auto flex flex-col mt-4 max-w-[1130px]'>
        <h1 className='font-primary text-3xl font-semibold'>Project Preferences</h1>
        <h2 className='font-primary text-medium pt-1 pb-3'>We&apos;ll use this to match you with projects of your liking</h2>
      </div>
      <div className='w-11/12 mx-auto mt-2 max-w-[1130px]'>
        <PreferencesComponent setChecked = {setCheckedTags}/>
      </div>
    </div>
  )
}