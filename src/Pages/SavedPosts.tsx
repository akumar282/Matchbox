import React from 'react'
import NavBar from '../components/NavBar'

export default function SavedPosts() {

  // interface ProjectViewProps {
  //   title: string
  //   image: string
  //   github: string
  // }

  // function SavedProjectView(props: ProjectViewProps) {
  //   return (
  //     <div>
  //       <button className=' flex flex-col items-start hover:bg-purple-300 rounded-lg mr-2 ml-2 mt-3 min-h-[170px] bg-white'>
  //         <div className='max-h-[120px] overflow-hidden'>
  //           <a href='#'>
  //             <img className='rounded-t-lg ' src={props.image} alt='Project Thumbnail' />
  //           </a>
  //         </div>
  //         <div className='p-2 flex flex-row w-full justify-between'>
  //           <h5 className='text-xl font-primary font-light leading-tight'>
  //             {props.title}
  //           </h5>
  //           <button className=''>
  //             <a href={props.github}>
  //               <img src={github} alt='GitHub Link' className='w-6 h-6' />
  //             </a>
  //           </button>
  //         </div>
  //       </button>
  //     </div>
  //   )
  // }

  return (
    <div>
      <NavBar />
      <div className='bg-primary-purple'>
        <div className='max-w-[1070px] min-h-[70px] mx-auto pt-2 pb-3'>
          <h1 className='text-2xl font-primary ml-3 mt-3'>Saved Projects</h1>
          <h3 className='text-sm font-primary ml-3 mt-1'>Projects that you want to look into:</h3>
        </div>
      </div>
      <div className='bg-gray-200'>
        <div className=' pt-3 pb-8 max-w-[1070px] mx-auto'>
          <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 place-items-center'>
            {/* Render Query Here */}
          </div>
        </div>
      </div>
    </div>
  )
}