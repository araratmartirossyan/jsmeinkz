import React, { FC } from 'react'
import cx from 'classnames'

interface JobCardHeaderProps {
  title: string
  companyName: string
  place: string
  salary: string
  type: string
  onClick: () => void
}

interface ColoredItemProps {
  color: string
  text: string
  fontSize?: string
  bold?: boolean
  pointer?: boolean
  onClick?: () => void
}

const ColoredItem: FC<ColoredItemProps> = ({
  color,
  text,
  fontSize,
  bold,
  pointer,
  onClick,
}) => (
  <span
    onClick={onClick}
    style={{
      color,
      fontSize,
      fontWeight: bold ? 600 : 0,
      cursor: pointer ? 'pointer' : '',
    }}
    className={cx({
      'hover:underline': pointer,
    })}
  >
    {text}
  </span>
)

export const JobCardHeader: FC<JobCardHeaderProps> = ({
  title,
  companyName,
  place,
  salary,
  type,
  onClick,
}) => {
  return (
    <div className="text-gray-500">
      <ColoredItem
        color="#29bf4c"
        text={title}
        fontSize="18px"
        bold
        pointer
        onClick={onClick}
      />
      <div className="block">
        <ColoredItem color="#005cc5" text={companyName} /> |{' '}
        <ColoredItem color="#fff" text={place} />
      </div>
      <ColoredItem color="#e36209" text={salary} /> |{' '}
      <ColoredItem color="#e36209" text={type} />
    </div>
  )
}
