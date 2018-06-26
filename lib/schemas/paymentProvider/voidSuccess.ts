
import * as joi from 'joi'

// TODO schema
export const toVoidSuccess =  joi.object().keys({
  kind: joi.string().valid('void'),
  gateway_token: joi.string(),
  gateway_source: joi.any()
}).unknown()
