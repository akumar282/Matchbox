import React from 'react'

export const errorStyle: string = 'flex items-center text-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800'
export const warnStyle: string = 'flex items-center text-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300'
export const successStyle: string = 'flex items-center text-center p-4 mb-4 text-sm text-green-800 rounded-lg border-green-300 bg-green-50 dark:bg-gray-800 dark:text-green-400'

export const errorXStyle: string = 'w-4 h-4 text-red-800 dark:text-red-400 cursor-pointer'
export const warnXStyle: string = 'w-4 h-4 text-yellow-800 dark:text-yellow-400 cursor-pointer'
export const successXStyle: string = 'w-4 h-4 text-green-800 dark:text-green-400 cursor-pointer'

export default function ErrorAlert(props: { show, closeAlert, title, message, colorStyle, closeStyle }) {


  if (!props.show) {
    return null
  }

  return (
    <div className={props.colorStyle} role='alert'>
      <svg className='flex-shrink-0 inline w-4 h-4 mr-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
        <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
      </svg>
      <span className='sr-only'>Info</span>
      <div>
        <span className='font-medium px-2'>{props.title}</span>
        <span className='font-medium'></span>{props.message}
      </div>
      <button className='ml-auto px-2' onClick={props.closeAlert}>
        <svg
          className={props.closeStyle}
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 22 22'
          stroke='currentColor'
        >
          <path d='M6 18L18 6M6 6l12 12'></path>
        </svg>
      </button>
    </div>
  )
}
  