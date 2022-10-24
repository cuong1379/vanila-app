export interface PayCreditcardRequest {
  /**  */
  card_number?: string;

  /**  */
  expiry_date?: string;

  /**  */
  cvc?: string;

  /**  */
  shipping?: any;
}

import Joi from 'joi'

function cardNumberValidator(value: string, helper: any) {
  const must16Digits = /^(4|22|23|24|25|26|27|51|52|53|54|55|30|35|6011|62)/
  const must15Digits = /^(34|37)/
  const must14Digits = /^(36)/
  const length = value.length

  if (must16Digits.test(value)) {
    return length !== 16 ? helper.message('"Card number" length must be 16 characters long') : value
  }
  if (must15Digits.test(value)) {
    return length !== 15 ? helper.message('"Card number" length must be 15 characters long') : value
  }
  if (must14Digits.test(value)) {
    return length !== 14 ? helper.message('"Card number" length must be 14 characters long') : value
  }
  return helper.message('"Card number" is invalid format')
}

function cardValidator(value: PayCreditcardRequest, helper: any) {
  const must3Digits = /^(4|22|23|24|25|26|27|51|52|53|54|55|30|35|36|6011|62)/
  const must4Digits = /^(34|37)/
  const cardNumber = value.card_number || ''
  const securityCode = value.cvc || ''
  const length = securityCode.length

  if (must3Digits.test(cardNumber)) {
    return length !== 3 ? helper.message('"Security code" length must be 3 characters long') : value
  }
  if (must4Digits.test(cardNumber)) {
    return length !== 4 ? helper.message('"Security code" length must be 4 characters long') : value
  }
  return helper.message('"Security code" is invalid format')
}

export const cardNumberSchema = Joi.string()
  .trim()
  .replace(' ', '')
  .label('Card number')
  .custom(cardNumberValidator)
export const expiryDateSchema = Joi.string().trim().replace('/', '').length(4).label('Expiry date')
export const securityCodeSchema = Joi.string().trim().min(3).max(4).label('Security code')

export const cardSchema = Joi.object<PayCreditcardRequest>({
  card_number: cardNumberSchema.required(),
  expiry_date: expiryDateSchema.required(),
  cvc: securityCodeSchema.required()
}).custom(cardValidator)

export async function validateCardField(field: keyof PayCreditcardRequest, value: any) {
  let schema = null
  switch (field) {
    case 'card_number':
      schema = cardNumberSchema.required()
      break
    case 'expiry_date':
      schema = expiryDateSchema.required()
      break
    case 'cvc':
      schema = securityCodeSchema.required()
      break
  }

  if (schema) {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await schema.validateAsync(value)
      return result
    } catch (err) {
      throw err
    }
  } else {
    throw new Error('Card schema not found!')
  }
}

export async function validateCard(card: PayCreditcardRequest): Promise<PayCreditcardRequest> {
  try {
    const options = { abortEarly: false }
    const result = await cardSchema.validateAsync(card, options)
    return result
  } catch (err: any) {
    if (err.details && err.details.length) {
      const cardErrors: PayCreditcardRequest = {}

      if (err.details[0]?.context?.key) {
        err.details.forEach((e: any) => {
          // @ts-ignore
          cardErrors[e.context.key] = e.message
        })
      } else {
        cardErrors.cvc = err.details[0].message
      }

      err.cardErrors = cardErrors
    }

    throw err
  }
}
