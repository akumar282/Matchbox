import React, {useContext, useEffect} from 'react'
import { Modal } from 'flowbite-react'
import ErrorAlert, {
  successStyle,
  successXStyle,
  errorStyle,
  errorXStyle,
} from './alerts/errorAlert'
import {AuthContext} from './AuthWrapper'
import {createJoinedPost} from '../backend/mutations/joinedPostMutations'
import {useNavigate} from 'react-router-dom'
import {createConvo} from '../backend/mutations/userConvoMutations'

interface MFAProps {
  setFunction: React.Dispatch<React.SetStateAction<boolean>>
  openModal: boolean
  project_name: string
  project_id: string
  chat_id: string
}

export default function JoinModal(props: MFAProps){

  const [showAlert, setShowAlert] = React.useState(false)
  const [status, setStatus] = React.useState<string[]>([''])
  const userInfo = useContext(AuthContext)
  const navigate = useNavigate()

  const success = ['Success', 'Join Successful!', successXStyle, successStyle]
  const error = ['Error', 'Join failed!', errorXStyle, errorStyle]

  const closeAlert = () => {
    setShowAlert(false)
  }
  function displayAlert(status: string[]){
    return (
      <ErrorAlert
        show={showAlert}
        closeAlert={closeAlert}
        title={status[0]}
        message={status[1]}
        closeStyle={status[2]}
        colorStyle={status[3]}
      />
    )
  }

  async function onSubmit() {
    try {
      if(userInfo && userInfo.id) {
        await createJoinedPost({
          input: {
            userID: userInfo.id,
            postID: props.project_id,
            joined_at: new Date().toISOString(),
            count: 1
          }
        })
        await createConvo({
          input: {
            usersModelID: userInfo.id,
            conversationModelID: props.chat_id,
          }
        })
        setStatus(success)
        navigate(`/joined/project/${props.project_id}`)
      }
    } catch (e) {
      setStatus(error)
    }
  }
  useEffect(() => {
    setShowAlert(false)
  }, [props.openModal])


  return (
    <>
      <Modal show={props.openModal} onClose={() => props.setFunction(false)}>
        <Modal.Header>Confirm Join Project</Modal.Header>
        <Modal.Body>
          {showAlert && displayAlert(status)}
          <div className='space-y-6 flex flex-col items-center justify-center'>
            <h3 className='text-center'>Are you sure you want to join {props.project_name}?</h3>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='font-primary hover:bg-indigo-400 bg-secondary-blue text-white p-2 rounded-lg text-sm'
            onClick={() => onSubmit()}>Join
          </button>
          <button
            className='font-primary hover:bg-red-400 bg-red-500 text-white p-2 rounded-lg text-sm'
            onClick={() => props.setFunction(false)}>Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}