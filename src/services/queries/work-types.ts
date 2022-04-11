export const fetchWorkTypes = async (): Promise<JSMEIN.Type[]> => {
  const API_URL = import.meta.env.VITE_APP_API_URL

  const response = await fetch(`${API_URL}api/work-types`)
  const { data }: JSMEIN.TypesResult = await response.json()

  return data.map(({ id, attributes }) => ({
    ...attributes,
    id,
  }))
}
