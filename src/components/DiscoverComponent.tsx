import React, {useContext, useEffect, useState} from 'react'
import {PostsModel} from '../API'
import {getImage} from '../backend/storage/s3'
import github from '../img/github.svg'
import { preferenceTags} from '../backend/types'
import CommentSection from './CommentSection'
import {generateTags, tagRender} from '../functions/helpers'
import {useNavigate} from 'react-router-dom'
import {createSavedPost, deleteSavedPost} from '../backend/mutations/savedPostMutations'
import {v4 as uuidv4} from 'uuid'
import {AuthContext} from './AuthWrapper'
import {createHiddenPost} from '../backend/mutations/hiddenPostMutations'
import {listSavedPosts} from '../backend/queries/savedPostQueries'
import {createLikedPost, deleteLikedPost} from '../backend/mutations/likedPostMutations'
import {listLikedPosts} from '../backend/queries/likedPostQueries'
import JoinModal from './JoinModal'
import {listJoinedPosts} from '../backend/queries/joinedPostQueries'
import ConversationModal from './ConversationModal'
import ErrorAlert, {successStyle, successXStyle} from './alerts/errorAlert'
import ReportPostModal from './ReportPostModal'

interface DiscoverProps {
  data: PostsModel
  editable: boolean
  saved?: boolean
  liked?: boolean
}

