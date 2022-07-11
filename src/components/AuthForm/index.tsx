import { Button, Input } from '@/components'
import { initialValues } from './constants'
import { InitialValues } from './types'
import { validate } from './utils'
import { Formik } from 'formik'
import React from 'react'

export const AuthForm = () => {
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
        handleSubmit,
        isSubmitting,
      }) => (
        <div className="h-screen flex justify-center items-center">
          <form
            className="flex flex-col items-center space-y-6  border-8 border-gray-600 w-80 h-auto rounded-lg "
            onSubmit={(event) => {
              event.preventDefault()
              handleSubmit()
            }}
          >
            <div className="px-8 flex flex-col items-center space-y-6 ">
              <h2 className="text-center text-white text-3xl mt-3 mb-3">
                JSMEIN.KZ
              </h2>
              <span className="text-center text-gray-100">
                Enter your email to sign in or create an account
              </span>
              <div
                className={`pb-6 mb-12 relative box-border ${
                  errors.email && touched.email && 'border-2 border-red-600'
                }`}
              >
                <Input
                  type="text"
                  placeholder="yours@example.com"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <span className="text-red-400 text-xs absolute left-0 bottom-0">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="text-center flex">
                <div
                  className={`pb-6 text-center flex relative box-border ${
                    errors.checked &&
                    touched.checked &&
                    'border-2 border-red-600'
                  }`}
                >
                  <input
                    type="checkbox"
                    name="checked"
                    onChange={handleChange}
                    className="mr-px"
                    value={values.checked}
                  />

                  <span className="text-xs text-gray-50">
                    By signing up, you agree to our terms of service and privacy
                    policy.
                  </span>
                  <span className="text-red-400 text-xs absolute left-0 bottom-0">
                    {errors.checked}
                  </span>
                </div>
              </div>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-16 bg-blue-600 text-white"
            >
              Submit
            </Button>
          </form>
        </div>
      )}
    </Formik>
  )
}
