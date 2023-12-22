import React from 'react'

// TODO: Add props to injest user data
export default function ProfileProjects() {
  return (
    <div className='rounded-lg mt-2 w-full px-2'>
      <div className='flex flex-col'>
        <div className='justify-between flex items-center'>
          <h1 className='text-2xl font-primary font-bold'>Projects</h1>
          <button >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
        <h1 className='text-lg font-primary mt-1'> Add your projects experience here</h1>
        <div className='overflow-x-auto'> 
          <div className='flex lg:grid lg:grid-cols-3 md:grid-cols-3 gap-2 mt-2'>

          </div>
        </div>
      </div>
    </div>
  )
}
