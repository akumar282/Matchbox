import React from 'react'
import ProfileWork from './ProfileWork'

// TODO: Refactor to injest data
type Experience = {
  title: string;
  org_name: string;
  start_date: string;
  end_date: string;
  description: string;
  lang_tag: string[];
  dev_type_tag: string[];
  framework_tag: string[];
};

interface ProfileExperiencesProps {
  experiences: Experience[]
}

export default function ProfileExperiences(props: ProfileExperiencesProps) {
  return (
    <div className='rounded-lg mt-2 w-full px-2'>
      <div className='flex flex-col'>
        <div className='justify-between flex items-center'>
          <h1 className='text-2xl font-primary font-bold'>Experience</h1>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
        <h1 className='text-lg font-primary mt-1'> Add your work experience here</h1>
      </div>
      <div className='flex flex-col'>
        {props.experiences.map((job, index) => {
          return (
            <ProfileWork job={job} key={index}/>
          )
        })}
      </div>
    </div>
  )
}