import React from 'react'
import { InputHTMLAttributes } from 'react'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SingleInputs(props: InputHTMLAttributes<any>) {

  return (
    <input name={props.name} type={props.type} id={props.id} value={props.value} onChange={props.onChange} placeholder={props.placeholder} className='my-3 lg:w-[23rem] w-[19rem] text-start py-1 text-base rounded-lg border pl-2 border-slate-500 focus:outline-none focus:border-secondary-blue'></input>
  )
}