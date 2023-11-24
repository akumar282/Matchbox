import React, { useState, useEffect, useRef } from 'react'
import textlogo from '../img/textlogo.png'
import NewLogo from '../img/NewLogo.png'
import { useNavigate, useLocation } from 'react-router-dom'

export default function NavBar() {

  const navigate = useNavigate()
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const [BurgerOpen, setBurgerOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen)
  }

  const toggleBurger = () => {
    setBurgerOpen(false)
  }

  const handleNav = (_id: string) => {
    navigate(`${_id}`)
    toggleBurger()
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown()
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <nav className=' relative px-4 py-5 flex   justify-start items-center '>
      <button onClick={() => navigate('/home')}><img className='w-36 ml-2 max-w-screen-xl' style={{color: '#FF0000'}} src={textlogo}></img></button>

      <section>
        <div className='lg:hidden' onClick={() => setBurgerOpen((prev) => !prev)}>
          <button className='navbar-burger flex items-center text-black absolute right-1 transform -translate-y-1/2 -translate-x-1/2'>
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
          <div>
            <img className='w-50 h-40' src={NewLogo} alt='' />
          </div>
          <ul className='flex flex-col items-center justify-between min-h-[250px]'>
            <li className={` border-gray-400 mb-4 font-primary ${location.pathname === '/home' ? 'text-indigo-600' : 'hover:text-slate-500'
            }`}>
              <button onClick={() => handleNav('/home')} >Home</button>
            </li>
            <li className={` border-gray-400 my-4 font-primary ${location.pathname === '/discover' ? 'text-indigo-600' : 'hover:text-slate-500'
            }`}>
              <button onClick={() => handleNav('/discover')}>Discover</button>
            </li>
            <li className={` border-gray-400 my-4 font-primary ${location.pathname === '/create-project' ? 'text-indigo-600' : 'hover:text-slate-500'
            }`}>
              <button onClick={() => handleNav('/create-project')}>Create</button>
            </li>
            <li className={` border-gray-400 my-4 font-primary ${location.pathname === '/inbox' ? 'text-indigo-600' : 'hover:text-slate-500'
            }`}>
              <button onClick={() => handleNav('/inbox')}>Inbox</button>
            </li>
            <li className={` border-gray-400 my-4 font-primary ${location.pathname === '/profile' ? 'text-indigo-600' : 'hover:text-slate-500'
            }`}>
              <button onClick={() => handleNav('/profile')}>Profile</button>
            </li>
            <li className={` border-gray-400 my-4 font-primary ${location.pathname === '/settings' ? 'text-indigo-600' : 'hover:text-slate-500'
            }`}>
              <button onClick={() => handleNav('/settings')}>Settings</button>
            </li>
            <li className=' border-gray-400 my-4 font-primary flex flex-row items-center'>
              <button className='mr-1 ' onClick={() => handleNav('/')}>Logout</button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" transform='scale (-1, 1)' strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>

            </li>
          </ul>
        </div>
      </section>

      <ul className='hidden absolute top-1/2 right-1 transform -translate-y-1/2 -translate-x-12 lg:mx-auto lg:flex lg:items-center lg:w-auto max-w-screen-xl'>
        <li>
          <button 
            className={`flex flex-col items-center font-primary px-4 py-1 ${location.pathname === '/home' ? 'text-indigo-600' : 'hover:text-slate-500'
            }`} 
            onClick={() => navigate('/home')}>
            <svg 
              xmlns='http://www.w3.org/2000/svg' 
              fill='none' viewBox='0 0 24 24' 
              strokeWidth={1.5} 
              stroke='currentColor' 
              className='w-7 h-7'>
              <path 
                strokeLinecap='round' 
                strokeLinejoin='round' 
                d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
            </svg>
          Home
          </button>
        </li>
        <li>
          <button
            className={`flex flex-col items-center font-primary px-4 py-1 ${location.pathname === '/discover' ? 'text-indigo-600' : 'hover:text-slate-500'
            }`}
            onClick={() => navigate('/discover')}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none' viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />
            </svg>
            Discover
          </button>
        </li>
        <li>
          <button
            className={`flex flex-col items-center font-primary px-4 py-1 ${location.pathname === '/create-project' ? 'text-indigo-600' : 'hover:text-slate-500'
            }`}
            onClick={() => navigate('/create-project')}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none' viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
            Create
          </button>
        </li>
        <li>
          <button
            className={`flex flex-col items-center font-primary px-4 py-1 ${location.pathname === '/inbox' ? 'text-indigo-600' : 'hover:text-slate-500'
            }`}
            onClick={() => navigate('/inbox')}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none' viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z' />
            </svg>
            Inbox
          </button>
          
        </li>
        <li>
          <div className='relative font-primary' ref={dropdownRef}>
            <button
              type='button'
              className='flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 ml-6 mb-1'
              id='user-menu-button'
              aria-expanded={isDropdownOpen}
              onClick={handleToggleDropdown}
            >
              <span className='sr-only'>Open user menu</span>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.2} stroke='currentColor' className='w-11 h-11'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
            </button>
            {/* Dropdown menu */}
            <div
              className={`absolute right-0 ${isDropdownOpen ? 'block' : 'hidden'}
              z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
              id='user-dropdown'
            >
              <div className='px-4 py-3 whitespace-nowrap'>
                <span className='block text-sm text-gray-900 dark:text-white'>Full Name</span>
                <span className='block text-sm text-gray-500 dark:text-gray-400'>
                  Username
                </span>
              </div>
              <ul className='py-2' aria-labelledby='user-menu-button'>
                <li className='hover:bg-gray-100'>
                  <button
                    onClick={() => navigate('/profile')}
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                  >
                    Profile
                  </button>
                </li>
                <li className='hover:bg-gray-100'>
                  <button
                    onClick={() => navigate('/settings')}
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                  >
                    Settings
                  </button>
                </li>
                <li className='hover:bg-gray-100'>
                  <button
                    onClick={() => navigate('/')}
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>

          </div>
        </li>
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
