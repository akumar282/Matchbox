import React from 'react'
import {githubHealthFiles, githubHealthPercentage, githubRepoHealth} from '../backend/types'
import { Progress } from 'flowbite-react'

interface VerifyRepoProps {
  data: githubRepoHealth
}

function formatText(input: string): string {
  const lowercaseWords = ['of', 'and', 'in', 'on', 'at', 'to', 'for', 'with', 'a', 'an', 'the']
  const words = input.split('_')
  const formattedWords = words.map((word, index) => {
    if (lowercaseWords.includes(word) && index !== 0) {
      return word.toLowerCase()
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }
  })
  return formattedWords.join(' ')
}

function setProgress(percent: githubHealthPercentage) {
  const addContentString = 'Consider adding content to help developers contributing to your project'
  const goodContentString = 'Looking good! Developers should be able to easily contribute to your project'

  const warningSvg = (color: string) => {
    return (
      <div className={color}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/>
        </svg>
      </div>
    )
  }

  const goodSvg =  (
    <div className="text-lime-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
        stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
      </svg>
    </div>
  )

  if (percent < 25) {
    return {
      color: 'red',
      string: addContentString,
      image: warningSvg('text-red-400')
    }
  } else if (percent < 90) {
    return {
      color: 'yellow',
      string: addContentString,
      image: warningSvg('text-yellow-300')
    }
  } else {
    return {
      color: 'green',
      string: goodContentString,
      image: goodSvg
    }
  }
}

function progressBar(percent: githubHealthPercentage) {
  const props = setProgress(percent)

  return (
    <div className="pt-3 pb-3">
      <div className="flex flex-row pb-2 space-x-2 items-center">
        {props.image}
        <h3 className="text-base font-medium text-black">{props.string}</h3>
      </div>
      <Progress progress={percent} color={props.color}/>
    </div>
  )
}

function validOrNot(docs: githubHealthFiles) {
  const validList: React.ReactNode[] = []
  for (const [key, value] of Object.entries(docs)) {
    if (value !== null) {
      validList.push(
        <div className='flex flex-row items-center space-x-2' key={key}>
          <div className="text-lime-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>

          </div>
          <h1>{formatText(key)}</h1>
        </div>
      )
    } else {
      validList.push(
        <div className="flex flex-row items-center space-x-2" key={key}>
          <div className="text-yellow-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
          </div>
          <h1>{formatText(key)}</h1>
        </div>
      )
    }
  }
  return validList
}

export default function VerifyRepo(props: VerifyRepoProps) {
  return (
    <div className='pb-4'>
      {progressBar(props.data.health_percentage)}
      {validOrNot(props.data.files)}
    </div>
  )
}