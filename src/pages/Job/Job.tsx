import React from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'

import { Text } from '@/components/Text'
import { Page } from '@/components/layout/page'

import fetchJob from '@/graphql/queries/fetchJob.query.graphql'

export const Job = () => {
  const { id } = useParams<{ id: string }>()
  const { data, loading } = useQuery(fetchJob, { variables: { jobId: id } })

  if (loading) {
    return <div>Загружается</div>
  }

  return (
    <div className="home-page">
      <Page>
        <h2 className="text-white">{data.job.title}</h2>
        <Text />
      </Page>
    </div>
  )
}
