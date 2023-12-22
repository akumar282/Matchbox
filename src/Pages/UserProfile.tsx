import React from 'react'
import NavBar from '../components/NavBar'
import ProfileHeader from '../components/ProfileHeader'
import ProfileProjects from '../components/ProfileProjects'
import ProfileExperiences from '../components/ProfileExperiences'
import { LanguageTag, FrameworkTag, DevelopmentTag, InterestTag, CloudProviderTag, DifficultyTag, SizeTag } from '../API'


// TODO: None of the components take in data
const experience = [
  {
    title: 'Software Engineer',
    org_name: 'Google',
    start_date: '12-01-2019',
    end_date: '03-18-2021',
    lang_tag: ['Python', 'Java', 'C++'],
    dev_type_tag: ['React', 'Vue', 'Angular'],
    framework_tag: ['Web', 'Mobile', 'Desktop'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos placeat, dolorum ullam ipsam, sapiente suscipit dicta eius quisquam quod doloribus, fuga minus inventore quae?'
  },
]
const projects = [
  {
    post_title: 'Matchbox',
    image_link: 'somelink',
    project_link: 'https://github.com',
  },
]
const user = {
  user_name: 'Mega',
  //field might be missing in api
  bio: 'bio',
  // group these together or send them as separate props?
  tags: {
    lang_tag: ['Python', 'Java', 'C_PLUS_PLUS'] as LanguageTag[],
    dev_type_tag: ['FRONT_END'] as DevelopmentTag[],
    framework_tag: ['RUBY_ON_RAILS'] as FrameworkTag[],
    interest_tag: ['ENVIRONMENT'] as InterestTag[],
    cloud_provider_tag: ['AMAZON_WEB_SERVICES'] as CloudProviderTag[],
    difficulty_tag: ['GOOD_FIRST_PROJECT'] as DifficultyTag[],
    size_tag: ['SMALL', 'Medium', 'Large'] as SizeTag[],
  },
  github_link: 'github.com',
  profile_image: 'somelink',
}
export default function UserProfile() {
  return (
    <div className='min-h-screen bg-primary-purple flex flex-col relative overflow-hidden'>
      <NavBar />
      <div className='max-w-[1170px] mx-auto w-[97%] h-full flex flex-col bg-white rounded-lg px-2 py-2 mt-4'>
        <ProfileHeader tags={user.tags} bio={user.bio} user_name={user.user_name} github={user.github_link}/>
        <ProfileProjects projects={projects}/>
        <ProfileExperiences experiences={experience}/>
      </div>
    </div>
  )
}