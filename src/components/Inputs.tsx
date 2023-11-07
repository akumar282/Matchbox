import React from 'react'

interface InputButtonProps {
  name?: string
  type?: string
  id?: string
  placeholder?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SingleInputs(props: InputButtonProps) {

  return (
    <input placeholder={props.placeholder} className='my-3 lg:w-[23rem] w-[19rem] text-start py-1 text-base rounded-lg border pl-2 border-slate-500 focus:outline-none focus:border-blue'></input>
  )
}