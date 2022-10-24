import Ajv from 'ajv'
import ajvErrors from 'ajv-errors'
import addFormats from 'ajv-formats'
import { useMemo } from 'react'

export const useValidator = (schema: any) => {
  const validator = useMemo(() => {
    const ajv: any = new Ajv({ allErrors: true })
    addFormats(ajv)
    ajvErrors(ajv)
    return ajv.compile(schema)
  }, [])

  return validator
}
