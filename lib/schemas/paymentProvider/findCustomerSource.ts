
import * as joi from 'joi'

export const findCustomerSource =  joi.object().keys({
  account_foreign_key: joi.any(),
  account_foreign_id: joi.any().required(),
  foreign_key: joi.any(),
  foreign_id: joi.any().required(),
}).unknown()
