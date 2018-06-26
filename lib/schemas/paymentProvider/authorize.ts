
import * as joi from 'joi'

// TODO schema
export const authorize = joi.object().keys({
  amount: joi.number().required(),
  payment_details: joi.object().keys({
    gateway_token: joi.any(),
    source: joi.any(),
    gateway: joi.string()
  }).required()
}).unknown()
