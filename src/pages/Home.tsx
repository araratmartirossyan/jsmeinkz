import React from 'react'
import { useQuery } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'

// Components
import { Page } from '@/components/layout/page'
import { Heading, Tag, Input, Button, JobCard } from '@/components'
import {
  fetchJobs,
  fetchTags,
  fetchPositions,
  fetchWorkTypes,
} from '@/services/queries'

// GraphQl
const renderTag = (item: JSMEIN.Tag, key: number) => (
  <Tag key={key}>{item.title}</Tag>
)

export const Home = () => {
  const navigate = useNavigate()

  const { data: typesResult, isLoading: typesLoading } = useQuery(
    'work-types',
    fetchWorkTypes
  )

  const { data: positionsResult, isLoading: positionsLoading } = useQuery(
    'positions',
    fetchPositions
  )

  const { data: tagsResult, isLoading: tagsLoading } = useQuery(
    'tags',
    fetchTags
  )

  const { data: jobsResult, isLoading: jobsLoading } = useQuery(
    'jobs',
    fetchJobs
  )

  if (jobsLoading || tagsLoading || positionsLoading || typesLoading) {
    return <div>...Loading</div>
  }

  return (
    <div className="home-page">
      <Page>
        <header className="flex sm:justify-end justify-between w-full max-w-4xl ">
          <Link
            className="text-blue-600 text-sm underline sm:ml-10"
            to="/job/create"
          >
            Post your job for $95
          </Link>
          <div className="flex justify-end">
            <Link
              className="text-blue-600 text-sm underline sm:ml-10"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="text-blue-600 text-sm underline sm:ml-10 ml-4"
              to="/signUp"
            >
              Sign up
            </Link>
          </div>
        </header>
        <div className="flex flex-col items-center max-w-2xl">
          <Heading
            tag="h2"
            className="text-white text-2xl font-bold sm:mt-2 mt-5"
          >
            JSMEIN.KZ
          </Heading>
          <Heading tag="span" className="text-white text-xl mt-2 text-center">
            Поиск работы для JS разрабов от JS разрабов
          </Heading>
          <div className="home_page__search mt-5 w-full flex">
            <Input placeholder="Пример: React" />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-14 ml-2">
              Искать
            </Button>
          </div>
          <div className="home-page__tags mt-2 flex flex-row items-center w-full justify-center">
            {tagsResult?.map(renderTag)}
          </div>
          <div className="home-page__tags mt-2 flex flex-row items-center w-full justify-center">
            {positionsResult?.map(renderTag)}
          </div>
          <div className="home-page__tags mt-2 flex flex-row items-center w-full justify-center">
            {typesResult?.map(renderTag)}
          </div>
        </div>

        <div className="flex flex-col items-center max-w-2xl">
          {jobsResult &&
            jobsResult.map((job, index) => (
              <JobCard
                {...job}
                key={`job-${index}`}
                handleClick={() => navigate(`job/${job.id}`)}
              />
            ))}
        </div>
      </Page>
    </div>
  )
}
