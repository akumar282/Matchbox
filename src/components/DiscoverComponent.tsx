import React, {useEffect, useState} from 'react'
import { PostsModel } from '../API'
import {getImage} from '../backend/storage/s3'

export default function DiscoverComponent(props: PostsModel) {

  const [projectImage, setProjectImage] = useState('')

  useEffect(() => {
    const fetchImage = async () => {
      props.image_link ? setProjectImage(await getImage(props.image_link)) : setProjectImage(await getImage())
    }

    fetchImage()
  })

  return (
    <div className='flex flex-col' >
      <div className='flex flex-row'>
        <div className='bg-white shadow-xl rounded-lg mr-3'>
          <img  src={projectImage} alt='Project Thumbnail' />
        </div>
        <div className='bg-white shadow-xl rounded-lg'>
          <h1>{props.post_title}</h1>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}