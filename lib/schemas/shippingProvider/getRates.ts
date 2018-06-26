
import * as joi from 'joi'

export const getRates = joi.object().keys({
  origin: joi.object(),
  destination: joi.object(),
  items: joi.array(),
  currency: joi.string()
})
