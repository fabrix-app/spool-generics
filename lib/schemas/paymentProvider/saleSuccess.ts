
import * as joi from 'joi'

// TODO schema
export const saleSuccess =  joi.object().keys({
  kind: joi.string().valid('sale'),
  gateway_token: joi.string(),
  gateway_source: joi.any()
}).unknown()
