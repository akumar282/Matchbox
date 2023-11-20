import React, { ButtonHTMLAttributes } from 'react'
import { enumBundle } from '../backend/types'

interface tagButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  bundle: enumBundle
  checked: boolean
  typeTag?: string
}

function formatLabel(text: string) {
  let formattedString = text.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
  formattedString = formattedString.replace('PLUS', '+')
  if (formattedString === 'C++') {
    return formattedString
  } else if (formattedString.startsWith('C ')) {
    return formattedString.replace('C ', 'C')
  }
  return formattedString
}

export default function Tags(props: tagButton){
  return (
    <button itemID={props.typeTag} className={`rounded-lg hover:bg-violet-400 ${props.checked ? 'bg-violet-400' : 'bg-violet-300'} my-2 ml-3 px-3 py-2 font-primary`} onClick={props.onClick}>
      {formatLabel(props.bundle.value)}
      {props.checked && (
        <svg
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 22 22'
          stroke='currentColor'
          className='flex-shrink-0 inline w-4 h-4 ml-1 mb-1'
        >
          <path d='M6 18L18 6M6 6l12 12'></path>
        </svg>
      )}
    </button>
  )

}