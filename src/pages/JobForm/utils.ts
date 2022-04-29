import { InitialValues } from './types'

export const validate = (values: InitialValues) => {
  const errors: Partial<
    Omit<InitialValues, 'employmentType' | 'salary' | 'companyName'>
  > = {}

  if (!values.email) {
    errors.email = 'This field is required'
  }

  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }

  if (!values.description) {
    errors.description = 'This field is required'
  }

  if (!values.jobTitle) {
    errors.jobTitle = 'This field is required'
  }

  if (!values.locations) {
    errors.locations = 'This field is required'
  }

  if (!values.url) {
    errors.url = 'This field is required'
  }

  return errors
}
