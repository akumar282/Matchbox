import React, {useContext, useEffect, useState} from 'react'
import {PostsModel} from '../API'
import {preferenceTags} from '../backend/types'
import {getImage} from '../backend/storage/s3'
import github from '../img/github.svg'
import {useNavigate} from 'react-router-dom'
import {generateTags, tagRender} from '../functions/helpers'
import ErrorAlert, {successStyle, successXStyle} from './alerts/errorAlert'
import ConversationModal from './ConversationModal'
import ReportPostModal from './ReportPostModal'
import {createHiddenPost} from '../backend/mutations/hiddenPostMutations'
import {v4 as uuidv4} from 'uuid'
import {AuthContext} from './AuthWrapper'

interface BrowseProps {
  data: PostsModel
}

export default function BrowseComponent(props: BrowseProps) {
  const [copySuccess, setCopySuccess] = useState<boolean>(false)
  const [showReport, setShowReport] = React.useState(false)
  const [showModalConvo, setShowModalConvo] = React.useState(false)

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [projectImage, setProjectImage] = useState('')

  useEffect(() => {
    const fetchImage = async () => {
      props.data.image_link ? setProjectImage(await getImage(props.data.image_link)) : setProjectImage(await getImage())
    }
    fetchImage()
  })

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


  return (
    <div className='flex flex-col bg-white rounded-[20px] pb-2 mb-16 mx-auto items-center shadow-lg w-[97%]'>
      <div className='mt-4'>
        {copySuccess &&
          <ErrorAlert show={copySuccess} closeAlert={triggerCopyAlert} title='Success' message='Link copied to clipboard' closeStyle={successXStyle} colorStyle={successStyle}/>
        }
      </div>
      <ConversationModal setFunction={setShowModalConvo} openModal={showModalConvo} owner_name={props.data.creator_name ? props.data.creator_name : props.data.userID} owner_id={props.data.userID}/>
      <ReportPostModal setFunction={setShowReport} openModal={showReport} user_name={props.data.post_title} post_id={props.data.id}/>
      <button className='flex flex-col lg:flex-row pb-2 px-2 w-full' onClick={() => navigate(`/project/${props.data.id}`)}>
        <div className='lg:w-64 lg:h-40 w-[97%] ml-3 h-44 space-y-2 bg-white shadow-sm rounded-lg '>
          <img className='h-full w-full rounded-lg object-cover' src={projectImage} alt='Project Thumbnail'/>
        </div>
        <div className='font-primary flex flex-col mx-auto items-center space-y-3'>
          <h1 className='text-2xl pt-2'>{props.data.post_title}</h1>
          <h3 className='text-center text-lg'>{props.data.description}</h3>
          <h3 className='text-xs pb-3'>{'Posted by: ' + props.data.creator_name}</h3>
        </div>
      </button>
      <div className='p-2'>
        {allTags.map(x => generateTags(x))}
      </div>
      <div
        className='flex lg:flex-row flex-col bg-white py-2 lg:justify-center divide-gray-300 lg:divide-x-2 lg:divide-y-0 divide-y-2 font-primary mx-auto lg:w-full  w-[97%] rounded-lg'>
        <button className='py-2 px-4 lg:rounded-none rounded-t-lg hover:bg-slate-300 '>
          <a className='flex flex-row items-center space-x-2' href={props.data.project_link!} target='_blank'
            rel='noreferrer'>
            <img src={github} alt={'GitHub Logo'} width={30} height={30}/>
            <h3>View GitHub Repository</h3>
          </a>
        </button>
        <button className='flex flex-row items-center hover:bg-slate-300 space-x-2 py-2 px-4'
          onClick={() => triggerCopyAlert()}>
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
        <button className='flex flex-row items-center hover:bg-slate-300 space-x-2  py-2 px-4'
          onClick={() => setShowReport(true)}>
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
        <button
          className='flex flex-row items-center space-x-2 hover:bg-slate-300 lg:rounded-none rounded-b-lg  py-2 px-4 '
          onClick={() => useHidePost()}>
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
  )
}