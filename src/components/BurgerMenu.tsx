import React from 'react'

export default function BurgerMenu() {
  return (
    <div className='lg:hidden'>
      <button className='navbar-burger flex items-center text-blue-600'>
        <svg className='block h-4 w-4 fill-current' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <title>Mobile menu</title>
          <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
        </svg>
      </button>
    </div>
  )
}