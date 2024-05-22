import React from 'react'
import {UsersModel} from '../API'
import {convertISOToMonthYear, generateTags, imageOrDefault, tagRender} from '../functions/helpers'
import {preferenceTags} from '../backend/types'
import github from '../img/github.svg'
import {useNavigate} from 'react-router-dom'

interface userData {
  data: UsersModel
  picture: string
  postsNum: number
  projects: React.ReactNode[]
  editable: boolean
}

export default function ProfileHeader(props: userData) {

  const { data } = props
  const navigate = useNavigate()

  const allTags: tagRender[] = [
    {
      tagType: data.lang_tag as preferenceTags[],
      renderColor: 'bg-green-300'
    },
    {
      tagType: data.framework_tag as preferenceTags[],
      renderColor: 'bg-rose-300'
    },
    {
      tagType: data.dev_type_tag as preferenceTags[],
      renderColor: 'bg-blue-300'
    },
    {
      tagType: data.cloud_provider_tag as preferenceTags[],
      renderColor: 'bg-amber-300'
    },
    {
      tagType: data.interest_tag as preferenceTags[],
      renderColor: 'bg-violet-300'
    },
    {
      tagType: data.difficulty_tag as preferenceTags[],
      renderColor: 'bg-orange-300'
    },
    {
      tagType: data.size_tag as preferenceTags[],
      renderColor: 'bg-lime-300'
    }
  ]

  return (
    <>
      <div className='bg-white rounded-lg w-full px-2 py-2 '>
        <div className="flex flex-col">
          <div className="flex justify-between w-full">
            <div className="flex flex-col mt-4 lg:ml-4 space-x-4 md:flex-row lg:flex-row">
              <div className="w-28 h-28 lg:m-0 ml-4 rounded-full">
                {imageOrDefault(props.picture, 'w-28 h-28')}
              </div>
              <div className="flex flex-col justify-center items-start ml-2">
                <h1 className="text-2xl mt-4 font-secondary font-thin">{data.first_name} {data.last_name}</h1>
                <h1 className="text-lg font-secondary font-thin mt-1">@{data.user_name}</h1>
              </div>
            </div>
            {props.editable ? (
              <button className="rounded-full hover:bg-slate-300 px-2 py-2 w-12 h-12 mt-2 mr-2"
                onClick={() => navigate('/settings')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"/>
                </svg>
              </button>
            ) : (
              <div/>
            )}
          </div>
          <div className="flex flex-col font-primary items-start lg:ml-3 ml-2 my-3 gap-2">
            <h1 className="text-md text">Joined {convertISOToMonthYear(data.createdAt)}</h1>
            <h1 className="text-md text">{props.postsNum} Posts</h1>
          </div>
          <div className="flex items-center font-primary ml-2">
            <button className="rounded-lg bg-slate-200 hover:bg-slate-300 px-2 py-2">
              {props.editable ?
                (data.github_link ?
                  <a className="flex flex-row items-center space-x-2" href={data.github_link} target="_blank"
                    rel="noreferrer">
                    <img src={github} alt={'GitHub Logo'} width={30} height={30}/>
                    <h3>View GitHub Profile</h3>
                  </a>
                  :
                  <a className="flex flex-row items-center space-x-2" href={'https://github.com'} target="_blank"
                    rel="noreferrer">
                    <img src={github} alt={'GitHub Logo'} width={30} height={30}/>
                    <h3>Connect Github Account</h3>
                  </a>
                )
                :
                <div></div>
              }
            </button>
          </div>
          <div className="flex flex-col font-primary items-start lg:ml-3 ml-2 my-2">
            <h1 className="text-md text">{props.data.bio}</h1>
          </div>
          <div className="flex justify-start items-center mt-4">
            <div className="flex flex-wrap">
              {allTags.map(x => generateTags(x))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg px-2 py-2 w-full mt-6 font-primary">
        <div className="items-start pt-3 pb-8 max-w-[1070px] mx-auto">
          {props.editable ? (
            <>
              <h1 className="text-2xl font-primary ml-3 mt-3">Your Projects</h1>
              <h3 className='text-sm font-primary ml-3 mt-1'>Projects that you are collaborating on:</h3>
            </>
          ) : (
            <>
              <h1 className='text-2xl font-primary ml-3 mt-3'>{data.user_name}&apos;s Projects</h1>
              <h3 className='text-sm font-primary ml-3 mt-1'>Projects that {data.user_name} is collaborating on:</h3>
            </>
          )}
          <div className='overflow-x-auto'>
            <div className='flex mt-2 lg:grid lg:grid-cols-4 md:grid-cols-4 md:grid'>
              {props.projects}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}