export default function DiscoverComponent(props: DiscoverProps) {
  const [saved, setSaved] = useState<boolean>(false)
  const [copySuccess, setCopySuccess] = useState<boolean>(false)
  const [showModalJoin, setShowModalJoin] = React.useState(false)
  const [showReport, setShowReport] = React.useState(false)

  const [showModalConvo, setShowModalConvo] = React.useState(false)
  const [liked, setLiked] = useState<boolean>(false)
  const [joined, setJoined] = useState<boolean>(false)

  const navigate = useNavigate()
  const userInfo = useContext(AuthContext)


  const allTags: tagRender[] = [
    {
      tagType: props.data.lang_tag as preferenceTags[],
      renderColor: 'bg-green-300'
    },
    {
      tagType: props.data.framework_tag as preferenceTags[],
      renderColor: 'bg-rose-300'
    },
    {
      tagType: props.data.dev_type_tag as preferenceTags[],
      renderColor: 'bg-blue-300'
    },
    {
      tagType: props.data.cloud_provider_tag as preferenceTags[],
      renderColor: 'bg-amber-300'
    },
    {
      tagType: props.data.interest_tag as preferenceTags[],
      renderColor: 'bg-violet-300'
    },
    {
      tagType: props.data.difficulty_tag as preferenceTags[],
      renderColor: 'bg-orange-300'
    },
    {
      tagType: props.data.size_tag as preferenceTags[],
      renderColor: 'bg-lime-300'
    }
  ]

  const [projectImage, setProjectImage] = useState('')
  
  function determineButton(joined: boolean){
    if(props.editable && !joined) {
      return (
        <div className='lg:space-x-4 space-y-3'>
          <button
            className="font-primary shadow-lg hover:bg-red-600 bg-red-500 text-white text-lg rounded-lg lg:px-36 w-full lg:w-[45%] py-2"
            onClick={() => navigate(`/project/edit/${props.data.id}`)}
          >
            Edit Project
          </button>
          <button
            className="font-primary shadow-lg hover:bg-indigo-400 bg-emerald-300 text-black text-lg rounded-lg lg:px-36 w-full lg:w-[45%] py-2"
            onClick={() => navigate(`/joined/project/${props.data.id}`)}
          >
            Go to Dashboard
          </button>
        </div>
      )
    }
    if (joined && !props.editable) {
      return (
        <button
          className="font-primary shadow-lg hover:bg-indigo-400 bg-emerald-300 text-black text-lg rounded-lg lg:px-36 w-full lg:w-[45%] py-2"
          onClick={() => navigate(`/joined/project/${props.data.id}`)}
        >
          Go to Dashboard
        </button>
      )
    }
    if (!joined && !props.editable) {
      return (
        <button
          className='font-primary shadow-lg hover:bg-indigo-400 bg-secondary-blue text-white text-lg rounded-lg lg:px-36 w-full lg:w-[45%] py-2'
          onClick={() => setShowModalJoin(true)}
        >
          Join Project
        </button>
      )
    }
  }

  useEffect(() => {
    const fetchImage = async () => {
      props.data.image_link ? setProjectImage(await getImage(props.data.image_link)) : setProjectImage(await getImage())
    }
    fetchImage().catch()
  })



  useEffect(() => {
    const fetchSaved = async () => {
      const savedBody = await listSavedPosts({
        filter: {
          postID: {
            eq: props.data.id
          }
        }
      })
      const { data } = savedBody
      if(data && data.listSavedPostModels) {
        const exists = data.listSavedPostModels.items?.pop()
        setSaved(!!exists)
      }
    }
    fetchSaved().catch()
  }, [])

  useEffect(() => {
    const fetchLiked = async () => {
      const savedBody = await listLikedPosts({
        filter: {
          postID: {
            eq: props.data.id
          }
        }
      })
      const { data } = savedBody
      if(data && data.listLikedPostModels) {
        const exists = data.listLikedPostModels.items?.pop()
        setLiked(!!exists)
      }
    }
    fetchLiked().catch()
  }, [])

  useEffect(() => {
    const fetchJoined = async () => {
      if(userInfo && userInfo.id) {
        const savedBody = await listJoinedPosts({
          filter: {
            postID: {
              eq: props.data.id
            },
            userID: {
              eq: userInfo.id
            }
          }
        })
        const { data } = savedBody
        if(data && data.listJoinedPostModels) {
          const exists = data.listJoinedPostModels.items?.pop()
          setJoined(!!exists)
        }
      }
    }
    fetchJoined().catch()
  }, [])

  const useSavePost = async () => {
    if(userInfo && userInfo.id) {
      if(!saved) {
        await createSavedPost({
          input: {
            id: uuidv4(),
            postID: props.data.id,
            userID: userInfo.id,
            saved_at: new Date().toISOString(),
            count: 1
          }
        })
        setSaved(true)
      } else {
        const savedBody = await listSavedPosts({
          filter: {
            postID: {
              eq: props.data.id
            }
          }
        })
        const { data } = savedBody
        if(data && data.listSavedPostModels) {
          const savedId = data.listSavedPostModels.items.pop()?.id
          await deleteSavedPost({
            input: {
              id: savedId ? savedId : 'noId'
            }
          })
          setSaved(false)
        }
      }
    }
  }

  const useLikedPost = async () => {
    if(userInfo && userInfo.id) {
      if(!liked) {
        await createLikedPost({
          input: {
            id: uuidv4(),
            postID: props.data.id,
            userID: userInfo.id,
            liked_at: new Date().toISOString(),
            count: 1
          }
        })
        setLiked(true)
      } else {
        const savedBody = await listLikedPosts({
          filter: {
            postID: {
              eq: props.data.id
            }
          }
        })
        const { data } = savedBody
        if(data && data.listLikedPostModels) {
          const likedId = data.listLikedPostModels.items.pop()?.id
          await deleteLikedPost({
            input: {
              id: likedId ? likedId : 'noId'
            }
          })
          setLiked(false)
        }
      }
    }
  }

  const triggerCopyAlert = () => {
    navigator.clipboard.writeText(`https://gitmatch.io/project/${props.data.id}`).catch()
    setCopySuccess(true)
    setTimeout(() => {
      setCopySuccess(false)
    }, 3000)  }


  const useHidePost = async () => {
    if(userInfo && userInfo.id) {
      const log = await createHiddenPost({
        input: {
          id: uuidv4(),
          postID: props.data.id,
          userID: userInfo.id,
          hidden_at: new Date().toISOString(),
          count: 1
        }
      })
      console.log(log)
    }
  }

  function isDisabled(): boolean {
    return joined || props.editable
  }


  return (
    <div className='flex flex-col pt-8 pb-12 lg:px-16 w-full z-10'>
      {copySuccess &&
        <ErrorAlert show={copySuccess} closeAlert={triggerCopyAlert} title='Success' message='Link copied to clipboard' closeStyle={successXStyle} colorStyle={successStyle}/>
      }
      <JoinModal setFunction={setShowModalJoin} openModal={showModalJoin} project_id={props.data.id} project_name={props.data.post_title} chat_id={props.data.project_chat}/>
      <ConversationModal setFunction={setShowModalConvo} openModal={showModalConvo} owner_name={props.data.creator_name ? props.data.creator_name : props.data.userID} owner_id={props.data.userID}/>
      <ReportPostModal setFunction={setShowReport} openModal={showReport} user_name={props.data.post_title} post_id={props.data.id}/>
      <div className='flex lg:flex-row flex-col lg:items-stretch items-center lg:space-y-0 space-y-3 lg:space-x-3 space-x-0'>
        <div className='lg:w-64 lg:h-40 w-[97%] h-44 space-y-2 bg-white shadow-lg rounded-lg '>
          <img className='h-full w-full rounded-lg object-cover' src={projectImage} alt='Project Thumbnail'/>
        </div>
        <div className='bg-white rounded-lg lg:w-[800px] w-[97%] flex-auto shadow-lg font-primary justify-between space-y-2 flex items-center flex-col '>
          <h1 className='text-2xl pt-2'>{props.data.post_title}</h1>
          <h3 className='text-center text-lg'>{props.data.description}</h3>
          <div className='flex flex-row w-full md:justify-between  lg:justify-between justify-center'>
            <div className='lg:flex md:flex hidden'>
              <button
                className={`m-2 ${saved ? 'text-yellow-400' : ''}`}
                onClick={() => useSavePost()}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill={`${saved ? 'currentColor' : 'none'}`}
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.593 3.322c1.1.128
                    1.907 1.077 1.907 2.185V21L12
                    17.25 4.5 21V5.507c0-1.108.806-2.057
                    1.907-2.185a48.507 48.507 0
                    0111.186 0z'
                  />
                </svg>
              </button>
            </div>
            <button onClick={() => navigate(`/view/profile/${props.data.userID}`)}>
              <h3 className='text-xs pb-3'>{'Posted by: ' + props.data.creator_name}</h3>
            </button>
            <div className='lg:flex md:flex hidden'>
              <button
                className={`m-2 ${liked ? 'text-red-500' : ''}`}
                onClick={() => useLikedPost()}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill={`${liked ? 'currentColor' : 'none'}`}
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935
                    0-3.597 1.126-4.312
                    2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1
                    3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:hidden mt-2 flex flex-col items-center'>
        <div className='bg-white rounded-lg w-[97%]  lg:hidden md:hidden flex flex-row'>
          <button
            className={`m-3 mx-auto ${saved ? 'text-yellow-400' : ''}`}
            onClick={() => useSavePost()}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill={`${saved ? 'currentColor' : 'none'}`}
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.593 3.322c1.1.128 1.907
                1.077 1.907 2.185V21L12 17.25
                4.5 21V5.507c0-1.108.806-2.057
                1.907-2.185a48.507 48.507 0
                0111.186 0z'
              />
            </svg>
          </button>
          <button
            className={`m-3 mx-auto ${liked ? 'text-red-500' : ''}`}
            onClick={() => useLikedPost()}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill={`${liked ? 'currentColor' : 'none'}`}
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935
                0-3.597 1.126-4.312
                2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1
                3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78
                9-12z'
              />
            </svg>
          </button>
        </div>
      </div>
      <div className='flex flex-col space-y-3 mt-2 items-center'>
        <div className='bg-slate-200 mx-auto shadow-lg lg:w-full w-[97%] rounded-lg'>
          {allTags.map(x => generateTags(x))}
        </div>
        <div className='bg-white font-primary shadow-lg mx-auto lg:w-full  w-[97%] rounded-lg'>
          <h1 className='p-3 text-xl'>Project Description</h1>
          <h3 className='p-3 break-words'>
            {props.data.long_description}
          </h3>
        </div>
        <div className='flex lg:flex-row flex-col bg-white shadow-lg  lg:justify-center divide-gray-300 lg:divide-x-2 lg:divide-y-0 divide-y-2 font-primary mx-auto lg:w-full  w-[97%] rounded-lg'>
          <button className='py-2 px-4 lg:rounded-none rounded-t-lg hover:bg-slate-300 '>
            <a className='flex flex-row items-center space-x-2' href={props.data.project_link!} target='_blank' rel='noreferrer'>
              <img src={github} alt={'GitHub Logo'} width={30} height={30} />
              <h3>View GitHub Repository</h3>
            </a>
          </button>
          <button className='flex flex-row items-center hover:bg-slate-300  space-x-2 py-2 px-4 ' disabled={isDisabled()} onClick={() => setShowModalConvo(true)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none' viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 13.5h3.86a2.25 2.25
                0 012.012 1.244l.256.512a2.25
                2.25 0 002.013 1.244h3.218a2.25
                2.25 0 002.013-1.244l.256-.512a2.25
                2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25
                2.25 0 002.25 2.25h15A2.25 2.25 0
                0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24
                5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25
                2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25
                0 00-.1.661z'
              />
            </svg>
            <h3>Contact Project Owner</h3>
          </button>
          <button className='flex flex-row items-center hover:bg-slate-300 space-x-2 py-2 px-4' onClick={() => triggerCopyAlert()}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M7.217 10.907a2.25 2.25 0
                100 2.186m0-2.186c.18.324.283.696.283
                1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566
                7.5l9.566 5.314m0 0a2.25 2.25 0 103.935
                2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25
                2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z'
              />
            </svg>
            <h3>Share</h3>
          </button>
          <button className='flex flex-row items-center hover:bg-slate-300 space-x-2  py-2 px-4' onClick={() => setShowReport(true)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3 3v1.5M3 21v-6m0 0l2.77-.693a9
                9 0 016.208.682l.108.054a9 9 0
                006.086.71l3.114-.732a48.524 48.524
                0 01-.005-10.499l-3.11.732a9 9 0
                01-6.085-.711l-.108-.054a9 9 0
                00-6.208-.682L3 4.5M3 15V4.5'
              />
            </svg>
            <h3>Report</h3>
          </button>
          <button className='flex flex-row items-center space-x-2 hover:bg-slate-300 lg:rounded-none rounded-b-lg  py-2 px-4 ' onClick={() => useHidePost()}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.98 8.223A10.477 10.477 0
                001.934 12C3.226 16.338 7.244
                19.5 12 19.5c.993 0 1.953-.138
                2.863-.395M6.228 6.228A10.45 10.45
                0 0112 4.5c4.756 0 8.773 3.162 10.065
                7.498a10.523 10.523 0 01-4.293 5.774M6.228
                6.228L3 3m3.228 3.228l3.65 3.65m7.894
                7.894L21 21m-3.228-3.228l-3.65-3.65m0
                0a3 3 0 10-4.243-4.243m4.242
                4.242L9.88 9.88'
              />
            </svg>
            <h3>Hide Project</h3>
          </button>
        </div>
      </div>
      <div className='lg:mt-6 mt-3 flex flex-col w-[97%] mx-auto items-center'>
        {determineButton(joined)}
      </div>
      <div className='flex lg:flex-row flex-col lg:items-stretch items-center lg:space-y-0 space-y-3 lg:space-x-3 space-x-0'>
        <CommentSection postID={props.data.id}/>
      </div>
    </div>
  )
}