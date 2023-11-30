import React from 'react'
import helpy from '../img/helpy.gif'
import {useNavigate} from 'react-router-dom'
export default function NotFound() {

  const navigate = useNavigate()

  return (
    <div className='bg-white flex flex-col h-screen w-screen items-center justify-center'>
      <div className='flex flex-col items-center'>
        <h1 className='px-2 font-primary text-2xl text-center'>404 | Oh no! We lost all the matches!</h1>
        <button onClick={() => navigate(-1)} className='hover:bg-slate-300 rounded-lg text-lg px-3 py-2 mt-4 mb-10 bg-primary-purple font-primary'>Go Back</button>
      </div>
      <img src={helpy} alt={'Helpy animatronic GIF'} />
    </div>
  )
}