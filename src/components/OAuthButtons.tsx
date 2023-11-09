/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface OAuthButtonsProps {
  label: string
  src: string
  onClick: any
}

export default function OAuthButtons(props: OAuthButtonsProps) {

  return (
    <button onClick={props.onClick} className='flex flex-row border hover:bg-slate-300 border-black rounded-lg mt-4 py-2 px-4'>
      <div className="flex items-center">
        <img src={props.src} alt={props.label} width={24} height={24} />
        <div className='mx-14 lg:mx-20'>{props.label}</div>
      </div>
    </button>
  )
}