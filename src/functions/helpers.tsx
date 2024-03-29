import React from 'react'
import {enumBundle, preferenceTags} from '../backend/types'
import Tags from '../components/Tags'


export type tagRender = {
  tagType: preferenceTags[],
  renderColor: string
}
export function imageOrDefault(img: string, size: string = 'w-11 h-11') {
  if (!img) {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.2}
        stroke='currentColor'
        className={size}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'/>
      </svg>
    )
  } else {
    return (
      <img src={img} alt='Profile Picture' className={`${size} rounded-full object-cover overflow-hidden`}/>
    )
  }
}

export function generateTags(props: tagRender) {
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

export function convertISOToMonthYear(isoString: string) {
  const date = new Date(isoString)

  const monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'
  ]

  const month = monthNames[date.getMonth()]
  const year = date.getFullYear()

  return `${month} ${year}`
}

