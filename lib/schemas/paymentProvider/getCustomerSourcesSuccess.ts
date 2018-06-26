
import * as joi from 'joi'

export const getCustomerSourcesSuccess = joi.object().keys({
  gateway: joi.string().required(),
  foreign_key: joi.any().required(),
  foreign_id: joi.any().required(),
  data: joi.object(),
  sources: joi.array().items(joi.object().keys({
    gateway: joi.string().required(),
    account_foreign_key: joi.any().required(),
    account_foreign_id: joi.any().required(),
    foreign_key: joi.any().required(),
    foreign_id: joi.any().required(),
    payment_details: joi.object()
  }).unknown())
}).unknown()
