/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext, useEffect, useState} from 'react'
import Comment from './Comment'
import {listComment} from '../backend/queries/commentQueries'
import {CommentModel} from '../API'
import {useFormik} from 'formik'
import * as yup from 'yup'
import {createComment} from '../backend/mutations/commentMutations'
import {AuthContext} from './AuthWrapper'
import {createCommentSubscription} from '../backend/subscriptions/subscriptions'

interface CommentSectionData {
  postID: string
}

export default function CommentSection(props: CommentSectionData) {

  const [nextToken, setNextToken] = useState<string | null>(null)
  const [commentsData, setCommentsData] = useState<CommentModel[]>([])
  const [isError, setError] = useState<boolean>()

  const userInfo = useContext(AuthContext)

  useEffect(() => {
    const getFiveComments = async () => {
      const {data, errors} = await listComment({
        filter: {
          postID: {
            eq: props.postID
          }
        },
        limit: 6
      })
      if(data && data.listCommentModels && data.listCommentModels.nextToken) {
        setNextToken(data.listCommentModels.nextToken && (data.listCommentModels.items.length === 0 || data.listCommentModels.items.length < 5) ? null : data.listCommentModels.nextToken)
        setCommentsData(data.listCommentModels.items as CommentModel[])
      }
      setError(!errors)

    }

    getFiveComments().catch()
  }, [props.postID])

  useEffect(() => {
    if(props.postID) {
      const subscription = createCommentSubscription((value) => {
        const updatedMessages = value.data.onCreateCommentModel ? [...commentsData, value.data.onCreateCommentModel] : commentsData
        setCommentsData(updatedMessages)
      },
      {
        filter: {
          postID: {
            eq: props.postID
          }
        }
      })
      return () => subscription.unsubscribe()
    }
  }, [props.postID, commentsData])

  const validationSchema = yup.object({
    comment: yup
      .string()
      .min(3, 'Message should be a minimum of 1 character')
      .required('Message is required')
  })

  const formik = useFormik({
    initialValues: {
      comment: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if(userInfo && userInfo.id && userInfo.userName){
        await createComment({
          input: {
            comment: values.comment,
            postID: props.postID,
            userID: userInfo.id,
            user_name: userInfo.userName
          }
        })
      }
      values.comment = ''
    },
  })

  const useRequery = async () => {
    const {data, errors} = await listComment({
      filter: {
        postID: {
          eq: props.postID
        }
      },
      limit: 5,
      nextToken: nextToken
    })
    if(data && data.listCommentModels) {
      const updatedCommentsList = data.listCommentModels.items ? [...commentsData, ...data.listCommentModels.items] : commentsData
      setCommentsData(updatedCommentsList as CommentModel[])
      if(data.listCommentModels.nextToken === null) {
        setNextToken(null)
      } else if(data.listCommentModels.nextToken) {
        setNextToken(data.listCommentModels.nextToken)
      }
    }
  }

  function noCommentsAvail() {

    return (
      <div className='w-[97%] py-3 flex bg-slate-200 text-center rounded-lg mb-2 flex-col items-center'>
        <div>
          <h3>No comments yet... Be the first to write one!</h3>
        </div>
      </div>
    )
  }

  return (
    <div className='lg:w-full w-[97%] bg-white rounded-lg mt-4'>
      <h1 className='ml-4 text-lg font-primary mt-2'>{commentsData?.length} Comments</h1>
      <div className='flex flex-col items-center font-primary justify-center'>
        <form className='w-full' onSubmit={formik.handleSubmit}>
          <div onClick={e => {
            e.stopPropagation()
            e.currentTarget.focus()
          }} className='w-full flex my-3 justify-center'>
            <textarea className='block rounded-lg w-[97%] z-20'
              onClick={e => {
                e.stopPropagation()
                e.currentTarget.focus()
              }}
              name='comment'
              id='comment'
              value={formik.values.comment}
              onChange={formik.handleChange}
              rows={1} cols={40} placeholder={'Write your comment...'}/>
          </div>
          <div className='w-full flex lg:items-start lg:justify-start justify-center'>
            <button className='bg-blue-700 mb-3 lg:ml-5 lg:w-2/12 w-[97%] rounded-lg px-2 py-2 text-white' type='submit'>Post
              Comment
            </button>
          </div>
        </form>

        {commentsData && commentsData.length > 0 ? (
          commentsData?.map(x => <Comment key={x.id} data={x}/>)
        ) : (
          noCommentsAvail()
        )}
        {nextToken !== null ?
          <button className='bg-blue-700 mb-5 lg:ml-5 lg:w-2/12 w-[97%] rounded-lg px-2 py-2 text-white' onClick={() => useRequery()}>
            See More
          </button>
          :
          <></>
        }
      </div>
    </div>
  )
}