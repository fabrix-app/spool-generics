
import * as joi from 'joi'

// TODO schema
export const uploadSuccess = joi.object().keys({
  status: joi.string().required(),
  url: joi.string().required(),
  file_details: joi.object()
}).unknown()
