
import * as joi from 'joi'

// TODO schema
export const capture = joi.object().keys({
  authorization: joi.any().required()
}).unknown()
