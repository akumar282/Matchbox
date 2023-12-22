import React from 'react'
import github from '../img/github.svg'

interface ProjectViewProps {
  title: string
  image: string
  github: string
}

export default function ProjectView(props: ProjectViewProps) {
  return (
    <div>
      <button className='h-[220px] flex flex-col items-start hover:shadow-lg rounded-lg mr-2 ml-2 mt-3 w-[220px] lg:w-[280px] bg-white border border-gray-200'>
        <div className='h-[170px] w-full overflow-hidden'>
          <a href='#'>
            <img className='w-full h-full rounded-t-lg object-scale-down' src={props.image} alt='Project Thumbnail' />
          </a>
        </div>
        <div className='p-2 flex flex-row w-full justify-between'>
          <h5 className='text-xl font-primary font-light leading-tight'>
            {props.title}
          </h5>
          <button className=''>
            <a href={props.github}>
              <img src={github} alt='GitHub Link' className='w-6 h-6' />
            </a>
          </button>
        </div>
      </button>
    </div>
  )
}