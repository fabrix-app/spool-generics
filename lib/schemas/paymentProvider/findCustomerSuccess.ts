
import * as joi from 'joi'

export const findCustomerSuccess = joi.object().keys({
  gateway: joi.string().required(),
  foreign_key: joi.any().required(),
  foreign_id: joi.any().required(),
  data: joi.object()
}).unknown()
