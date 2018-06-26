
import * as joi from 'joi'

export const updateCustomerSuccess = joi.object().keys({
  gateway: joi.string(),
  account_foreign_key: joi.any(),
  account_foreign_id: joi.any(),
  foreign_key: joi.any(),
  foreign_id: joi.any(),
  data: joi.object()
}).unknown()
