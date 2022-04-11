const API_URL = import.meta.env.VITE_APP_API_URL

export const fetchJobs = async (): Promise<JSMEIN.Job[]> => {
  const response = await fetch(`${API_URL}api/jobs?populate=*`)
  const { data }: JSMEIN.JobsResult = await response.json()
  return data.map((job) => ({
    ...job.attributes,
    id: job.id,
  }))
}

export const fetchJob = async (jobId: string): Promise<JSMEIN.Job> => {
  const response = await fetch(`${API_URL}api/jobs/${jobId}?populate=*`)

  const {
    data: { attributes, id },
  }: JSMEIN.JobResult = await response.json()

  return {
    ...attributes,
    id,
  }
}
