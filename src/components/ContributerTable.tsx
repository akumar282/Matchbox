/* eslint-disable */
import React from 'react'
import {githubContributors} from '../backend/types'


export function ContributorRow(props: githubContributors) {
  return (
    <tr>
      {props.avatar_url}
    </tr>
  )
}
export default function ContributorsTable() {

}