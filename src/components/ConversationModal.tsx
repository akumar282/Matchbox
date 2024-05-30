import React, {useContext, useEffect} from 'react'
import { Modal } from 'flowbite-react'
import ErrorAlert, {
  successStyle,
  successXStyle,
  errorStyle,
  errorXStyle,
} from './alerts/errorAlert'
import {AuthContext} from './AuthWrapper'
import {useNavigate} from 'react-router-dom'
import {createConvo} from '../backend/mutations/userConvoMutations'
import {createConversation} from '../backend/mutations/conversationMutations'
import {doesDmExist} from '../functions/helpers'

interface ConvoModalProps {
  setFunction: React.Dispatch<React.SetStateAction<boolean>>
  openModal: boolean
  owner_name: string
  owner_id: string
  project_id?: string

}

export default function ConversationModal(props: ConvoModalProps){

  const [showAlert, setShowAlert] = React.useState(false)
  const [status, setStatus] = React.useState<string[]>([''])
  const userInfo = useContext(AuthContext)
  const navigate = useNavigate()

  const success = ['Success', 'Message Opened!', successXStyle, successStyle]
  const error = ['Error', 'Message failed!', errorXStyle, errorStyle]

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
        if(!await doesDmExist(userInfo.id, props.owner_id)){
          const { data } = await createConversation({input: {}})
          if(data && data.createConversationModel){
            await createConvo({
              input: {
                usersModelID: userInfo.id,
                conversationModelID: data.createConversationModel.id
              }
            })
            await createConvo({
              input: {
                usersModelID: props.owner_id,
                conversationModelID: data.createConversationModel.id
              }
            })
          }
          setStatus(success)
          navigate('/inbox')
        } else {
          navigate('/inbox')
        }
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
        <Modal.Header>Confirm Message</Modal.Header>
        <Modal.Body>
          {showAlert && displayAlert(status)}
          <div className='space-y-6 flex flex-col items-center justify-center'>
            <h3 className='text-center'>You want to message {props.owner_name}?</h3>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='font-primary hover:bg-indigo-400 bg-secondary-blue text-white p-2 rounded-lg text-sm'
            onClick={() => onSubmit()}>Message
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