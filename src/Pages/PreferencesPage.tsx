import React from 'react'
import LandingPageNavBar from '../components/LandingPageNavBar'
import PreferencesComponent from '../components/PreferencesComponent'


export default function PreferencesPage() {

  return (
    <div>
      <LandingPageNavBar />
      {PreferencesComponent()}
    </div>
  )
}