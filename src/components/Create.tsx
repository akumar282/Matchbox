import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import CreateProjectPreferences from './CreateProjectPreferences'
import CreateIntialScreen from './CreateIntialScreen'
import ReviewProject from './ReviewProject'
import {
  CloudProviderTag,
  DevelopmentTag,
  DifficultyTag,
  FrameworkTag,
  InterestTag,
  LanguageTag,
  PostsModel,
  SizeTag
} from '../API'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'
import { Swiper as MySwiper } from 'swiper/types'

interface CreateEditPostProps {
  edit: boolean
  image: File | null
  data?: PostsModel

}

export default function Create(props: CreateEditPostProps) {
  const [tags, setTags] = useState<{
        LanguageTags: LanguageTag[],
        FrameworkTags: FrameworkTag[],
        DevelopmentTags: DevelopmentTag[],
        InterestTags: InterestTag[],
        CloudProviderTags: CloudProviderTag[],
        DifficultyTags: DifficultyTag[],
        SizeTags: SizeTag[],
      }>( {
        LanguageTags: [],
        FrameworkTags: [],
        DevelopmentTags: [],
        InterestTags: [],
        CloudProviderTags: [],
        DifficultyTags: [],
        SizeTags: [],
      })

  const [my_swiper, set_my_swiper] = useState<MySwiper | null>(null)
  const [inital , setInitial] = useState<{
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

  useEffect(() => {
    if (props.edit && props.data) {
      setInitial({
        projectTitle: props.data.post_title,
        projectDescription: props.data.description as string,
        projectExternalLink: props.data.external_link as string,
        projectRepo: props.data.project_link as string,
        projectLongDescription: props.data.long_description as string,
        image: props.image,
      })
      setTags({
        LanguageTags: props.data.lang_tag as LanguageTag[],
        FrameworkTags: props.data.framework_tag as FrameworkTag[],
        DevelopmentTags: props.data.dev_type_tag as DevelopmentTag[],
        InterestTags: props.data.interest_tag as InterestTag[],
        CloudProviderTags: props.data.cloud_provider_tag as CloudProviderTag[],
        DifficultyTags: props.data.difficulty_tag as DifficultyTag[],
        SizeTags: props.data.size_tag as SizeTag[],
      })
    }
  }, [props.edit, props.data, props.image])


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
          {props.edit === true ? (
            <>
              <h1 className='text-2xl font-primary lg:ml-16 ml-4 mt-3'>Edit Project</h1>
              <h3 className='text-sm font-primary lg:ml-16 ml-4 mt-1'>Edit your project information:</h3>
            </>
          ) : (
            <>
              <h1 className='text-2xl font-primary lg:ml-16 ml-4 mt-3'>Create Project</h1>
              <h3 className='text-sm font-primary lg:ml-16 ml-4 mt-1'>Post your project to share it and grow it!:</h3>
            </>
          )}
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
          className='.my_swiper max-w-[1170px] mx-auto w-[97%] min-h-[700px]'
        >
          <SwiperSlide>{<CreateIntialScreen nextSlide={next_slide} setValues={setInitial} mySwiper={my_swiper} editable={props.edit} selectedValues={inital}/>}</SwiperSlide>
          <SwiperSlide>{<CreateProjectPreferences nextSlide={next_slide} prevSlide={prev_slide} setAllTags={setTags} editable={props.edit} editTags={tags}/>}</SwiperSlide>
          <SwiperSlide>{<ReviewProject SelectedTags={tags} prevSlide={prev_slide} SelectedValues={inital} editable={props.edit} editPostId={props.data?.id}/> }</SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}