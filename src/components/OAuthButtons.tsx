import React from 'react'

interface OAuthButtonsProps {
  label: string;
  src: string;
}

export default function OAuthButtons(props: OAuthButtonsProps) {
  const { label, src } = props

  return (
    <button className='flex flex-row border border-black rounded-lg mt-4 py-2 px-4'>
      <div className="flex items-center">
        <img src={src} alt={label} width={24} height={24} />
        <div className='mx-14 lg:mx-20'>{label}</div>
      </div>
    </button>
  )
}