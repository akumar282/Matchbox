import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import CPrefrences from '../components/CPrefrences'
import CInitial from '../components/CInitial'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'

export default function Create() {
  const [my_swiper, set_my_swiper] = useState({})
  function next_slide() {
    my_swiper.slideNext()
  }
  function prev_slide() {
    my_swiper.slidePrev()
  }
  return (
    <div>
      <NavBar />
      <div className='bg-gray-300'>
        <div className='lg:max-w-[1070px] bg-gray-300 min-h-[70px] mx-auto pt-2 pb-3'>
          <h1 className='text-2xl font-primary lg:ml-16 ml-4 mt-3'>Create Project</h1>
          <h3 className='text-sm font-primary lg:ml-16 ml-4 mt-1'>Post your project to share it and grow it!:</h3>
        </div>
      </div>
      
      <div className='bg-primary-purple flex flex-col items-center justify-center'>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation ={{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev'
          }}
          allowTouchMove={false}
          onInit={(ev) => {
            set_my_swiper(ev)
          }}
          className='.my_swiper max-w-[1170px] mx-auto w-[97%]'
        >
          <SwiperSlide>{<CInitial nextSlide={next_slide}/>}</SwiperSlide>
          <SwiperSlide>{<CPrefrences nextSlide={next_slide} prevSlide={prev_slide}/>}</SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}