import React from 'react'
import { Formik } from 'formik'
import { Page } from '@/components/layout/Page'
import { Button, Heading } from '@/components'
import { useQuery } from 'react-query'
import { fetchJobs, fetchTags } from '@/services/queries'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { InitialValues } from './types'
import { initialValues } from './constants'
import { validate } from './utils'

export const JobForm = () => {
  const [jobs, setJobs] = useLocalStorage<Array<InitialValues>>('jobs', [
    initialValues,
  ])


  const { data: tagsResult, isLoading: tagsLoading } = useQuery(
    'tags',
    fetchTags
  )

  const { data: jobsResult, isLoading: jobsLoading } = useQuery(
    'tags',
    fetchJobs
  )

  console.log(jobsResult)


  const onSubmit = (
    values: InitialValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 400)
  }

  return (
    <Page>
      <div className="w-full max-w-3xl">
        <Heading
          tag="h2"
          className="text-white text-2xl font-bold mt-2 mb-10 text-center"
        >
          Find your next JavaScript engineer
        </Heading>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              onSubmit={(event) => {
                event.preventDefault()
                handleSubmit()
              }}
            >
              <div className="mb-12">
                <div
                  className={`pb-6 mb-4 relative box-border ${
                    errors.jobTitle &&
                    touched.jobTitle &&
                    'border-2 border-red-600'
                  }`}
                >
                  <label className="text-gray-200 uppercase block mb-1 text-sm font-medium">
                    <span className="mr-2">job title</span>
                    <span className="text-gray-500 text-xs lowercase font-medium">
                      (required)
                    </span>
                  </label>
                  <input
                    className="bg-gray-600 p-2 focus:no-underline focus:border-0 placeholder-gray-400 text-gray text-gray-200 focus:outline-none w-full"
                    type="text"
                    name="jobTitle"
                    onChange={handleChange}
                    placeholder="Example: Senior Fullstack Engineer"
                    value={values.jobTitle}
                  />
                  {errors.jobTitle && touched.jobTitle && (
                    <span className="text-red-400 text-xs absolute left-0 bottom-0">
                      {errors.jobTitle}
                    </span>
                  )}
                </div>
                <div className="pb-6 mb-4 relative">
                  <label className="text-gray-200 uppercase block mb-1 text-sm font-medium">
                    employment type
                  </label>
                  <input
                    className="bg-gray-600 p-2 focus:no-underline focus:border-0 placeholder-gray-400 text-gray text-gray-200 focus:outline-none w-full"
                    type="text"
                    name="employmentType"
                    onChange={handleChange}
                    placeholder="Example: Full Time"
                    value={values.employmentType}
                  />
                </div>
                <div className="pb-6 mb-4 relative">
                  <label className="text-gray-200 uppercase block mb-1 text-sm font-medium">
                    salary
                  </label>
                  <input
                    className="bg-gray-600 p-2 focus:no-underline focus:border-0 placeholder-gray-400 text-gray text-gray-200 focus:outline-none w-full"
                    type="text"
                    name="salary"
                    onChange={handleChange}
                    placeholder="Example: $60 pa, equity"
                    value={values.salary}
                  />
                </div>
                <div className="pb-6 mb-4 relative">
                  <label className="text-gray-200 uppercase block mb-1 text-sm font-medium">
                    company or recruitment company name
                  </label>
                  <input
                    className="bg-gray-600 p-2 focus:no-underline focus:border-0 placeholder-gray-400 text-gray text-gray-200 focus:outline-none w-full"
                    type="text"
                    name="companyName"
                    onChange={handleChange}
                    placeholder="Example: Foobar"
                    value={values.companyName}
                  />
                </div>
                <div
                  className={`pb-6 mb-4 relative ${
                    errors.locations &&
                    touched.locations &&
                    'border-2 border-red-600'
                  }`}
                >
                  <label className="text-gray-200 uppercase block mb-1 text-sm font-medium">
                    <span className="mr-2">locations</span>
                    <span className="text-gray-500 text-xs lowercase font-medium">
                      (required)
                    </span>
                  </label>
                  <input
                    className="bg-gray-600 p-2 focus:no-underline focus:border-0 placeholder-gray-400 text-gray text-gray-200 focus:outline-none w-full"
                    type="text"
                    name="locations"
                    onChange={handleChange}
                    placeholder="Example: London"
                    value={values.locations}
                  />
                  {errors.locations && touched.locations && (
                    <span className="text-red-400 text-xs absolute left-0 bottom-0">
                      {errors.locations}
                    </span>
                  )}
                </div>
                <div
                  className={`pb-6 mb-4 relative ${
                    errors.url && touched.url && 'border-2 border-red-600'
                  }`}
                >
                  <label className="text-gray-200 uppercase block mb-1 text-sm font-medium">
                    <span className="mr-2">
                      where can candidates apply for this job?
                    </span>
                    <span className="text-gray-500 text-xs lowercase font-medium">
                      (required)
                    </span>
                  </label>
                  <input
                    className="bg-gray-600 p-2 focus:no-underline focus:border-0 placeholder-gray-400 text-gray text-gray-200 focus:outline-none w-full"
                    type="text"
                    name="url"
                    onChange={handleChange}
                    placeholder="Example: https://carreers.foobar.com/job-vacancy-123/apply"
                    value={values.url}
                  />
                  {errors.url && touched.url && (
                    <span className="text-red-400 text-xs absolute left-0 bottom-0">
                      {errors.url}
                    </span>
                  )}
                </div>
                <div
                  className={`pb-6 mb-4 relative ${
                    errors.description &&
                    touched.description &&
                    'border-2 border-red-600'
                  }`}
                >
                  <label className="text-gray-200 uppercase block mb-1 text-sm font-medium">
                    <span className="mr-2">description</span>
                    <span className="text-gray-500 text-xs lowercase font-medium">
                      (required)
                    </span>
                  </label>
                  <textarea
                    className="bg-gray-600 p-2 focus:no-underline focus:border-0 placeholder-gray-400 text-gray text-gray-200 focus:outline-none w-full h-48"
                    name="description"
                    onChange={handleChange}
                    value={values.description}
                  />
                  {errors.description && touched.description && (
                    <span className="text-red-400 text-xs absolute left-0 bottom-0">
                      {errors.description}
                    </span>
                  )}
                </div>
              </div>
              <div
                className={`pb-6 mb-12 relative ${
                  errors.email && touched.email && 'border-2 border-red-600'
                }`}
              >
                <label className="text-gray-200 uppercase block mb-1 text-sm font-medium">
                  <span className="mr-2">your email address</span>
                  <span className="text-gray-500 text-xs lowercase font-medium">
                    (required)
                  </span>
                </label>
                <input
                  className="bg-gray-600 p-2 focus:no-underline focus:border-0 placeholder-gray-400 text-gray text-gray-200 focus:outline-none w-full"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Example: jain@foobar.com"
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <span className="text-red-400 text-xs absolute left-0 bottom-0">
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="flex justify-end">
                <Button
                  type="button"
                  disabled={isSubmitting}
                  className="mr-5 px-4 h-14 rounded border border-blue-600 text-blue-600 cursor-pointer font-bold hover:bg-blue-500 hover:text-white hover:bg-blue-600"
                >
                  Save draft
                </Button>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 rounded h-14"
                >
                  $95 Checkout via Stripe.com
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Page>
  )
}
