import React, { useEffect } from 'react'
import { Modal } from 'flowbite-react'
import ErrorAlert, {
  successStyle,
  successXStyle,
  errorStyle,
  errorXStyle,
} from './alerts/errorAlert'

interface ReportPostProps {
  setFunction: React.Dispatch<React.SetStateAction<boolean>>
  openModal: boolean
  user_name: string,
  post_id: string,
}

export default function ReportPostModal(props: ReportPostProps){

  const [showAlert, setShowAlert] = React.useState(false)
  const [input, setInput] = React.useState<string>('')
  const [status, setStatus] = React.useState<string[]>([''])

  const success = ['Success', 'Report Submitted!', successXStyle, successStyle]
  const error = ['Error', 'Report failed!', errorXStyle, errorStyle]

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
      setStatus(success)
      setShowAlert(true)
      setTimeout(() => {
        props.setFunction(false)
      }, 3000)
    } catch (e) {
      setStatus(error)
      setShowAlert(true)
    }
  }
  useEffect(() => {
    setShowAlert(false)
    setInput('')
  }, [props.openModal])


  return (
    <>
      <Modal show={props.openModal} onClose={() => props.setFunction(false)}>
        <Modal.Header className='font-primary'>Report Post</Modal.Header>
        <Modal.Body className='font-primary'>
          {showAlert && displayAlert(status)}
          <div className='space-y-6 flex flex-col items-center justify-center'>
            <h3 className='text-center'>Reason for reporting this post:</h3>
            <input
              type='text'
              placeholder='Type here'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='mb-4 rounded-lg w-5/6'
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='font-primary hover:bg-indigo-400 bg-secondary-blue text-white p-2 rounded-lg text-sm'
            onClick={() => onSubmit()}>Submit Report
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