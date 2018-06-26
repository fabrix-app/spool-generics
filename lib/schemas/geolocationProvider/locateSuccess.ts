
import * as joi from 'joi'

// TODO schema
export const locateSuccess = joi.object().keys({
  formatted_address: joi.string(),
  latitude: joi.number(),
  longitude: joi.number()
}).unknown()
