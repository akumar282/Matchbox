import React, {useContext, useEffect, useState} from 'react'
import LandingPageNavBar from '../components/LandingPageNavBar'
import PreferencesComponent from '../components/PreferencesComponent'
import { CloudProviderTag, DevelopmentTag, DifficultyTag, FrameworkTag, InterestTag, LanguageTag, SizeTag } from '../API'
import {updateUser} from '../backend/mutations/userMutations'
import {AuthContext} from '../components/AuthWrapper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'
import { Swiper as MySwiper } from 'swiper/types'
import SetUsername from '../components/SetUsername'
import {useNavigate} from 'react-router-dom'

export default function PreferencesPage() {

  const userInfo = useContext(AuthContext)
  const navigate = useNavigate()
  const [my_swiper, set_my_swiper] = useState<MySwiper | null>(null)
  const [totalSlides, setTotalSlides] = useState(0)
  const [submitVisible, setSubmitVisible] = useState<boolean>(false)
  const [usernameErr, setUsernameErr] = useState<boolean>(false)
  const [usernameGood, setUsernameGood] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')
  const [tags, setTags] = React.useState<{
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
  console.log(tags)

  useEffect(() => {
    my_swiper?.update()
  }, [tags, usernameErr])

  const useSubmit = async () => {
    if(userInfo && userInfo.id) {
      const input = {
        id: userInfo.id,
        lang_tag: tags.LanguageTags,
        dev_type_tag: tags.DevelopmentTags,
        interest_tag: tags.InterestTags,
        size_tag: tags.SizeTags,
        framework_tag: tags.FrameworkTags,
        difficulty_tag: tags.DifficultyTags,
        cloud_provider_tag: tags.CloudProviderTags,
        new_user: false
      }
      if (usernameGood && username){
        input['user_name'] = username
      }
      const updateUserFn = await updateUser({input})
      console.log(updateUserFn)
      navigate('/home')
    }
  }
  function next_slide() {
    my_swiper.slideNext()
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function prev_slide() {
    my_swiper.slidePrev()
  }


  useEffect(() => {
    if (my_swiper) {
      const handleReachEnd = () => {
        setSubmitVisible(true)
      }
      setTotalSlides(my_swiper.slides.length)

      my_swiper.on('reachEnd', handleReachEnd)

      // Properly handle cleanup to remove the event listener
      return () => {
        my_swiper.off('reachEnd', handleReachEnd)
      }
    }
  }, [my_swiper])




  return (
    <div>
      <LandingPageNavBar />
      <div className='w-11/12 mx-auto flex flex-col mt-4 '>
        <h1 className='font-secondary text-3xl font-light'>Project Preferences</h1>
        <h2 className='font-primary text-medium pt-1 pb-3'>We&apos;ll use this to match you with projects of your liking</h2>
      </div>
      <div className='w-11/12 mx-auto mt-2 mb-6'>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          autoHeight={true}
          allowTouchMove={false}
          onInit={(ev) => {
            set_my_swiper(ev)
          }}
          className='.my_swiper mb-4'
        >
          <SwiperSlide>{<PreferencesComponent setTags={setTags}/>}</SwiperSlide>
          {userInfo?.userName === 'google_notSet' ?
            <SwiperSlide>{<SetUsername setUsernameGood={setUsernameGood} setUsernameErr={setUsernameErr} setUsername={setUsername}/>}</SwiperSlide>
            :
            <></>
          }
        </Swiper>

        <div className='flex justify-center '>
          {(submitVisible && usernameGood) || (totalSlides === 1) ?
            <button
              className='font-primary hover:bg-indigo-400 bg-secondary-blue text-white text-lg rounded-lg px-24 py-2'
              onClick={() => useSubmit()}>
              Submit
            </button>
            :
            <></>
          }

        </div>
        <div className='bg-white grow-0 flex pt-3 static bottom-0 mt-4 justify-center w-full'>
          {userInfo?.userName === 'google_notSet' ?
            <div className='flex font-primary space-x-3 text-lg flex-row'>
              <button
                className='py-1 px-6 mb-3 bg-gray-300 hover:bg-gray-200 rounded-full'
                onClick={() => prev_slide()}>Back
              </button>
              <button
                className='py-1 px-6 mb-3 bg-blue-700 hover:bg-blue-400 rounded-full text-white'
                onClick={() => next_slide()}>Next
              </button>
            </div>
            :
            <></>
          }
        </div>
      </div>
    </div>
  )
}