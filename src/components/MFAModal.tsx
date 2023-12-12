import React from 'react'
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
}

export default function MFAModal(props: MFAProps){

  const [showAlert, setShowAlert] = React.useState(false)
  const [code, setCode] = React.useState('')

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

  async function onSubmit(email: string, code: string) {
    try {
      await Auth.confirmSignUp(email, code)
      setShowAlert(true)
      displayAlert(success)
    } catch (e) {
      setShowAlert(true)
      displayAlert(error)
    }
  }

  return (
    <>
      <Modal dismissible show={props.openModal} onClose={() => props.setFunction(false)}>
        <Modal.Header>MFA: Verify Account</Modal.Header>
        <Modal.Body>
          {showAlert && displayAlert(success)}
          <div className='space-y-6 flex flex-col items-center justify-center'>
            <h3 className='text-center'>Enter the code sent to ****@gmail.com here</h3>
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
            onClick={() => onSubmit(localStorage.getItem('email')!, code)}>Verify Account</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}