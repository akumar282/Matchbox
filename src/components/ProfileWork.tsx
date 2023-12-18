import React from 'react'
import {enumBundle, preferenceTags} from '../backend/types'
import Tags from './Tags'

interface Props {
    job: {
        title: string,
        company: string,
        location: string,
        from: string,
        to: string,
        current: boolean,
        description: string,
        LanguageTags: string[],
        FrameworkTags: string[],
        DevelopmentTags: string[],
        InterestTags: string[],
        CloudProviderTags: string[],
        DifficultyTags: string[],
        SizeTags: string[],
    }
}
type tagRender = {
    tagType: preferenceTags[],
  }
  
function generateTags(props: tagRender) {
  return props.tagType.map((tag) => {
    const bundle: enumBundle = {
      enumMap: tag,
      value: tag,
    }
  
    const tagClasses = 'rounded-lg my-1 px-3 py-2 font-primary bg-primary-purple'
    return (
      <Tags
        key={tag}
        bundle={bundle}
        checked={false}
        className={tagClasses}/>
    )
  })
}

export default function ProfileWork(props: Props) {
  const allTags: tagRender[] = [
    {
      tagType: props.job.LanguageTags as preferenceTags[],
    },
    {
      tagType: props.job.FrameworkTags as preferenceTags[],
    },
    {
      tagType: props.job.DevelopmentTags as preferenceTags[],
    },
    {
      tagType: props.job.CloudProviderTags as preferenceTags[],

    },
    {
      tagType: props.job.InterestTags as preferenceTags[],

    },
    {
      tagType: props.job.DifficultyTags as preferenceTags[],

    },
    {
      tagType: props.job.SizeTags as preferenceTags[],

    }
  ]
  function convertDate(date: string) {
    const dateObj = new Date(date)
    return dateObj.toLocaleString('default', { month: 'long' }) + ' ' + dateObj.getFullYear()
  }
  return (
    <div className='flex flex-col font-primary bg-gray-200 my-2 rounded-lg p-2'>
      <h1 className='text-xl font-semibold pt-2'>{props.job.title}, {props.job.company}</h1>
      <div className='flex flex-row pb-2'>
        <h1 className='text-lg'>{convertDate(props.job.from)} - {convertDate(props.job.to)}</h1>
      </div>
      <div className='flex flex-wrap gap-1 pb-2'>
        {allTags.map(x => generateTags(x))}
      </div>
      <p className='text-lg pb-2'>{props.job.description}</p>
    </div>
  )
}