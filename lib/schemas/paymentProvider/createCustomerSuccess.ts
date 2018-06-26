
import * as joi from 'joi'

// TODO schema
export const createCustomerSuccess =  joi.object().keys({
  gateway: joi.string(),
  foreign_key: joi.any(),
  foreign_id: joi.any(),
  data: joi.object()
}).unknown()
