
import * as joi from 'joi'

export const renderSuccess = joi.object().keys({
  document: joi.string().required(),
  meta: joi.object()
}).unknown()
