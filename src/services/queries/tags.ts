export const fetchTags = async (): Promise<JSMEIN.Tag[]> => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}api/tags?populate=*`
  )
  const { data }: JSMEIN.TagsResult = await response.json()

  return data.map(({ attributes, id }) => ({
    ...attributes,
    id,
  }))
}
