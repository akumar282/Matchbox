import React, {useEffect} from 'react'
import {githubPullRequestSimple} from '../backend/types'
import {useNavigate} from 'react-router-dom'

interface PullRequestsTableProps {
  gitPulls: githubPullRequestSimple[]
}

interface PullRequestRowProps {
  githubPull: githubPullRequestSimple,
  index: number
}

export function PullRequestRow(props: PullRequestRowProps) {

  const rowStyle = (props.index % 2 != 0) ? 'bg-gray-100' : ''

  return (
    <tr className={rowStyle}>
      <td>
        <div className='flex flex-row'>
          <a href={props.githubPull.html_url} target='_blank' rel="noreferrer">
            <div className='flex px-4 py-3 flex-col space-y-2 text-sm'>
              <h1>{props.githubPull.title}</h1>
              <h3 className='text-xs'>#{props.githubPull.number} by {props.githubPull.user?.login}</h3>
            </div>
          </a>
        </div>
      </td>
      <td className='hidden lg:table-cell'>
        <div className='px-3 py-3 flex flex-row justify-center'>
          {props.githubPull.user != null ?
            <a href={props.githubPull.user?.html_url} target='_blank' rel='noreferrer'>
              <img src={props.githubPull.user?.avatar_url} alt='Author Profile Image'
                className='rounded-full object-cover overflow-hidden max-w-9 max-h-9'/>
            </a>
            :
            <>
            </>
          }
        </div>
      </td>
      <td className='hidden lg:table-cell'>
        <div className='px-3 py-3 flex flex-row justify-center'>
          {props.githubPull.assignee != null ?
            <a href={props.githubPull.assignee?.html_url} target='_blank' rel='noreferrer'>
              <img src={props.githubPull.assignee?.avatar_url} alt='Author Profile Image'
                className='rounded-full object-cover overflow-hidden max-w-9 max-h-9'/>
            </a>
            :
            <>
            </>
          }
        </div>
      </td>
    </tr>
  )
}

export default function PullRequestsTable(props: PullRequestsTableProps) {

  const navigate = useNavigate()
  const [tabOpenIssues, setTabOpenIssues] = React.useState<boolean>(true)
  const [openIssues, setOpenIssues] = React.useState<React.ReactElement[]>([])
  const [closedIssues, setClosedIssues] = React.useState<React.ReactElement[]>([])

  useEffect(() => {
    const filterData = async () => {
      try{
        setOpenIssues(
          (props.gitPulls.filter(x => x.state != 'closed') as githubPullRequestSimple[])
            .map((x, index) => <PullRequestRow githubPull={x} index={index} key={index}/>)
        )

        setClosedIssues(
          (props.gitPulls.filter(x => x.state === 'closed') as githubPullRequestSimple[])
            .map((x, index) => <PullRequestRow githubPull={x} index={index} key={index}/>)
        )
      } catch (e) {
        navigate('/404')
      }
    }




    filterData().catch()
  }, [])

  return (
    <div className='lg:w-full w-[97%] mx-auto bg-white rounded-lg border-gray-300 border-2 overflow-visible'>
      <table className='w-full font-primary font-tableThin table-auto rounded-lg overflow-hidden'>
        <thead className='bg-gray-100 border-b-2 border-gray-300'>
          <tr>
            <th className='font-primary w-4/6 text-start px-4 py-3 font-tableThin text-sm'>
              <div className='flex flex-row space-x-4'>
                <button
                  className={`${tabOpenIssues === true ? 'text-indigo-600' : 'hover:text-gray-400'}`}
                  onClick={() => setTabOpenIssues(true)}>
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
                    <h1>Open</h1>
                  </div>
                </button>
                <button
                  className={`${tabOpenIssues === false ? 'text-indigo-600' : 'hover:text-gray-400'}`}
                  onClick={() => setTabOpenIssues(false)}>
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
                        d={`M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 
                        0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 
                        0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z`}
                      />
                    </svg>
                    <h1>Closed</h1>
                  </div>
                </button>
              </div>
            </th>
            <th className='hidden lg:table-cell px-3 font-primary font-tableThin text-sm'>
            Author
            </th>
            <th className='hidden lg:table-cell px-3 font-primary font-tableThin text-sm'>
            Assignee
            </th>
          </tr>
        </thead>
        <tbody>
          {tabOpenIssues === true ? openIssues : closedIssues}
        </tbody>
      </table>
    </div>
  )
}