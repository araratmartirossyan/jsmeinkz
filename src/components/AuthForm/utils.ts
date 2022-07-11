import { InitialValues } from './types'

export const validate = (values: InitialValues) => {
  const errors: Partial<InitialValues> = {}

  if (!values.email) {
    errors.email = 'This field is required'
  }

  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }

  if (!values.checked) {
    errors.checked = 'This field is required'
  }
  return errors
}
