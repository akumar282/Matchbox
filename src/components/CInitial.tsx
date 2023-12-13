import React from 'react'
import {useNavigate} from 'react-router-dom'
import { FileInput, Label } from 'flowbite-react'


interface Props {
  nextSlide: () => void
}

export default function CInitial(props: Props) {
  const [isChecked, setIsChecked] = React.useState(false)
  const [file, setFile] = React.useState<File | null>(null) 
  const acceptedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif']
  const handleCheck = () => {
    setIsChecked(!isChecked) // Toggle the checked state
  }
 

  function setImage(e) {
    const file = e.target.files[0]
    console.log(e.target.files[0].type)
    if (!file || !acceptedTypes.includes(file.type)) {
      alert('Please upload a valid image (PNG, JPEG, JPG, or GIF)')
      return
    }
    setFile(e.target.files[0])
  }
  const navigate = useNavigate()
  return (
    <div className='mx-auto bg-white mt-8 mb-8 lg:max-w-[1300px] w-[97%]  font-primary rounded-lg flex flex-col pb-4'>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center space-y-4 mx-auto w-[93%] '>
          <h1 className='pb-4 mt-3 text-xl'>Project Information</h1>
          <div className='w-full flex lg:flex-row items-center lg:space-x-4 space-x-0 flex-col'>
            <div className='lg:w-1/3 lg:h-48 grow-0 h-44 space-y-2 lg:mb-0 mb-4 bg-white shadow-lg rounded-lg '>
              <div className="flex w-full items-center justify-center h-full relative">
                { file && <img
                  className="absolute h-full w-full object-cover rounded-lg shadow-md bg-white"
                  src={file ? URL.createObjectURL(file) : 'https://images.unsplash.com/photo-1612833609243-8b0e2c2e9e0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'}
                  alt="Profile image"
                />}
                { file &&  <Label
                  htmlFor="dropzone-file"
                  className="absolute flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg z-50"
                >
                </Label> 
                }
                <Label
                  htmlFor="dropzone-file"
                  className="dark:hover:bg-bray-800 flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center">
                    <svg
                      className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <FileInput
                    id="dropzone-file"
                    name="dropzone-file"
                    className="sr-only z-50"
                    onChange={(e) => setImage(e)}
                  />
                </Label>
              </div>
            </div>
            <div className='flex flex-grow flex-col w-full lg:w-2/3'>
              <div className='flex text-sm flex-col pb-2 w-full'>
                <label>Project Title</label>
                <input
                  className='rounded-md lg:w-full'
                  name={'Project Title'}
                  type='text'
                  id={'project-name'}
                  placeholder={'Enter Project Title...'}
                />
              </div>
              <div className='flex text-sm flex-col pb-2 w-full'>
                <label>Small Description (1-2 Sentence Description of the project)</label>
                <input
                  className='rounded-md lg:w-full'
                  name={'Last Name'}
                  type='text'
                  id={'last-name'}
                  placeholder={'Name'}
                />
              </div>
              <div className='flex text-sm flex-col pb-1 w-full'>
                <label>Username</label>
                <input
                  className='rounded-md lg:w-full'
                  name={'Username'}
                  type='text'
                  id={'user_name'}
                  placeholder={'@gitmatch.io'}
                />
              </div>
            </div>
          </div>
          <div className='w-full text-sm'>
            <h1>Repository Link: </h1>
            <ul>
            </ul>
            <div className='flex lg:flex-row lg:space-x-2 flex-col'>
              <div className='flex flex-grow w-full'>
                <input
                  className='rounded-md w-full'
                  name={'Username'}
                  type='text'
                  id={'user_name'}
                  placeholder={'@gitmatch.io'}
                />
              </div>
              <div className='lg:w-2/12 mt-2 lg:mt-0'>
                <button className='px-2 bg-blue-700 text-white lg:h-full h-10 lg:max-w-[180px] w-full rounded-lg'>Verify Repo</button>
              </div>
            </div>
          </div>
          <div className='w-full text-sm'>
            <label>Long Description (Describe your project in detail)</label>
            <textarea className='w-full rounded-lg'/>
          </div>
        </div>
        <div className='lg:ml-4 py-4 ml-8 flex justify-center'>
          <input type='radio' onChange={()=>console.log()} checked={isChecked} onClick={handleCheck}></input>
          <label className='lg:pl-2 pl-4 font-primary text-sm' >I verify this post meets the <button onClick={() => navigate('/tos')} className='underline text-secondary-blue hover:text-indigo-400'>Community Guidelines</button> </label>
        </div>
      </div>
      <button className='w-3/5 py-2 text-center rounded-md self-center bg-blue-700 text-white shadow-lg'
        onClick={props.nextSlide}
      >
        Add Project Tags
      </button>
    </div>
  )
}