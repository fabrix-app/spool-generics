
import * as joi from 'joi'

// TODO schema
export const captureSuccess =  joi.object().keys({
  kind: joi.string().valid('capture'),
  gateway_token: joi.string(),
  gateway_source: joi.any()
}).unknown()
