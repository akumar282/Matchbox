import React from 'react'

export function FlaskIcon(props: { className: string, viewBox: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={props.className}
      fill='none'
      viewBox={props.viewBox}
    >
      <path
        stroke='#33363F'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M15 5v6.697a1 1 0 00.168.555l4.796 7.193A1 1 0 0119.131 21H4.868a1 1 0 01-.833-1.555l4.796-7.193A1 1 0 009 11.697V5'
      ></path>
      <path
        fill='#33363F'
        d='M16.9 18.2l-2.1-2.8a1 1 0 00-.8-.4h-4a1 1 0 00-.8.4l-2.1 2.8a.5.5 0 00.4.8h9a.5.5 0 00.4-.8z'
      ></path>
      <path
        stroke='#33363F'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M7 5h10'
      ></path>
    </svg>
  )
}

export function MLIcon(props: { className: string, viewBox: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox={props.viewBox}
      className={props.className}
    >
      <path
        fill='#1F2328'
        fillRule='evenodd'
        d='M9.68 17.591L12.784 6l1.449.388L11.128 18l-1.449-.409zM8.03 7.97l1.061 1.06L6.121 12l2.97 2.97-1.06 1.06L4 12l4.03-4.03zM15.97 7.97l-1.061 1.06 2.97 2.97-2.97 2.97 1.06 1.06L20 12l-4.03-4.03z'
        clipRule='evenodd'
      ></path>
    </svg>
  )
}

export function CloudIcon(props: { className: string, viewBox: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={props.className}
      fill='none'
      viewBox={props.viewBox}
    >
      <path
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M3 13.65C3 16.603 5.418 19 8.4 19h8.1c2.485 0 4.5-2.016 4.5-4.503 0-1.847-1.11-3.552-2.7-4.247C18.132 7.323 15.684 5 12.69 5 10.35 5 8.346 6.486 7.5 8.5 4.8 8.938 3 11.2 3 13.65z'
      ></path>
    </svg>
  )
}

export function TrendIcon(props: { className: string, viewBox: string }) {
  return (
    <svg 
      xmlns='http://www.w3.org/2000/svg' 
      fill='none' 
      viewBox={props.viewBox} 
      strokeWidth={1.5} 
      stroke='currentColor' 
      className={props.className}
    >
      <path 
        strokeLinecap='round' 
        strokeLinejoin='round' 
        d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' />
    </svg>
  )
}
