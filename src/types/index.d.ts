declare namespace JSMEIN {
  type Tag = {
    title: string
    id: string
  }

  type Position = {
    title: string
    id: string
  }

  type Type = {
    title: string
    id: string
  }

  type Job = {
    title: string
    companyName: string
    place: string
    salary: string
    type: string
    description: string
    createdAt?: string
    updatedAt?: string
    tags: Tag[]
    contactLink: string
  }

  type TagsResult = {
    tags: Tag[]
  }

  type PositionsResult = {
    positions: Position[]
  }

  type TypesResult = {
    types: Type[]
  }

  type JobsResult = {
    jobs: Job[]
  }
}

declare module '*.graphql' {
  const content: any
  export default content
}
