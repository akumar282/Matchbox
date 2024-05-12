import React from 'react'
import {enumBundle, preferenceTags} from '../backend/types'
import Tags from '../components/Tags'
import {listUserConvos} from '../backend/queries/userConvoQueries'
import {getConversation} from '../backend/queries/conversationQueries'


export type tagRender = {
  tagType: preferenceTags[],
  renderColor: string
}

export function imageOrDefault(img: string, size: string = 'w-11 h-11') {
  if (!img) {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.2}
        stroke='currentColor'
        className={size}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'/>
      </svg>
    )
  } else {
    return (
      <img src={img} alt='Profile Picture' className={`${size} rounded-full object-cover overflow-hidden`}/>
    )
  }
}

export function generateTags(props: tagRender) {
  return props.tagType.map((tag) => {
    const bundle: enumBundle = {
      enumMap: tag,
      value: tag,
    }

    const tagClasses = `rounded-lg ${props.renderColor} my-2 ml-2 px-3 py-2 font-primary`
    return (
      <Tags
        key={tag}
        bundle={bundle}
        checked={false}
        className={tagClasses}/>
    )
  })
}

export function convertISOToMonthYear(isoString: string) {
  const date = new Date(isoString)

  const monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'
  ]

  const month = monthNames[date.getMonth()]
  const year = date.getFullYear()

  return `${month} ${year}`
}

export async function getImageBlob(imagePath: string): Promise<File> {
  const response = await fetch(imagePath)
  const blob = await response.blob()
  return new File([blob], 'NewLogo.png', {
    type: blob.type,
    lastModified: new Date().getTime()
  })
}

export const doesDmExist = async (userOne: string, userTwo: string)  => {
  const partOne = await listUserConvos({
    filter: {
      usersModelID: {
        eq: userOne
      }
    }
  })
  const partTwo = await listUserConvos({
    filter: {
      usersModelID: {
        eq: userTwo
      }
    }
  })
  if(partTwo && partOne && partOne.data && partTwo.data && partOne.data.listUsersConvos && partTwo.data.listUsersConvos){
    const commonConversations = partOne.data.listUsersConvos.items
      .map(convo => convo?.conversationModelID)
      .filter(convoID => new Set(partTwo.data?.listUsersConvos?.items.map(convo => convo?.conversationModelID)).has(convoID))
    if(commonConversations.length === 0) {
      return false
    } else if (commonConversations.length >= 1) {
      for(const id of commonConversations) {
        const { data } = await getConversation({id: id ? id : '0'})
        if(data && data.getConversationModel && (data.getConversationModel.title === null || data.getConversationModel.title === undefined)){
          return true
        }
      }
    }
  }
  return false
}
