
import * as joi from 'joi'

// TODO schema
export const refundSuccess =  joi.object().keys({
  kind: joi.string().valid('refund'),
  gateway_token: joi.string()
}).unknown()
