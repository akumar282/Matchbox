import React from 'react'
import {useNavigate} from 'react-router-dom'
import NewLogo from '../img/NewLogo.png'

interface Props {
  nextSlide: () => void
}

export default function CInitial(props: Props) {
  const [isChecked, setIsChecked] = React.useState(false)
  const handleCheck = () => {
    setIsChecked(!isChecked) // Toggle the checked state
  }
  const navigate = useNavigate()
  return (
    <div className='mx-auto bg-white mt-8 mb-8 lg:max-w-[1300px] w-[97%]  font-primary rounded-lg flex flex-col pb-4'>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center space-y-4 mx-auto w-[93%] '>
          <h1 className='pb-4 mt-3 text-xl'>Project Information</h1>
          <div className='w-full flex lg:flex-row items-center lg:space-x-4 space-x-0 flex-col'>
            <div className='lg:w-80 lg:h-48 grow-0 w-[97%] h-44 md:w-48 md:h-32 space-y-2 lg:mb-0 mb-4 bg-white shadow-lg rounded-lg '>
              <img className='h-full w-full rounded-lg grow-0 object-cover' src={NewLogo} alt='Project Thumbnail'/>
            </div>
            <div className='flex flex-grow flex-col w-full'>
              <div className='flex text-sm flex-col pb-2 w-full'>
                <label>First Name</label>
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
            <h1>Check Repository Requirements: </h1>
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