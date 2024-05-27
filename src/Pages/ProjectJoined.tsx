/* eslint-disable */
import React, {useContext, useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {AuthContext} from '../components/AuthWrapper'
import NavBar from '../components/NavBar'
import IssuesTable from '../components/IssuesTable'
import PullRequestsTable from '../components/PullRequestsTable'
import {getPost} from '../backend/queries/postQueries'
import {githubIssue, githubPullRequestSimple} from '../backend/types'
import {PostsModel} from '../API'
import ContributorNotes from '../components/ContributorNotes'

export default function ProjectJoined(props) {

  const navigate = useNavigate()
  const { id } = useParams()
  const [gitPulls, setGitPulls] = useState<githubPullRequestSimple[]>([])
  const [repoData, setRepoData] = useState<PostsModel | null>(null)
  const [gitIssues, setGitIssues] = useState<githubIssue[]>([])
  const [fetchFail, setFetchFail] = useState<boolean>(false)
  const [pageIndex, setPageIndex] = useState<number>(0)

  useEffect(() => {

    const getPageData =  async () => {
      try{
        if (id) {
          const { data } = await getPost({id: id})
          if (data && data.getPostsModel) {
            setRepoData(data.getPostsModel as PostsModel)
            let repoInfo = data.getPostsModel.project_link
            repoInfo = repoInfo?.replace('https://github.com/', '')
            setGitPulls(await (await fetch(`https://api.github.com/repos/${repoInfo}/pulls?state=all`)).json() as githubPullRequestSimple[])
            setGitIssues(await (await fetch(`https://api.github.com/repos/${repoInfo}/issues?state=all`)).json() as githubIssue[])
          }
        }
      } catch (e) {
        setFetchFail(true)
        navigate('/404')
      }
    }

    getPageData().catch(x => console.log(x))

  }, [id])


  return (
    <div className='flex flex-col'>
      <NavBar/>
      <div className='flex justify-center bg-primary-purple flex-grow min-h-screen lg:pb-0 pb-8 w-full'>
        <div className='max-w-[1070px] flex-grow pt-8 justify-center'>
          <div
            className="lg:w-full w-[97%] flex flex-row bg-white rounded-lg py-1 font-primary text-xl space-x-3 mx-auto mb-5">
            <h1 className='ml-2 text-2xl'>{repoData?.post_title} Dashboard</h1>
          </div>
          <div
            className='lg:w-full w-[97%] flex flex-row bg-white rounded-lg py-1 font-primary text-sm space-x-3 mx-auto mb-3'>
            <button
              className={`mx-5 h-full hover:bg-gray-200 rounded-lg p-2 ${pageIndex === 0 ? 'text-indigo-600 bg-gray-200' : ''}`}
              onClick={() => setPageIndex(0)}>
              <div className='flex flex-row items-center space-x-2'>
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  height={16}
                  viewBox='0 0 16 16'
                  version='1.1'
                  stroke='currentColor'
                  strokeWidth={0}
                  width={16}
                >
                  <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'/>
                  <path d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z'/>
                </svg>
                <h3>Issues</h3>
              </div>
            </button>
            <button
              className={`mx-5 h-full hover:bg-gray-200 rounded-lg p-2 ${pageIndex === 1 ? 'text-indigo-600 bg-gray-200' : ''}`}
              onClick={() => setPageIndex(1)}>
              <div className='flex flex-row items-center space-x-2'>
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  height={16}
                  viewBox='0 0 16 16'
                  version='1.1'
                  stroke='currentColor'
                  strokeWidth={0}
                  width={16}
                >
                  <path
                    d={`M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 
                    2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 
                    0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 
                    0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 
                    0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 
                    9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 
                    0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z`}
                  />
                </svg>
                <h3>Pull Requests</h3>
              </div>
            </button>
          </div>
          {pageIndex === 0 ? <IssuesTable gitIssues={gitIssues}/> : <PullRequestsTable gitPulls={gitPulls}/>}
          <div className='mx-auto mb-12'>
            {id ?
              <ContributorNotes postID={id}/>
              :
              <></>
            }
          </div>
        </div>
      </div>
      <div className='bg-secondary-blue flex flex-col static bottom-0 items-center justify-center'>
        <div>
          <h1 className='text-base font-primary text-center text-white py-4 px-5'>Copyright © 2023 GitMatch</h1>
        </div>
      </div>
    </div>
  )
}