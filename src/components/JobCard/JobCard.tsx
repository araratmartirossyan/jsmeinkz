import React, { FC } from 'react'
import { JobCardHeader } from './JobCardHeader'

export const JobCard: FC<JSMEIN.Job> = ({
  title,
  companyName,
  place,
  salary,
  type,
  description,
  tags,
}) => (
  <div className="mt-10">
    <JobCardHeader
      title={title}
      companyName={companyName}
      place={place}
      salary={salary}
      type={type}
      onClick={() => {}}
    />
    <p className="text-gray-400">{description.slice(0, 251)}...</p>
    <div className="mt-3">
      {tags.map((tag) => (
        <span className="p-2 mr-2 bg-gray-600 text-gray-400 bg-opacity-30">
          {tag.title}
        </span>
      ))}
    </div>
  </div>
)
