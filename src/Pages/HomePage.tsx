import React from 'react'
import NavBar from '../components/NavBar'
import { TrendIcon, FlaskIcon, MLIcon, CloudIcon } from '../components/Vectors'
import CategoryButton from '../components/CategoryButton'


export default function HomePage() {
  return (
    <div>
      <NavBar />
      <div className='bg-primary-purple flex flex-col items-center'>
        <div className='my-3 flex flex-col items-start'>
          <h1 className='font-primary text-3xl'>Welcome Back, User</h1>
          <div className='flex lg:flex-row flex-col text-start'>
            <div className='flex lg:max-w-lg max-w-sm'>
              <CategoryButton titleLabel='Trending Projects' imageIcon={() => <TrendIcon className='h-8 w-8' viewBox='0 0 24 24' />} />
              <CategoryButton titleLabel='Open Source Frameworks' imageIcon={() => <FlaskIcon className='h-8 w-8 text-black' viewBox='0 0 24 24' />} />
            </div>
            <div className='flex lg:max-w-lg max-w-sm'>
              <CategoryButton titleLabel='ML/AI Projects' imageIcon={() => <MLIcon className='h-8 w-8' viewBox='0 0 24 24' />} />
              <CategoryButton titleLabel='Cloud Computing' imageIcon={() => <CloudIcon className='h-8 w-8' viewBox='0 0 24 24' />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}