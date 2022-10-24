import Joi from 'joi'

type IOrderFields = 'email' | 'order'
interface IBaseOrder {
  email?: string
  order?: string
}

function validateOrderNumber(value: string, helper: any) {
  const orderNumberRegex = /^#?[0-9]+-[0-9]+$/

  return !orderNumberRegex.test(value.trim())
    ? helper.message('"Order number" is not valid')
    : value
}

const emailSchema = Joi.string()
  .trim()
  .email({ tlds: { allow: false } })
  .label('Email')

const orderNumberSchema = Joi.string().trim().label('Order number').custom(validateOrderNumber)

const orderSchema = Joi.object({
  email: emailSchema.required(),
  order: orderNumberSchema.required()
})

export async function validateOrderField(field: IOrderFields, value: any) {
  const orderSchema = {
    email: emailSchema.required(),
    order: orderNumberSchema.required()
  }
  const schema = orderSchema[field]

  if (schema) {
    return await schema.validateAsync(value)
  } else {
    throw new Error('Order schema not found!')
  }
}

export async function validateContact(order: any) {
  try {
    const options = { abortEarly: false, allowUnknown: true }
    return await orderSchema.validateAsync(order, options)
  } catch (err: any) {
    if (err.details && err.details.length) {
      const orderError: IBaseOrder = {}
      err.details.forEach((e: any) => {
        // @ts-ignore
        orderError[e.context.key] = e.message
      })

      err.orderError = orderError
    }

    throw err
  }
}
