import React from 'react'
import {enumBundle, preferenceTags} from '../backend/types'
import Tags from './Tags'


// TODO: Refactor for schema
interface Props {
    job: {
        title: string,
        org_name: string,
        start_date: string,
        end_date: string,
        description: string,
        lang_tag: string[],
        dev_type_tag: string[],
        framework_tag: string[],
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
      tagType: props.job.lang_tag as preferenceTags[],
    },
    {
      tagType: props.job.dev_type_tag as preferenceTags[],
    },
    {
      tagType: props.job.framework_tag as preferenceTags[],
    },
  ]
  function convertDate(date: string) {
    const dateObj = new Date(date)
    return dateObj.toLocaleString('default', { month: 'long' }) + ' ' + dateObj.getFullYear()
  }

  return (
    <div className='flex flex-col font-primary bg-gray-200 my-2 rounded-lg p-2'>
      <h1 className='text-xl font-semibold pt-2'>{props.job.title}, {props.job.org_name}</h1>
      <div className='flex flex-row pb-2'>
        <h1 className='text-lg'>{convertDate(props.job.start_date)} - {props.job.end_date ? convertDate(props.job.end_date) : 'Present'}</h1>
      </div>
      <div className='flex flex-wrap gap-1 pb-2'>
        {allTags.map(x => generateTags(x))}
      </div>
      <p className='text-lg pb-2'>{props.job.description}</p>
    </div>
  )
}