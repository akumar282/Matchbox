import React, {useContext} from 'react'
import NewLogo from '../img/NewLogo.png'
import github from '../img/github.svg'
import {
  CloudProviderTag,
  DevelopmentTag,
  DifficultyTag,
  FrameworkTag,
  InterestTag,
  LanguageTag,
  SizeTag,
} from '../API'
import {enumBundle, preferenceTags} from '../backend/types'
import Tags from './Tags'
import {AuthContext} from './AuthWrapper'
import {createConversation} from '../backend/mutations/conversationMutations'
import {createPost, updatePost} from '../backend/mutations/projectMutations'
import {uploadImage} from '../backend/storage/s3'
import {v4 as uuidv4} from 'uuid'
import {getImageBlob} from '../functions/helpers'
import {createConvo} from '../backend/mutations/userConvoMutations'
import {useNavigate} from 'react-router-dom'

interface Props {
  SelectedTags: {
    LanguageTags: LanguageTag[];
    FrameworkTags: FrameworkTag[];
    DevelopmentTags: DevelopmentTag[];
    InterestTags: InterestTag[];
    CloudProviderTags: CloudProviderTag[];
    DifficultyTags: DifficultyTag[];
    SizeTags: SizeTag[];
  };
  prevSlide: () => void;
  SelectedValues : {
    projectTitle: string,
    projectDescription: string,
    projectExternalLink: string,
    projectRepo: string,
    projectLongDescription: string,
    image: File | null
  }
  editable: boolean
  editPostId?: string
}

type tagRender = {
  tagType: preferenceTags[],
  renderColor: string
}

function generateTags(props: tagRender) {
  return props.tagType.map((tag) => {
    const bundle: enumBundle = {
      enumMap: tag,
      value: tag,
    }

    const tagClasses = `rounded-lg ${props.renderColor} my-2 ml-2 px-3 py-2 font-primary`
    return (
      <Tags
        key={tag}
        bundle={bundle}
        checked={false}
        className={tagClasses}/>
    )
  })
}

