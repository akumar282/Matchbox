import React from 'react'

interface CategoryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  imageIcon: () => React.ReactNode;
  titleLabel: string;
}

export default function CategoryButton(props: CategoryButtonProps) {
  return (
    <div className=''>
      <button className='bg-white rounded-lg px-2 py-1 mx-2 my-2 font-primary text-black font-bold'>
        <div className='flex flex-row items-start '>
          <div className='flex flex-col'>
            <div className='my-1'>{props.imageIcon()}</div>
            <div className='flex items-start lg:w-40 w-28'>
              <span className='text-start lg:text-xl text-sm whitespace-normal'>{props.titleLabel}</span>
            </div>
          </div>
          <div className='lg:mx-8 mx-6'></div>
        </div>
      </button>
    </div>
  )
}
