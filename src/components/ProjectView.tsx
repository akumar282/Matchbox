import React from 'react'
import github from '../img/github.svg'
import {ProjectViewProps} from '../functions/sharedProps'
import {useNavigate} from 'react-router-dom'

export default function ProjectView(props: ProjectViewProps) {

  const navigate = useNavigate()

  return (
    <div>
      <div
        className='h-[220px] flex flex-col rounded-[20px] items-start hover:shadow-lg hover:bg-primary-purple mr-2 ml-2 mt-3 w-[220px] lg:w-[251.5px] bg-white border border-gray-200'
        onClick={() => navigate(`/project/${props.id}`)}
      >
        <div className='h-[170px] w-full overflow-hidden'>
          <a href='#'>
            <img className='w-full h-full rounded-t-lg object-cover' src={props.image} alt='Project Thumbnail' />
          </a>
        </div>
        <div className='p-2 flex flex-row w-full justify-between'>
          <h5 className='text-xl font-primary font-light leading-tight flex-shrink overflow-hidden text-ellipsis whitespace-nowrap'>
            {props.title}
          </h5>
          <button className='pr-1 flex-shrink-0'>
            <a href={props.github}>
              <img src={github} alt='GitHub Link' className='w-6 h-6' />
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}