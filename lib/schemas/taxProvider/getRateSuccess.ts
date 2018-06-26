
import * as joi from 'joi'

// TODO schema
export const getRateSuccess =  joi.object().keys({
  amount: joi.number().required(),
  rate: joi.number().required(),
  title: joi.string().required(),
  tax_details: joi.object()
}).unknown()
