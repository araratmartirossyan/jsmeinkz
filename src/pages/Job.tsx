import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'

import { Page } from '../components/layout/page'
import { JobCard } from '../components/JobCard/JobCard'

import { fetchJob } from '../services/queries'

export const Job = () => {
  const { id = '' } = useParams<{ id: string }>()

  const { data, isLoading } = useQuery('jobs', () => fetchJob(id))

  if (isLoading) {
    return <div>Загружается</div>
  }

  return (
    <Page>
      <div className="flex flex-col items-center max-w-2xl">
        <JobCard {...data} isFull />
      </div>
    </Page>
  )
}

export default Job
