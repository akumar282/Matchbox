import React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      className='font-primary underline text-secondary-blue'
      to='#'
      onClick={(e) => {
        window.location.href = mailto
        e.preventDefault()
      }}
    >
      {label}
    </Link>
  )
}

export default ButtonMailto