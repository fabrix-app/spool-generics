
import * as joi from 'joi'

// TODO schema
export const refund = joi.object().keys({
  authorization: joi.any().required()
}).unknown()
