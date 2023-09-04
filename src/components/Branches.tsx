import React from 'react'
import branchborder from '../img/branchborder.png'

export default function GitBranches() {
  return (
    <div className='flex justify-start items-center overflow-hidden -mt-1 '>
      <div className='flex-none z-0'>
        <img src={branchborder} alt='' />
      </div>
      <div className='-scale-y-100 -rotate-180 flex-none'>
        <img src={branchborder} alt='' />
      </div>
      <div className='flex-none z-0'>
        <img src={branchborder} alt='' />
      </div>
    </div>
  )
}