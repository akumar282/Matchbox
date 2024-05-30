import React, { ButtonHTMLAttributes } from 'react'
import { enumBundle } from '../backend/types'


interface tagButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  bundle: enumBundle
  checked: boolean
  typeTag?: string
}

function formatLabel(text: string) {
  // if there is a _PLUS in the text, replace it with a +
  if (text.includes('_PLUS_PLUS')) {
    text = text.replace('_PLUS_PLUS', '++')
  }
  // if there is a _SHARP in the text, replace it with a #
  if (text.includes('_SHARP')) {
    text = text.replace('_SHARP', '#')
  }
  // otherwise, replace all underscores with spaces
  else {
    text = text.replace(/_/g, ' ')
  }
  return text
}



export default function Tags(props: tagButton){

  return (
    <button itemID={props.typeTag} className={props.className} onClick={props.onClick}>
      <div className='flex flex-row items-center'>
        {formatLabel(props.bundle.value)}
        {props.checked && (
          <svg
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 22 22'
            stroke='currentColor'
            className='flex-shrink-0 inline w-4 h-4 ml-1 mt-1 mb-1'
          >
            <path d='M6 18L18 6M6 6l12 12'></path>
          </svg>
        )}
      </div>

    </button>
  )

}