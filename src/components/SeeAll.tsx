import React from 'react'
import {useNavigate} from 'react-router-dom'

interface SeeAllProps {
  linkTo: string
  bodyText: string
  image: string
}

export default function SeeAllComponent(props: SeeAllProps) {

  const navigate = useNavigate()
  
  return (
    <div>
      <button onClick={() => navigate(`/${props.linkTo}`)} className={`flex flex-col items-start 
      rounded-[20px] mr-2 ml-2 mt-3 min-w-[220px] max-w-[220px] lg:max-w-[280px] h-[220px] 
      border-4 border-dashed hover:bg-purple-300 border-gray-500 justify-center`
      }>
        <div className='p-2 flex flex-col w-full justify-center space-y-2 items-center'>
          <h5 className='text-sm font-primary font-light leading-tight'>
            {props.bodyText}
          </h5>
          <img src={props.image} width={50} height={50} alt={'Saved Icon'}/>
          <button onClick={() => navigate(`/${props.linkTo}`)} className='underline font-primary text-secondary-blue hover:text-indigo-400'>See All</button>
        </div>
      </button>
    </div>
  )
}