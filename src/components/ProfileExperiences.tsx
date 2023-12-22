import React from 'react'
import ProfileWork from './ProfileWork'

// TODO: Refactor to injest data
<<<<<<< HEAD
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
=======
const experience = [
  {
    title: 'Software Engineer',
    company: 'Google',
    location: 'Mountain View, CA',
    from: '12-01-2019',
    to: '03-18-2021',
    current: true,
    LanguageTags: ['Python', 'Java', 'C++'],
    FrameworkTags: ['React', 'Vue', 'Angular'],
    DevelopmentTags: ['Web', 'Mobile', 'Desktop'],
    InterestTags: ['AI', 'ML', 'Data Science'],
    CloudProviderTags: ['AWS', 'Azure', 'GCP'],
    DifficultyTags: ['Beginner', 'Intermediate', 'Advanced'],
    SizeTags: ['Small', 'Medium', 'Large'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos placeat, dolorum ullam ipsam, sapiente suscipit dicta eius quisquam quod doloribus, fuga minus inventore quae?'
  },
  {
    title: 'Software Engineer',
    company: 'Facebook',
    location: 'Mountain View, CA',
    from: '12-01-2019',
    to: '03-18-2021',
    current: true,
    LanguageTags: ['Python', 'Java', 'C++'],
    FrameworkTags: ['React', 'Vue', 'Angular'],
    DevelopmentTags: ['Web', 'Mobile', 'Desktop'],
    InterestTags: ['AI', 'ML', 'Data Science'],
    CloudProviderTags: ['AWS', 'Azure', 'GCP'],
    DifficultyTags: ['Beginner', 'Intermediate', 'Advanced'],
    SizeTags: ['Small', 'Medium', 'Large'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos placeat, dolorum ullam ipsam, sapiente suscipit dicta eius quisquam quod doloribus, fuga minus inventore quae?'
  },
  {
    title: 'Software Engineer',
    company: 'Amazon',
    location: 'Mountain View, CA',
    from: '12-01-2019',
    to: '03-18-2021',
    current: true,
    LanguageTags: ['Python', 'Java', 'C++'],
    FrameworkTags: ['React', 'Vue', 'Angular'],
    DevelopmentTags: ['Web', 'Mobile', 'Desktop'],
    InterestTags: ['AI', 'ML', 'Data Science'],
    CloudProviderTags: ['AWS', 'Azure', 'GCP'],
    DifficultyTags: ['Beginner', 'Intermediate', 'Advanced'],
    SizeTags: ['Small', 'Medium', 'Large'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos placeat, dolorum ullam ipsam, sapiente suscipit dicta eius quisquam quod doloribus, fuga minus inventore quae?'
  },
]
export default function ProfileExperiences() {
>>>>>>> 92989afb677692a7bb51e6bd0807c512bd6c172d
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
<<<<<<< HEAD
        {props.experiences.map((job, index) => {
=======
        {experience.map((job, index) => {
>>>>>>> 92989afb677692a7bb51e6bd0807c512bd6c172d
          return (
            <ProfileWork job={job} key={index}/>
          )
        })}
      </div>
    </div>
  )
}