declare namespace JSMEIN {
  type Tag = {
    title: string
    id: number
  }

  type Position = {
    title: string
    id: number
  }

  type Type = {
    title: string
    id: number
  }

  // special for Job item
  interface Job {
    title?: string
    companyName?: string
    city?: string
    salary?: string
    work_types?: {
      data: {
        id: number
        attributes: Type
      }[]
    }
    description?: string
    createdAt?: string
    updatedAt?: string
    tags?: {
      data: {
        id: number
        attributes: Tag
      }[]
    }
    contactLink?: string
    id?: number | string
  }

  type JobResult = {
    data: {
      id: number
      attributes: Job
    }
  }

  type TagsResult = {
    data: {
      id: number
      attributes: Tag
    }[]
  }

  type PositionsResult = {
    data: {
      id: number
      attributes: Position
    }[]
  }

  type TypesResult = {
    data: {
      id: number
      attributes: Type
    }[]
  }

  type JobsResult = {
    data: {
      id: number
      attributes: Job
    }[]
  }

  interface JobCardProps extends Partial<Job> {
    handleClick?: () => void
    isFull?: boolean
  }

  interface JobCardHeaderProps {
    title?: string
    companyName?: string
    place?: string
    salary?: string
    types?: Type[]
    onClick?: () => void
  }

  interface ColoredItemProps {
    color: string
    text?: string
    fontSize?: string
    bold?: boolean
    pointer?: boolean
    separator?: boolean
    onClick?: () => void
  }
}

declare module '*.graphql' {
  const content: any
  export default content
}
