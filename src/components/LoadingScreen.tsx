import React from 'react'
import { Spinner } from 'flowbite-react'

export default function LoadingScreen() {
  return (
    <div className='bg-primary-purple flex flex-col h-screen w-screen items-center justify-center'>
      <div className='flex flex-col items-center'>
        <h1
          className='font-primary text-3xl text-center relative w-[max-content] before:absolute before:inset-0 before:animate-message1
          before:bg-primary-purple after:absolute after:inset-0 after:w-[0.125em] after:animate-carat after:bg-black'>
          Striking your matches
        </h1>
      </div>
      <Spinner color='purple' className={'mt-6'} size={'xl'}/>
    </div>
  )
}