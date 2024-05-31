import React, { useEffect } from 'react'
import { Modal } from 'flowbite-react'
import {Auth} from 'aws-amplify'
import ErrorAlert, {
  successStyle,
  successXStyle,
  errorStyle,
  errorXStyle,
} from './alerts/errorAlert'

interface MFAProps {
  setFunction: React.Dispatch<React.SetStateAction<boolean>>
  openModal: boolean
  user_name: string
  email: string
}

export default function MFAModal(props: MFAProps){

  const [showAlert, setShowAlert] = React.useState(false)
  const [code, setCode] = React.useState<string>('')
  const [status, setStatus] = React.useState<string[]>([''])

  const success = ['Success', 'Sign Up Successful!', successXStyle, successStyle]
  const error = ['Error', 'Sign Up failed!', errorXStyle, errorStyle]
 
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

  async function onSubmit(code: string) {
    try {
      await Auth.confirmSignUp(props.user_name, code)
      setStatus(success)
      setShowAlert(true)
    } catch (e) {
      setStatus(error)
      setShowAlert(true)
    }
  }
  useEffect(() => {
    setShowAlert(false)
    setCode('')
  }, [props.openModal])


  return (
    <>
      <Modal show={props.openModal} onClose={() => props.setFunction(false)}>
        <Modal.Header>MFA: Verify Account</Modal.Header>
        <Modal.Body>
          {showAlert && displayAlert(status)}
          <div className='space-y-6 flex flex-col items-center justify-center'>
            <h3 className='text-center'>Enter the code sent to {props.email} here</h3>
            <input
              type='text'
              placeholder='Verification Code'
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className='mb-4 rounded-lg'
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='font-primary hover:bg-indigo-400 bg-secondary-blue text-white p-2 rounded-lg text-sm'
            onClick={() => onSubmit(code)}>Verify Account</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}