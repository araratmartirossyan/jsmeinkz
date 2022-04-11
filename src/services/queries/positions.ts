export const fetchPositions = async (): Promise<JSMEIN.Position[]> => {
  const API_URL = import.meta.env.VITE_APP_API_URL

  const response = await fetch(`${API_URL}api/positions`)
  const { data }: JSMEIN.PositionsResult = await response.json()
  return data.map(({ id, attributes }) => ({
    ...attributes,
    id,
  }))
}
