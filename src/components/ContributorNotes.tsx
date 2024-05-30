import React, {useContext, useEffect, useState} from 'react'
import {ContributorNotesModel} from '../API'
import {AuthContext} from './AuthWrapper'
import * as yup from 'yup'
import {listContributorNotes} from '../backend/queries/notesQueries'
import {createNotesSubscription} from '../backend/subscriptions/subscriptions'
import {useFormik} from 'formik'
import {createContributorNotes} from '../backend/mutations/notesMutations'
import Notes from './Notes'


interface NotesData {
  postID: string
}

export default function ContributorNotes(props: NotesData) {

  const userInfo = useContext(AuthContext)

  const [nextToken, setNextToken] = useState<string | null>(null)
  const [notesData, setNotesData] = useState<ContributorNotesModel[]>([])
  const [toggle, setToggle] = useState(false)
  const [, setError] = useState<boolean>()

  const validationSchema = yup.object({
    note: yup
      .string()
      .min(3, 'Message should be a minimum of 1 character')
      .required('Message is required')
  })

  useEffect(() => {
    const getFiveComments = async () => {
      const {data, errors} = await listContributorNotes({
        filter: {
          postID: {
            eq: props.postID
          }
        },
        limit: 6
      })
      if(data && data.listContributorNotesModels) {
        setNotesData(data.listContributorNotesModels.items as ContributorNotesModel[])
      }
      if(data && data.listContributorNotesModels && data.listContributorNotesModels.nextToken){
        setNextToken(data.listContributorNotesModels.nextToken ? data.listContributorNotesModels.nextToken : null)

      }
      setError(!errors)

    }

    getFiveComments().catch()
  }, [props.postID, toggle])

  useEffect(() => {
    if(props.postID) {
      const subscription = createNotesSubscription((value) => {
        const updatedMessages = value.data.onCreateContributorNotesModel ? [...notesData, value.data.onCreateContributorNotesModel] : notesData
        setNotesData(updatedMessages)
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
  }, [props.postID, notesData])

  const formik = useFormik({
    initialValues: {
      note: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if(userInfo && userInfo.id && userInfo.userName){
        await createContributorNotes({
          input: {
            note: values.note,
            postID: props.postID,
            userID: userInfo.id,
            count: 1,
            pinned: false,
            posted_at: new Date().toISOString()
          }
        })
      }
      values.note = ''
    },
  })

  const useRequery = async () => {
    const {data} = await listContributorNotes({
      filter: {
        postID: {
          eq: props.postID
        }
      },
      limit: 5,
      nextToken: nextToken
    })
    if(data && data.listContributorNotesModels) {
      const updatedNotesList = data.listContributorNotesModels.items ? [...notesData, ...data.listContributorNotesModels.items] : notesData
      setNotesData(updatedNotesList as ContributorNotesModel[])
      if(data.listContributorNotesModels.nextToken === null) {
        setNextToken(null)
      } else if(data.listContributorNotesModels.nextToken) {
        setNextToken(data.listContributorNotesModels.nextToken)
      }
    }
  }

  function noNotesAvail() {

    return (
      <div className='w-[97%] py-3 flex bg-slate-200 text-center rounded-lg mb-2 flex-col items-center'>
        <div>
          <h3>No Notes yet... Be the first to write one!</h3>
        </div>
      </div>
    )
  }
  
  return (
    <div className='lg:w-full w-[97%] bg-white mx-auto rounded-lg mt-4'>
      <h1 className='ml-4 text-lg font-primary py-2'> Contributor Notes</h1>
      <div className='flex flex-col items-center font-primary justify-center'>
        {notesData && notesData.length > 0 ? (
          notesData?.map(x => <Notes key={x.id} data={x} setFunction={setToggle}/>)
        ) : (
          noNotesAvail()
        )}
        {nextToken !== null ?
          <button className='bg-blue-700 mb-5 lg:ml-5 lg:w-2/12 w-[97%] rounded-lg px-2 py-2 text-white' onClick={() => useRequery()}>
            See More
          </button>
          :
          <></>
        }
        <form className='w-full' onSubmit={formik.handleSubmit} >
          <div onClick={e => {
            e.stopPropagation()
            e.currentTarget.focus()
          }} className='w-full flex my-3 justify-center'>
            <textarea className='block rounded-lg w-[97%] z-20'
              onClick={e => {
                e.stopPropagation()
                e.currentTarget.focus()
              }}
              name='note'
              id='note'
              value={formik.values.note}
              onChange={formik.handleChange}
              rows={7} cols={40} placeholder={'Write your note... (Markdown Supported)'}/>
          </div>
          <div className='w-full flex lg:items-start lg:justify-start justify-center'>
            <button className='bg-blue-700 mb-3 lg:ml-5 lg:w-2/12 w-[97%] rounded-lg px-2 py-2 text-white'
              type='submit'>Post Note
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}