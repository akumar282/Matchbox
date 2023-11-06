import React, { useState } from 'react'
import textlogo from '../img/textlogo.png'
import NewLogo from '../img/NewLogo.png'

export default function TempNavBar() {


  const [BurgerOpen, setBurgerOpen] = useState(false)

  const toggleBurger = () => {
    setBurgerOpen(false)
  }

  const handleScroll = (_id: string) => {
    const element = document.getElementById(_id)
    if(element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
    toggleBurger()
  }

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
          <div >
            <img className='w-50 h-40' src={NewLogo} alt="" />
          </div>
          <ul className='flex flex-col items-center justify-between min-h-[250px]'>
            <li className=' border-gray-400 mb-8 font-primary'>
              <button onClick={() => handleScroll('home')}>Home_</button>
            </li>
            <li className=' border-gray-400 my-8 font-primary'>
              <button onClick={() => handleScroll('about')}>About_</button>
            </li>
            <li className=' border-gray-400 my-8 font-primary'>
              <button onClick={() => handleScroll('faq')}>FAQ_</button>
            </li>
            <li className=' border-gray-400 my-8 font-primary'>
              <button onClick={() => handleScroll('register')}>Register_</button>
            </li>
          </ul>
        </div>
      </section>

      <ul className='hidden absolute top-1/2 right-1 transform -translate-y-1/2 -translate-x-12 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 max-w-screen-xl'>
        <li><button className='text-black-500 font-primary text-base pr-6 border-r border-black hover:text-gray-500' onClick={() => handleScroll('home')}>Home_</button></li>
        <li className='text-black-300'>
        </li>
        <li><button onClick={() => handleScroll('about')}  className='text-black-500 font-primary text-base pr-6 border-r border-black -ml-6 hover:text-gray-500'>About_</button></li>
        <li><button onClick={() => handleScroll('faq')} className='text-black-500 font-primary text-base pr-6 border-r border-black ml-2 hover:text-gray-500'>FAQ_</button></li>
        <li className='text-black-300'>
        </li>
        <li><button onClick={() => handleScroll('register')} className='text-white bg-deep-pink hover:bg-fuchsia-300 font-primary -ml-6 text-base rounded-lg py-2 px-3 hover:text-white'>Register_</button></li>
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
