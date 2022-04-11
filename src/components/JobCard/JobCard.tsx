import React, { FC, useMemo } from 'react'
import { JobCardHeader } from './JobCardHeader'
import ReactMarkdown from 'react-markdown'

import './JobCard.css'

export const JobCard: FC<JSMEIN.JobCardProps> = ({
  title,
  companyName,
  city,
  salary,
  work_types,
  description = '',
  tags,
  handleClick,
  isFull = false,
}) => {
  const descr = isFull ? description : `${description?.slice(0, 251)}...`

  const updatedTags = useMemo(
    () => tags?.data.map((item) => ({ ...item.attributes, id: item.id })),
    [tags]
  )

  const updatedTypes = useMemo(
    () => work_types?.data.map((item) => ({ ...item.attributes, id: item.id })),
    [tags]
  )

  return (
    <div className="mt-10">
      <JobCardHeader
        title={title}
        companyName={companyName}
        place={city}
        salary={salary}
        types={updatedTypes}
        onClick={handleClick}
      />
      <div className="mt-3">
        {updatedTags?.map((tag, index) => (
          <span
            className="p-2 mr-2 bg-gray-600 text-gray-400 bg-opacity-30"
            key={index}
          >
            {tag.title}
          </span>
        ))}
      </div>
      <ReactMarkdown
        className="text-gray-400 mt-6"
        children={descr}
        includeElementIndex={true}
      />
    </div>
  )
}
