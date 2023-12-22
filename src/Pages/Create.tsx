import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import CreateProjectPreferences from '../components/CreateProjectPreferences'
import CreateIntialScreen from '../components/CreateIntialScreen'
import ReviewProject from '../components/ReviewProject'
import { CloudProviderTag, DevelopmentTag, DifficultyTag, FrameworkTag, InterestTag, LanguageTag, SizeTag } from '../API'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'
import { Swiper as MySwiper } from 'swiper/types' 

export default function Create() {
  const [tags, setTags] = useState<{
        LanguageTags: LanguageTag[],
        FrameworkTags: FrameworkTag[],
        DevelopmentTags: DevelopmentTag[],
        InterestTags: InterestTag[],
        CloudProviderTags: CloudProviderTag[],
        DifficultyTags: DifficultyTag[],
        SizeTags: SizeTag[],
      }>({
        LanguageTags: [],
        FrameworkTags: [],
        DevelopmentTags: [],
        InterestTags: [],
        CloudProviderTags: [],
        DifficultyTags: [],
        SizeTags: [],
      })
  // const [images, setImage] = useState<File | null>(null) 

  const [my_swiper, set_my_swiper] = useState<MySwiper | null>(null)
  const [ inital , setInitial] = useState<{
    projectTitle: string,
    projectDescription: string,
    projectExternalLink: string,
    projectRepo: string,
    projectLongDescription: string,
    image: File | null
  }>({
    projectTitle: '',
    projectDescription: '',
    projectExternalLink: '',
    projectRepo: '',
    projectLongDescription: '',
    image: null
  })
  console.log(inital)
  function next_slide() {
    my_swiper.slideNext()
  }
  function prev_slide() {
    my_swiper.slidePrev()
  }
  useEffect(() => {
    my_swiper?.update()
  }, [tags])
  
  return (
    <div className='min-h-screen outline bg-primary-purple'>
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
          autoHeight={true}
          allowTouchMove={false}
          onInit={(ev) => {
            set_my_swiper(ev)
          }}
          className='.my_swiper max-w-[1170px] mx-auto w-[97%]'
        >
          <SwiperSlide>{<CreateIntialScreen nextSlide={next_slide} setValues={setInitial}/>}</SwiperSlide>
          <SwiperSlide>{<CreateProjectPreferences nextSlide={next_slide} prevSlide={prev_slide} setAllTags={setTags}/>}</SwiperSlide>
          <SwiperSlide>{<ReviewProject SelectedTags={tags} prevSlide={prev_slide} SelectedValues={inital}/> }</SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}