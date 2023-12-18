import React from 'react'
import NavBar from '../components/NavBar'
import ProfileHeader from '../components/ProfileHeader'
import ProfileProjects from '../components/ProfileProjects'
import ProfileExperiences from '../components/ProfileExperiences'

export default function UserProfile() {
  return (
    <div className='min-h-screen bg-primary-purple flex flex-col relative overflow-hidden'>
      <NavBar />
      <div className='max-w-[1170px] mx-auto w-[97%] h-full flex flex-col bg-white rounded-lg px-2 py-2 mt-4'>
        <ProfileHeader />
        <ProfileProjects />
        <ProfileExperiences />
      </div>
    </div>
  )
}