import React from 'react'
import User from '../img/User.svg'
import {CommentModel} from '../API'


type CommentProps = {
  data: CommentModel
}
export default function Comment(props: CommentProps){

  return (
    <div className='w-[97%] flex bg-slate-200 rounded-lg mb-2 flex-col'>
      <div className='flex m-1 flex-row'>
        <img src={User} alt='User Profile Picture' width={36} height={36}/>
        <div className='flex flex-row w-full items-center justify-between'>
          <h3 className='ml-2'>{props.data.user_name}</h3>
          <h3 className='mr-2'>Date Posted</h3>
        </div>
      </div>
      <div className='ml-3 mb-1'>
        <h3>{props.data.comment}</h3>
      </div>
    </div>
  )
}