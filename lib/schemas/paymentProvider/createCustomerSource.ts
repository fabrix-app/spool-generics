
import * as joi from 'joi'

// TODO schema
export const createCustomerSource =  joi.object().keys({
  account_foreign_id: joi.any().required(),
  gateway_token: joi.any().required()
})
