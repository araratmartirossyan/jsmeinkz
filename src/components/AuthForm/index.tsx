import { Button, Input } from '@/components'
import { initialValues } from '@/pages/JobForm/constants'
import { InitialValues } from '@/pages/JobForm/types'
import { validate } from '@/pages/JobForm/utils'
import { Formik } from 'formik'
import React, { Children } from 'react'

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
      <div className="h-screen flex justify-center items-center">
        <form className="flex flex-col items-center space-y-6  border-8 border-gray-600 w-80 h-auto rounded-lg ">
          <div className="px-8 flex flex-col items-center space-y-6">
            <h2 className="text-center text-white text-3xl mt-3 mb-3">
              JSMEIN.KZ
            </h2>
            <span className="text-center text-gray-100">
              Введите адрес электронной почты, чтобы войти или создать учетную
              запись
            </span>
            <Input placeholder={'yours@example.com'} />
            <span className="text-xs text-center text-gray-50">
              Регистрируясь, вы соглашаетесь с нашими условиями обслуживания и
              политикой конфиденциальности.
            </span>
          </div>
          <Button type={'button'} className={'w-full h-16 bg-blue-600 text-white'}>
            Разместить
          </Button>
        </form>
      </div>
    </Formik>
  )
}
