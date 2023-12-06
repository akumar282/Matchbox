import React from 'react'
import User from '../img/User.svg'

export default function Comment(){

  return (
    <div className='w-[97%] flex bg-slate-200 rounded-lg mb-2 flex-col'>
      <div className='flex m-1 flex-row'>
        <img src={User} alt='User Profile Picture' width={36} height={36}/>
        <div className='flex flex-row w-full items-center justify-between'>
          <h3 className='ml-2'>User Name</h3>
          <h3 className='mr-2'>Date Posted</h3>
        </div>
      </div>
      <div className='ml-3 mb-1'>
        <h3>User Comment</h3>
      </div>
    </div>
  )
}