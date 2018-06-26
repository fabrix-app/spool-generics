
import * as joi from 'joi'

// TODO schema
export const toVoid = joi.object().keys({
  authorization: joi.any().required()
}).unknown()