export default function ReviewProject(props: Props) {

  const userInfo = useContext(AuthContext)
  const navigate = useNavigate()

  const { SelectedValues } = props
  const { SelectedTags } = props

  const useSubmit = async () => {
    if(userInfo && userInfo.id) {

      const createProjectChat = await createConversation({
        input: {
          title: SelectedValues.projectTitle +' Chat',
        }
      })

      await createConvo({
        input: {
          conversationModelID: createProjectChat?.data?.createConversationModel?.id ? createProjectChat.data.createConversationModel.id : 'no convo chat set',
          usersModelID: userInfo.id,
        }
      })

      let imageLink: string = ''
      if(SelectedValues.image) {
        imageLink = await uploadImage(SelectedValues.image ? SelectedValues.image : NewLogo as File)
      } else {
        const imageBlob = await getImageBlob(NewLogo)
        imageLink = await uploadImage(imageBlob)
      }


      const postMut = await createPost({
        input: {
          id: uuidv4(),
          post_title: SelectedValues.projectTitle,
          userID: userInfo.id,
          project_chat: createProjectChat?.data?.createConversationModel?.id ? createProjectChat.data.createConversationModel.id : 'no project chat set',
          creator_name: userInfo.userName,
          lang_tag: SelectedTags.LanguageTags,
          dev_type_tag: SelectedTags.DevelopmentTags,
          interest_tag: SelectedTags.InterestTags,
          size_tag: SelectedTags.SizeTags,
          framework_tag: SelectedTags.FrameworkTags,
          difficulty_tag: SelectedTags.DifficultyTags,
          cloud_provider_tag: SelectedTags.CloudProviderTags,
          project_link: SelectedValues.projectRepo,
          long_description: SelectedValues.projectLongDescription,
          description: SelectedValues.projectDescription,
          external_link: SelectedValues.projectExternalLink,
          post_date: new Date().toISOString(),
          experience_level: [],
          likes_users: [],
          likes: 0,
          saves: 0,
          image_link: imageLink,
          reported: false,
          application: false,
          counter: 1
        }
      })

      if (postMut && postMut.data && postMut.data.createPostsModel) {
        navigate(`/project/${postMut.data.createPostsModel.id}`)
      } else {
        navigate('/404')
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const useUpdatePost = async () => {
    if(userInfo && userInfo.id && props.editPostId && props.editable) {

      let imageLink: string = ''
      if(SelectedValues.image) {
        imageLink = await uploadImage(SelectedValues.image ? SelectedValues.image : NewLogo as File)
      } else {
        const imageBlob = await getImageBlob(NewLogo)
        imageLink = await uploadImage(imageBlob)
      }


      const postMut = await updatePost({
        input: {
          id: props.editPostId,
          post_title: SelectedValues.projectTitle,
          lang_tag: SelectedTags.LanguageTags,
          dev_type_tag: SelectedTags.DevelopmentTags,
          interest_tag: SelectedTags.InterestTags,
          size_tag: SelectedTags.SizeTags,
          framework_tag: SelectedTags.FrameworkTags,
          difficulty_tag: SelectedTags.DifficultyTags,
          cloud_provider_tag: SelectedTags.CloudProviderTags,
          project_link: SelectedValues.projectRepo,
          long_description: SelectedValues.projectLongDescription,
          description: SelectedValues.projectDescription,
          external_link: SelectedValues.projectExternalLink,
          image_link: imageLink,
        }
      })

      if (postMut && postMut.data && postMut.data.updatePostsModel) {
        navigate(`/project/${postMut.data.updatePostsModel.id}`)
      } else {
        navigate('/404')
      }
    }
  }

  const allTags: tagRender[] = [
    {
      tagType: props.SelectedTags.LanguageTags as preferenceTags[],
      renderColor: 'bg-green-300'
    },
    {
      tagType: props.SelectedTags.FrameworkTags as preferenceTags[],
      renderColor: 'bg-rose-300'
    },
    {
      tagType: props.SelectedTags.DevelopmentTags as preferenceTags[],
      renderColor: 'bg-blue-300'
    },
    {
      tagType: props.SelectedTags.CloudProviderTags as preferenceTags[],
      renderColor: 'bg-amber-300'
    },
    {
      tagType: props.SelectedTags.InterestTags as preferenceTags[],
      renderColor: 'bg-violet-300'
    },
    {
      tagType: props.SelectedTags.DifficultyTags as preferenceTags[],
      renderColor: 'bg-orange-300'
    },
    {
      tagType: props.SelectedTags.SizeTags as preferenceTags[],
      renderColor: 'bg-lime-300'
    }
  ]

  return (
    <div className='flex flex-col pt-8 pb-12 lg:px-16 w-full z-10'>
      <div className='flex lg:flex-row flex-col lg:items-stretch items-center  lg:space-y-0 space-y-3 lg:space-x-3 space-x-0'>
        <div className='lg:w-1/3 lg:h-48 w-[97%] h-44 space-y-2 bg-white shadow-lg rounded-lg '>
          <img
            className='rounded-lg h-full w-full object-cover'
            src={props.SelectedValues.image ? URL.createObjectURL(props.SelectedValues.image) : NewLogo}
            alt='Profile image'
          />
        </div>
        <div className='bg-white rounded-lg lg:w-[800px] w-[97%] flex-auto shadow-lg font-primary justify-between space-y-2 flex items-center flex-col '>
          <h1 className='text-2xl pt-2'>{props.SelectedValues.projectTitle}</h1>
          <h3 className='text-center text-lg'>{props.SelectedValues.projectDescription}</h3>
          <div className='flex flex-row w-full  lg:justify-between justify-center'>
            <div className='lg:flex hidden'>
              <button className='m-2'>
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
                    d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
                  />
                </svg>
              </button>
            </div>
            {/* <h3 className='text-xs pb-3'>{'Posted by: ' + props.data.creator_name}</h3> */}
            <div className='lg:flex hidden'>
              <button className='m-2'>
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
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:hidden mt-2 flex flex-col items-center'>
        <div className='bg-white rounded-lg w-[97%]  lg:hidden md:hidden flex flex-row'>
          <button className='m-3 mx-auto '>
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
                d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
              />
            </svg>
          </button>
          <button className='m-3 mx-auto '>
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
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
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
          <h3 className='p-3'>{props.SelectedValues.projectLongDescription} </h3>
        </div>
        <div className='flex lg:flex-row flex-col bg-white shadow-lg  lg:justify-center divide-gray-300 lg:divide-x-2 lg:divide-y-0 divide-y-2 font-primary mx-auto lg:w-full  w-[97%] rounded-lg'>
          <button className='py-2 px-4 lg:rounded-none rounded-t-lg hover:bg-slate-300 '>
            <a
              className='flex flex-row items-center space-x-2'
              href={'github.com'}
              target='_blank'
              rel='noreferrer'
            >
              <img src={github} alt={'GitHub Logo'} width={30} height={30} />
              <h3>View GitHub Repository</h3>
            </a>
          </button>
          <button className='flex flex-row items-center hover:bg-slate-300  space-x-2 py-2 px-4 '>
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
                d='M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z'
              />
            </svg>
            <h3>Contact Project Owner</h3>
          </button>
          <button className='flex flex-row items-center hover:bg-slate-300 space-x-2 py-2 px-4'>
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
                d='M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z'
              />
            </svg>
            <h3>Share</h3>
          </button>
          <button className='flex flex-row items-center hover:bg-slate-300 space-x-2  py-2 px-4'>
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
                d='M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5'
              />
            </svg>
            <h3>Report</h3>
          </button>
          <button className='flex flex-row items-center space-x-2 hover:bg-slate-300 lg:rounded-none rounded-b-lg  py-2 px-4 '>
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
                d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
              />
            </svg>
            <h3>Hide Project</h3>
          </button>
        </div>
      </div>
      <div className='mx-auto bg-white mt-8 w-full font-primary rounded-lg p-3'>
        <div className='flex gap-3 items-center justify-center'>
          <button
            className='py-2 px-6 bg-gray-300 hover:bg-gray-200 rounded-md'
            onClick={props.prevSlide}
          >
            Go Back
          </button>
          {props.editable && props.editPostId ?
            <button
              className='py-2 px-6 bg-blue-700 hover:bg-blue-400 rounded-md text-white'
              onClick={() => useUpdatePost()}
            >
              Update Project
            </button>
            :
            <button
              className='py-2 px-6 bg-blue-700 hover:bg-blue-400 rounded-md text-white'
              onClick={() => useSubmit()}
            >
              Create Project
            </button>
          }

        </div>
      </div>
    </div>
  )
}
