
import * as joi from 'joi'

// TODO schema
export const authorizeSuccess = joi.object().keys({
  kind: joi.string().valid('authorize'),
  gateway_token: joi.string(),
  gateway_source: joi.any()
}).unknown()
