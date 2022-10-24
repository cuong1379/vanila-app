import { Dispatch, SetStateAction, useEffect } from 'react'

import { useState } from 'react'

export type ValidatorFn = (value: any, name: string) => string
export type FormFieldProps<S> = {
  value: S
  setValue: Dispatch<SetStateAction<S>>
  reset: () => void
  error: string
  setError: Dispatch<SetStateAction<string>>
  dirty: boolean
  setDirty: Dispatch<SetStateAction<boolean>>
}

export function useFormField<S>(init: S, name = '', validators: ValidatorFn[] = []): FormFieldProps<S> {
  const [value, setValue] = useState<S>(init)
  const [error, setError] = useState<string>('')
  const [dirty, setDirty] = useState<boolean>(false)

  useEffect(() => {
    const nextError = validateField(value, name, validators)
    setDirty(init != value)
    setError(nextError)
  }, [value])

  const reset = () => {
    setValue(init)
  }

  return {
    value,
    setValue,
    reset,
    error,
    setError,
    dirty,
    setDirty
  }
}

export const validateField = (value: any, name: string, validators: ValidatorFn[]) => {
  let nextError = ''
  for (let i = 0; i < validators.length; i++) {
    const validatorFn = validators[i]
    const errorMessage = validatorFn(value, name)
    if (errorMessage) {
      nextError = errorMessage
      break
    }
  }
  return nextError
}
