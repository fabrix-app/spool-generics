
import * as joi from 'joi'

// TODO schema
export const uploadFile = joi.object().keys({
  src: joi.string().required(),
  url: joi.string()
}).unknown()
