import React from 'react'
import Comment from './Comment'

interface CommentSectionData {
  postID: string
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function CommentSection(props: CommentSectionData) {

  return (
    <div className='lg:w-full w-[97%] bg-white rounded-lg mt-4'>
      <h1 className='ml-4 text-lg font-primary mt-2'>1 Comments</h1>
      <div className='flex flex-col items-center font-primary justify-center'>
        <div onClick={e => {
          e.stopPropagation()
          e.currentTarget.focus()
        }}  className='w-full flex my-3 justify-center'>
          <textarea className='block rounded-lg w-[97%] z-20' 
            onClick={e => {
              e.stopPropagation()
              e.currentTarget.focus()
            }} 
            rows={1} cols={40} placeholder={'Write your comment...'}/>
        </div>
        <div className='w-full flex lg:items-start lg:justify-start justify-center'>
          <button className='bg-blue-700 mb-3 lg:ml-5 lg:w-2/12 w-[97%] rounded-lg px-2 py-2 text-white'>Post Comment</button>
        </div>
        <Comment/>
      </div>

    </div>
  )
}