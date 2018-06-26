
import * as joi from 'joi'

export const findCustomerSourceSuccess = joi.object().keys({
  gateway: joi.string().required(),
  account_foreign_key: joi.any().required(),
  account_foreign_id: joi.any().required(),
  foreign_key: joi.any().required(),
  foreign_id: joi.any().required(),
  payment_details: joi.object()
}).unknown()
