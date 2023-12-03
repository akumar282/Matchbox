// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {useEffect, useState} from 'react'
// import { PostsModel } from '../API'
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import {getImage} from '../backend/storage/s3'
import dji_0043 from '../img/dji_0043.jpg'

// interface DiscoverProps {
//   data: PostsModel
// }
export default function DiscoverComponent() {

  // const [projectImage, setProjectImage] = useState('')
  //
  // useEffect(() => {
  //   const fetchImage = async () => {
  //     props.image_link ? setProjectImage(await getImage(props.image_link)) : setProjectImage(await getImage())
  //   }
  //
  //   fetchImage()
  // })

  return (
    <div className='flex flex-col pt-8 w-full'>
      <div className='flex lg:flex-row flex-col  items-center lg:space-x-3 space-y-2 space-x-0'>
        <div className='lg:w-64 lg:h-40 w-[97%] h-44 space-y-2 bg-white rounded-lg '>
          <img className='h-full w-full rounded-lg object-cover' src={dji_0043} alt='picture'/>
        </div>
        <div className='bg-white rounded-lg lg:w-[800px] w-[97%] h-full font-primary space-y-2 flex items-center flex-col grow'>
          <h1 className='text-2xl pt-2'>Project Name</h1>
          <h3 className='text-center'>Welcome to Matchbox! Where innovation ignites... Our web application connects developers to projects that align with their interests, experience, and values</h3>
        </div>
      </div>
    </div>
  )
}