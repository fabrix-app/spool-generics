
import * as joi from 'joi'

// TODO schema
export const sendSuccess = joi.array().items(joi.object().keys({
  email: joi.string().required(),
  status: joi.string().required()
}).unknown())
