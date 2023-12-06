import React from 'react'

interface CategoryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  imageIcon: () => React.ReactNode;
  titleLabel: string;
  bordercolor: string;
}

export default function CategoryButton(props: CategoryButtonProps) {
  return (
    <button className={`bg-white rounded-lg px-3 py-1 lg:mx-2 mx-1 my-1 shadow-lg hover:bg-slate-300 text-black font-bold border border-r-4 ${props.bordercolor}`}>
      <div className='flex flex-row items-start '>
        <div className='flex flex-col'>
          <div className='my-2'>{props.imageIcon()}</div>
          <div className='flex items-start lg:w-48'>
            <span className='text-start mt-1 lg:text-xl text-sm font-secondary font-light whitespace-normal'>{props.titleLabel}</span>
          </div>
        </div>
        <div className='lg:mx-4'></div>
      </div>
    </button>
  )
}
