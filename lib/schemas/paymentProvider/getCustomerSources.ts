
import * as joi from 'joi'

export const getCustomerSources =  joi.object().keys({
  foreign_key: joi.any(),
  foreign_id: joi.any().required(),
}).unknown()
