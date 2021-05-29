import React from 'react'
import { useQuery } from '@apollo/client'

// Components
import { Page } from '@/components/layout/page'
import { Heading, Tag, Input, Button, JobCard, Job } from '@/components'

// GraphQl
import fetchTags from '@/graphql/queries/fetchTags.query.graphql'
import fetchPositions from '@/graphql/queries/fetchPositions.query.graphql'
import fetchTypes from '@/graphql/queries/fetchTypes.query.graphql'
import fetchJobs from '@/graphql/queries/fetchJobs.query.graphql'

const renderTag = (item: JSMEIN.Tag, key: number) => (
  <Tag key={key}>{item.title}</Tag>
)

const renderCard = (job: Job, key: number) => (
  <JobCard key={`job-${key}`} {...job} />
)

export const Home = () => {
  const { data: tagResult, loading: tagLoading } =
    useQuery<JSMEIN.TagsResult>(fetchTags)

  const { data: positionsResult, loading: positionLoading } =
    useQuery<JSMEIN.PositionsResult>(fetchPositions)

  const { data: typesResult, loading: typesLoading } =
    useQuery<JSMEIN.TypesResult>(fetchTypes)

  const {
    data: jobsResult,
    loading: jobsLoading,
    refetch,
  } = useQuery<JSMEIN.JobsResult>(fetchJobs)

  if (tagLoading || positionLoading || typesLoading || jobsLoading) {
    return <div>...Loading</div>
  }

  const filterJobs = () => {
    refetch({})
  }

  return (
    <div className="home-page">
      <Page>
        <div className="flex flex-col items-center max-w-2xl">
          <Heading tag="h2" className="text-white text-2xl font-bold mt-2">
            JSMEIN.KZ
          </Heading>
          <Heading tag="span" className="text-white text-xl mt-2">
            Поиск работы для JS разрабов от JS разрабов
          </Heading>
          <div className="home_page__search mt-5 w-full flex">
            <Input placeholder="Пример: React" />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-14 ml-2">
              Искать
            </Button>
          </div>
          <div className="home-page__tags mt-2 flex flex-row items-center w-full justify-center">
            {tagResult?.tags.map(renderTag)}
          </div>
          <div className="home-page__tags mt-2 flex flex-row items-center w-full justify-center">
            {positionsResult?.positions.map(renderTag)}
          </div>
          <div className="home-page__tags mt-2 flex flex-row items-center w-full justify-center">
            {typesResult?.types.map(renderTag)}
          </div>
        </div>

        <div className="flex flex-col items-center max-w-2xl">
          {jobsResult?.jobs.map(renderCard)}
        </div>
      </Page>
    </div>
  )
}
