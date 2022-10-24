export interface CustomerAddress {
  /**  */
  email?: string;

  /**  */
  phone?: string;

  /**  */
  last_name?: string;

  /**  */
  first_name?: string;

  /**  */
  address1?: string;

  /**  */
  address2?: string;

  /**  */
  postal_code?: string;

  /**  */
  city?: string;

  /**  */
  state?: string;

  /**  */
  country?: string;

  /**  */
  country_code?: string;
}

import Joi from 'joi'

function phoneValidator(value: string, helper: any) {
  const temp = value.replace(/\(|\)|-| /g, '')
  const length = temp.length

  return length !== 10 ? helper.message('"Phone number" length must be 10 characters long') : value
}

const emailSchema = Joi.string()
  .trim()
  .email({ tlds: { allow: false } })
  .label('Email')
const firstNameSchema = Joi.string().trim().label('First name')
const lastNameSchema = Joi.string().trim().label('Last name')
// const nameSchema = Joi.string().trim().label('Full name')
const addressLineSchema = Joi.string().trim().label('Address')
// const address2LineSchema = Joi.string().trim().allow('').label('Address2')
const apartmentSchema = Joi.string().trim().allow('').label('Apartment')
const postalCodeSchema = Joi.string().trim().label('Postal code')
const citySchema = Joi.string().trim().label('City')
// const provinceSchema = Joi.string().trim().allow('').label('Province')
const stateSchema = Joi.string().trim().label('State')
const countryCodeSchema = Joi.string().default('US').label('Country code')
const countrySchema = Joi.string().default('United States').label('Country')

const phoneSchema = Joi.string().trim().label('Phone number').custom(phoneValidator)

const addressSchema = Joi.object<CustomerAddress>({
  email: emailSchema,
  first_name: firstNameSchema.required(),
  last_name: lastNameSchema.required(),
  // name: nameSchema,
  address1: addressLineSchema.required(),
  // address2: address2LineSchema,
  address2: apartmentSchema,
  // apartment: apartmentSchema,
  postal_code: postalCodeSchema.required(),
  city: citySchema.required(),
  // province: provinceSchema,
  state: stateSchema.required(),
  country_code: countryCodeSchema,
  country: countrySchema,
  phone: phoneSchema.required()
})

export async function validateAddressField(field: keyof CustomerAddress, value: any) {
  const schemas = {
    email: emailSchema,
    first_name: firstNameSchema.required(),
    last_name: lastNameSchema.required(),
    // name: nameSchema,
    address1: addressLineSchema.required(),
    // address2: address2LineSchema,
    address2: apartmentSchema,
    // apartment: apartmentSchema,
    postal_code: postalCodeSchema.required(),
    city: citySchema.required(),
    // province: provinceSchema,
    state: stateSchema.required(),
    country_code: countryCodeSchema,
    country: countrySchema,
    phone: phoneSchema.required()
  }
  const schema = schemas[field]

  if (schema) {
    // eslint-disable-next-line no-useless-catch
    const result = await schema.validateAsync(value)
    return result
  } else {
    throw new Error('Address schema not found!')
  }
}

export async function validateAddress(address: CustomerAddress): Promise<any> {
  try {
    const options = { abortEarly: false }
    const result = await addressSchema.validateAsync(address, options)
    return result
  } catch (err: any) {
    if (err.details && err.details.length) {
      const addressErrors: any = {}
      err.details.forEach((e: any) => {
        // @ts-ignore
        addressErrors[e.context.key] = e.message
      })

      err.addressErrors = addressErrors
    }

    throw err
  }
}
