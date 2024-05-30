import React, {useContext, useEffect, useState} from 'react'
import {CommentModel} from '../API'
import {getImage} from '../backend/storage/s3'
import {timeSince} from '../functions/helpers'
import {AuthContext} from './AuthWrapper'
import {deleteComment} from '../backend/mutations/commentMutations'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type CommentProps = {
  data: CommentModel
  setFunction: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Comment(props: CommentProps){

  const [commentImage, setCommentImage] = useState('')
  const [isDelete, setIsDelete] = useState<boolean>(false)
  const userInfo = useContext(AuthContext)

  useEffect(() => {
    const fetchImage = async () => {
      props.data.userInfo?.profile_image ? setCommentImage(await getImage(props.data.userInfo.profile_image)) : setCommentImage(await getImage())
      if(props.data.userID === userInfo?.id){
        setIsDelete(true)
      }
    }
    fetchImage().catch()
  }, [props.data.userInfo?.profile_image])

  const useDeleteComment = async () => {
    if(userInfo && userInfo.id && isDelete) {
      await deleteComment({
        input: {
          id: props.data.id
        }
      })
      props.setFunction(prev => !prev)
    }
  }

  const formattedText = props.data.comment.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      <Markdown remarkPlugins={[[remarkGfm, {singleTilde: true}]]}>{line}</Markdown>
      <br />
    </React.Fragment>
  ))

  return (
    <div className='w-[97%] flex bg-slate-200 rounded-lg mb-2 flex-col'>
      <div className='flex m-1 ml-4 mt-3 mb-2 flex-row'>
        <div className='w-9 h-9'>
          <img src={commentImage} alt='User Profile Picture' className={'strict-circle rounded-full object-cover'}/>
        </div>
        <div className='flex flex-row w-full items-center justify-between'>
          <h3 className='ml-2'>@{props.data.user_name}</h3>
          <h3 className='mr-4 tracking-tighter'>{timeSince(props.data.createdAt)}</h3>
        </div>
      </div>
      <div className='ml-5 mb-3'>
        <div className='flex flex-row w-full items-center justify-between'>
          <span className='w-4/5 break-words'>{formattedText}</span>
          <button className={`${isDelete === false ? 'hidden' : ''} pr-10 pb-1`} onClick={() => useDeleteComment()}>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
              stroke='currentColor' className='w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round'
                d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 
                1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 
                2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 
                0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 
                1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 
                0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 
                0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 
                0 0 0-7.5 0'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}