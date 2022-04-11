import React, { FC } from 'react'
import cx from 'classnames'

const ColoredItem: FC<JSMEIN.ColoredItemProps> = ({
  color,
  text,
  fontSize,
  bold,
  pointer,
  onClick,
  separator = false,
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
    {text} {separator ? '| ' : ''}
  </span>
)

export const JobCardHeader: FC<JSMEIN.JobCardHeaderProps> = ({
  title,
  companyName,
  place,
  salary,
  types,
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
        <ColoredItem color="#005cc5" text={companyName} separator />
        <ColoredItem color="#fff" text={place} />
      </div>
      <ColoredItem color="#e36209" text={salary} separator />
      {types?.map((type, index) => (
        <ColoredItem
          key={index}
          color="#e36209"
          text={type.title}
          separator={index + 1 !== types.length}
        />
      ))}
    </div>
  )
}
