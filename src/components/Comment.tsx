import React, {useEffect, useState} from 'react'
import {CommentModel} from '../API'
import {getImage} from '../backend/storage/s3'
import {timeSince} from '../functions/helpers'


type CommentProps = {
  data: CommentModel
}
export default function Comment(props: CommentProps){

  const [commentImage, setCommentImage] = useState('')

  useEffect(() => {
    const fetchImage = async () => {
      props.data.userInfo?.profile_image ? setCommentImage(await getImage(props.data.userInfo.profile_image)) : setCommentImage(await getImage())
    }
    fetchImage().catch()
  }, [props.data.userInfo?.profile_image])

  return (
    <div className='w-[97%] flex bg-slate-200 rounded-lg mb-2 flex-col'>
      <div className='flex m-1 ml-4 mt-3 mb-3 flex-row'>
        <div className='w-9 h-9'>
          <img src={commentImage} alt='User Profile Picture' className={'strict-circle rounded-full object-cover'}/>
        </div>
        <div className='flex flex-row w-full items-center justify-between'>
          <h3 className='ml-2'>@{props.data.user_name}</h3>
          <h3 className='mr-4 tracking-tighter'>{timeSince(props.data.createdAt)}</h3>
        </div>
      </div>
      <div className='ml-5 mb-3'>
        <h3>{props.data.comment}</h3>
      </div>
    </div>
  )
}