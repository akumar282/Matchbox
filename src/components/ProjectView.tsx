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
      <button className=' flex flex-col items-start hover:bg-purple-300 rounded-lg mr-2 ml-2 mt-3 min-w-[220px] max-w-[220px] lg:max-w-[280px] min-h-[200px] bg-white'>
        <div className='max-h-[120px] overflow-hidden'>
          <a href='#'>
            <img className='rounded-t-lg ' src={props.image} alt='Project Thumbnail' />
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