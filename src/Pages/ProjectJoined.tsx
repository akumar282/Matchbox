/* eslint-disable */
import React, {useContext, useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {AuthContext} from '../components/AuthWrapper'
import NavBar from '../components/NavBar'
import IssuesTable from '../components/IssuesTable'
import PullRequestsTable from '../components/PullRequestsTable'
import {getPost} from '../backend/queries/postQueries'
import {githubIssue, githubPullRequestSimple, githubRepoInfoMinimal} from '../backend/types'
import {PostsModel} from '../API'
import ContributorNotes from '../components/ContributorNotes'

export default function ProjectJoined(props) {

  const navigate = useNavigate()
  const { id } = useParams()
  const [gitPulls, setGitPulls] = useState<githubPullRequestSimple[]>([])
  const [repoData, setRepoData] = useState<PostsModel | null>(null)
  const [gitIssues, setGitIssues] = useState<githubIssue[]>([])
  const [repoInfo, setRepoInfo] = useState<githubRepoInfoMinimal>({} as githubRepoInfoMinimal)
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
            setRepoInfo(await (await fetch(`https://api.github.com/repos/${repoInfo}`)).json() as githubRepoInfoMinimal)
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
            className='lg:w-full w-[97%] flex flex-row bg-white rounded-lg py-1 font-primary text-xl space-x-3 mx-auto mb-5'>
            <h1 className='ml-2 text-2xl'>{repoData?.post_title} Dashboard</h1>
          </div>
          <div className='lg:w-full w-[97%] font-primary mx-auto lg:justify-start py-1 justify-between my-4 items-center flex flex-row bg-white rounded-lg'>
            <div className='flex mx-3 flex-row items-center'>
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
                  d='M8 .25a.75.75 0 0 1 .673.418l1.882 3.815
                  4.21.612a.75.75 0 0 1 .416 1.279l-3.046
                  2.97.719 4.192a.751.751 0 0 1-1.088.791L8
                  12.347l-3.766 1.98a.75.75 0 0
                  1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1
                  .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8
                  .25Zm0 2.445L6.615 5.5a.75.75 0 0
                  1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1
                  .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1
                  .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1
                  .216-.664l2.24-2.183-3.096-.45a.75.75 0 0
                  1-.564-.41L8 2.694Z'>
                </path>
              </svg>
              <div className='flex flex-row space-x-2'>
                <h3 className='ml-2'>{repoInfo.stargazers_count}</h3>
                <h3>Stars</h3>
              </div>
            </div>
            <div className='flex mx-3 items-center flex-row'>
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
                  d='M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091
                  2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0
                  1.798c-.45.678-1.367 1.932-2.637 3.023C11.67
                  13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797
                  10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677
                  1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679
                  7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366
                  2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742
                  3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12
                  0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824
                  4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955
                  1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2
                  2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z'/>
              </svg>
              <div className='flex flex-row space-x-2'>
                <h3 className='ml-2'>{repoInfo.watchers_count}</h3>
                <h3>Watchers</h3>
              </div>
            </div>
            <div className='flex mx-3 items-center flex-row'>
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
                  d='M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75
                  0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 
                  0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 
                  2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 
                  6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 
                  0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 
                  0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 
                  0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z'/>
              </svg>
              <div className='flex flex-row space-x-2'>
                <h3 className='ml-2'>{repoInfo.forks_count}</h3>
                <h3>Forks</h3>
              </div>
            </div>
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