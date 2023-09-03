import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import textlogo from '../img/textlogo.png'
import BurgerMenu from './BurgerMenu'

export default function TempNavBar() {

  const [BurgerOpen, setBurgerOpen] = useState(false)

  const toggleBurger = () => {
    setBurgerOpen(!BurgerOpen)
  }

  const navigate = useNavigate()
  return (
    <nav className='relative px-4 py-4 flex justify-start items-center  bg-purple'>
      <img className='w-32 ml-2 max-w-screen-xl' src={textlogo}></img>

      <section>
        <div className='lg:hidden' onClick={() => setBurgerOpen((prev) => !prev)}>
          <button className='navbar-burger flex items-center text-blue-600 absolute right-1 transform -translate-y-1/2 -translate-x-1/2'>
            <svg className='block h-4 w-4 fill-current' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <title>Mobile menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
            </svg>
          </button>
        </div>
        <div className={BurgerOpen ? 'showMenuNav' : 'hideMenuNav'}>
          <div className='absolute top-0 right-0 px-8 py-8' onClick={() => setBurgerOpen(false)} >
            <svg
              className='h-8 w-8 text-gray-600'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='18' y1='6' x2='6' y2='18' />
              <line x1='6' y1='6' x2='18' y2='18' />
            </svg>
          </div>
          <ul className='flex flex-col items-center justify-between min-h-[250px]'>
            <li className='border-b border-gray-400 my-8 uppercase'>
              <a href='/home'>About</a>
            </li>
            <li className='border-b border-gray-400 my-8 uppercase'>
              <a href='/portfolio'>Portfolio</a>
            </li>
            <li className='border-b border-gray-400 my-8 uppercase'>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
        </div>
      </section>

      <ul className='hidden absolute top-1/2 right-1 transform -translate-y-1/2 -translate-x-12 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 max-w-screen-xl'>
        <li><a className='text-black-500 font-primary text-base hover:text-gray-500' href='#'>Home_</a></li>
        <li className='text-black-300'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' className='w-4 h-4 current-fill' viewBox='0 0 24 24'>
            <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z' />
          </svg>
        </li>
        <li><a className='text-black-500 font-primary text-base hover:text-gray-500' href='#'>About_</a></li>
        <li className='text-black-300'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' className='w-4 h-4 current-fill' viewBox='0 0 24 24'>
            <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z' />
          </svg>
        </li>
        <li><button className='text-white bg-dark-purple font-primary text-base rounded-lg p-2 hover:text-white'>Register_</button></li>
      </ul>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </nav>
    
    
  )

}
