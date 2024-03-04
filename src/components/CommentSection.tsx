/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react'
import Comment from './Comment'
import {listComment} from '../backend/queries/commentQueries'
import {CommentModel} from '../API'

interface CommentSectionData {
  postID: string
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function CommentSection(props: CommentSectionData) {

  const [pagination, setPagination] = useState<boolean>()
  const [nextToken, setNextToken] = useState<string | null>()
  const [commentsData, setCommentsData] = useState<CommentModel[] | undefined>([])
  const [isError, setError] = useState<boolean>()

  useEffect(() => {
    const getFiveComments = async () => {
      const {data, errors} = await listComment({
        input: {
          filter: {
            postID: {
              eq: props.postID
            }
          },
          limit: 5
        }
      })

      setError(!errors)
      setPagination(!data?.listCommentModels?.nextToken)
      setNextToken(data?.listCommentModels?.nextToken)
      setCommentsData(data?.listCommentModels?.items as CommentModel[])
    }

    getFiveComments()
  }, [])

  function noCommentsAvail() {

    return (
      <div className="w-[97%] py-3 flex bg-slate-200 text-center rounded-lg mb-2 flex-col items-center">
        <div>
          <h3>No comments yet... Be the first to write one!</h3>
        </div>
      </div>
    )
  }

  return (
    <div className="lg:w-full w-[97%] bg-white rounded-lg mt-4">
      <h1 className="ml-4 text-lg font-primary mt-2">{commentsData?.length} Comments</h1>
      <div className="flex flex-col items-center font-primary justify-center">
        <div onClick={e => {
          e.stopPropagation()
          e.currentTarget.focus()
        }} className="w-full flex my-3 justify-center">
          <textarea className="block rounded-lg w-[97%] z-20" 
            onClick={e => {
              e.stopPropagation()
              e.currentTarget.focus()
            }} 
            rows={1} cols={40} placeholder={'Write your comment...'}/>
        </div>
        <div className='w-full flex lg:items-start lg:justify-start justify-center'>
          <button className='bg-blue-700 mb-3 lg:ml-5 lg:w-2/12 w-[97%] rounded-lg px-2 py-2 text-white'>Post Comment</button>
        </div>
        {commentsData && commentsData.length > 0 ? (
          commentsData?.map(x => <Comment key={x.id} data={x}/>) // Existing behavior if commentsData is not null
        ) : (
          noCommentsAvail()
        )}
      </div>
    </div>
  )
}