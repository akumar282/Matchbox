/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react'
import {CloudProviderTag, PostsModel} from '../API'
import {getImage} from '../backend/storage/s3'
import dji_0043 from '../img/dji_0043.jpg'
import NewLogo from '../img/NewLogo.png'
import {enumBundle, preferenceTags} from '../backend/types'
import Tags from './Tags'

interface DiscoverProps {
  data: PostsModel
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
export default function DiscoverComponent(props: DiscoverProps) {

  const allTags: tagRender[] = [
    {
      tagType: props.data.lang_tag as preferenceTags[],
      renderColor: 'bg-green-300'
    },
    {
      tagType: props.data.framework_tag as preferenceTags[],
      renderColor: 'bg-rose-300'
    },
    {
      tagType: props.data.dev_type_tag as preferenceTags[],
      renderColor: 'bg-blue-300'
    },
    {
      tagType: props.data.cloud_provider_tag as preferenceTags[],
      renderColor: 'bg-amber-300'
    },
    {
      tagType: props.data.interest_tag as preferenceTags[],
      renderColor: 'bg-violet-300'
    },
    {
      tagType: props.data.difficulty_tag as preferenceTags[],
      renderColor: 'bg-orange-300'
    },
    {
      tagType: props.data.size_tag as preferenceTags[],
      renderColor: 'bg-lime-300'
    }
  ]

  const [projectImage, setProjectImage] = useState('')

  useEffect(() => {
    const fetchImage = async () => {
      props.data.image_link ? setProjectImage(await getImage(props.data.image_link)) : setProjectImage(await getImage())
    }
    fetchImage()
  })

  return (
    <div className='flex flex-col pt-8 w-full'>
      <div className='flex lg:flex-row flex-col lg:items-stretch items-center lg:space-y-0 space-y-3 lg:space-x-3 space-x-0'>
        <div className='lg:w-64 lg:h-40 w-[97%] h-44 space-y-2 bg-white rounded-lg '>
          <img className='h-full w-full rounded-lg object-cover' src={NewLogo} alt='Project Thumbnail'/>
        </div>
        <div className='bg-white rounded-lg lg:w-[800px] w-[97%] flex-auto font-primary justify-between space-y-2 flex items-center flex-col '>
          <h1 className='text-2xl pt-2'>{props.data.post_title}</h1>
          <h3 className='text-center text-lg'>{props.data.description}</h3>
          <div className='flex flex-row w-full  lg:justify-between justify-center'>
            <div className='lg:flex hidden'>
              <button className='m-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
              </button>
            </div>
            <h3 className='text-xs pb-3'>{'Posted by: ' + props.data.creator_name}</h3>
            <div className='lg:flex hidden'>
              <button className='m-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:hidden mt-2 flex flex-col items-center'>
        <div className='bg-white rounded-lg w-[97%]  lg:hidden md:hidden flex flex-row'>
          <button className='m-3 mx-auto '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
          </button>
          <button className='m-3 mx-auto '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </button>
        </div>
      </div>
      <div className='flex flex-col lg:max-w-[1170px] space-y-3 mt-2 items-center'>
        <div className='bg-slate-200 mx-auto lg:w-full w-[97%] rounded-lg'>
          {allTags.map(x => generateTags(x))}
        </div>
        <div className='bg-white font-primary mx-auto lg:w-full  w-[97%] rounded-lg'>
          <h1 className='p-3 text-xl'>Project Description</h1>
          <h3 className='p-3'>
            {props.data.long_description}
          </h3>
        </div>
      </div>


    </div>
  )
}