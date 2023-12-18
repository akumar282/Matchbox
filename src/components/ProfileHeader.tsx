import React from 'react'
import {enumBundle, preferenceTags} from '../backend/types'
import Tags from './Tags'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import github from '../img/github.svg'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const user = {
  name: 'Username',
  username: '@username',
  Bio: 'This is a bio',
  LanguageTags: ['Python', 'Java', 'C++'],
  FrameworkTags: ['React', 'Vue', 'Angular'],
  DevelopmentTags: ['Web', 'Mobile', 'Desktop'],
  InterestTags: ['AI', 'ML', 'Data Science'],
  CloudProviderTags: ['AWS', 'Azure', 'GCP'],
  DifficultyTags: ['Beginner', 'Intermediate', 'Advanced'],
  SizeTags: ['Small', 'Medium', 'Large'],
  project_link: 'https://github.com'
}
 type tagRender = {
        tagType: preferenceTags[],
        renderColor: string
      }
      
function generateTags(props: tagRender) {
  return props.tagType.map((tag) => {
    const bundle: enumBundle = {
      enumMap: tag,
      value: tag,
    }
      
    const tagClasses = `rounded-lg ${props.renderColor} my-2 ml-2 px-3 py-2 font-primary`
    return (
      <Tags
        key={tag}
        bundle={bundle}
        checked={false}
        className={tagClasses}/>
    )
  })
}
      
export default function ProfileHeader() {
   
  const allTags: tagRender[] = [
    {
      tagType: user.LanguageTags as preferenceTags[],
      renderColor: 'bg-green-300'
    },
    {
      tagType: user.FrameworkTags as preferenceTags[],
      renderColor: 'bg-rose-300'
    },
    {
      tagType: user.DevelopmentTags as preferenceTags[],
      renderColor: 'bg-blue-300'
    },
    {
      tagType: user.CloudProviderTags as preferenceTags[],
      renderColor: 'bg-amber-300'
    },
    {
      tagType: user.InterestTags as preferenceTags[],
      renderColor: 'bg-violet-300'
    },
    {
      tagType: user.DifficultyTags as preferenceTags[],
      renderColor: 'bg-orange-300'
    },
    {
      tagType: user.SizeTags as preferenceTags[],
      renderColor: 'bg-lime-300'
    }
  ]

  return (
    <div className='bg-white rounded-lg w-full'>
      <div className='flex flex-col'>
        <div className='flex justify-between w-full'>
          <div className='flex'>
            <div className='w-32 h-32 rounded-full'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-2xl font-bold mt-4'>Username</h1>
              <h1 className='text-lg font-semibold mt-1'>@username</h1>
            </div>
          </div>
          <button className='rounded-full hover:bg-slate-300 px-2 py-2 w-12 h-12 mt-2 mr-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
          </button>
        </div>
        {/* <div className='flex flex-row'>
          <div className='flex flex-col justify-center items-center w-1/3'>
            <h1 className='text-2xl font-bold'>1</h1>
            <h1 className='text-lg font-semibold'>Projects</h1>
          </div>
          <div className='flex flex-col justify-center items-center w-1/3'>
            <h1 className='text-2xl font-bold'>1</h1>
            <h1 className='text-lg font-semibold'>Followers</h1>
          </div>
          <div className='flex flex-col justify-center items-center w-1/3'>
            <h1 className='text-2xl font-bold'>1</h1>
            <h1 className='text-lg font-semibold'>Following</h1>
          </div>
        </div> */}
        <div className='flex items-start ml-4 gap-2'>
          <h1 className='text-lg font-semibold'>Bio:</h1>
          <h1 className='text-lg text'>{user.Bio}</h1>
        </div>
        <div className='flex items-center ml-2'>
          <button className='rounded-lg hover:bg-slate-300 px-2 py-2'>
            <a className='flex flex-row items-center space-x-2' href={user.project_link!} target='_blank' rel='noreferrer'>
              <img src={github} alt={'GitHub Logo'} width={30} height={30} />
              <h3>View GitHub Repository</h3>
            </a>
          </button>
        </div>
        <div className='flex justify-center items-center mt-2'>
          <div className='flex flex-wrap'>
            {allTags.map(x => generateTags(x))}
          </div>
        </div>
      </div>
    </div>
  )
}