import { FormFieldProps, ValidatorFn, useFormField } from './useFormField'

export type ValidatorMap = {
  [key: string]: ValidatorFn[]
}

export type FieldProps = {
  [key: string]: FormFieldProps<any>
}

export function useForm(init: any = {}, validatorMap: ValidatorMap = {}) {
  const fields: FieldProps = Object.fromEntries(
    Object.entries(init).map((each: any[]) => {
      const [name, value] = each
      return [name, useFormField(value, name, validatorMap[name] || [])]
    })
  )
  const reset = () => Object.values(fields).map((f) => f.reset())
  const error: boolean = Object.values(fields).some((f) => f.error)
  const dirty: boolean = Object.values(fields).some((f) => f.dirty)
  return {
    fields,
    reset,
    error,
    dirty
  }
}
