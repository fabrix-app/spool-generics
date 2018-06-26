
import * as joi from 'joi'

// TODO schema
export const uploadFileSuccess = joi.object().keys({
  status: joi.string().required().valid(['pending', 'failure', 'success']),
  url: joi.string().required(),
  failure_message: joi.string(),
  file_details: joi.object()
}).unknown()
