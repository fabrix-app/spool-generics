
import * as joi from 'joi'

// TODO schema
export const taxForOrderSuccess = joi.object().keys({
  total_taxes: joi.number(),
  tax_lines: joi.array().items(
    joi.object().keys({
      name: joi.string(),
      price: joi.number()
    }).unknown()
  ),
  line_items: joi.array().items(
    joi.object().keys({
      total_taxes: joi.number(),
      tax_lines: joi.array().items(
        joi.object().keys({
          name: joi.string(),
          price: joi.number()
        })
      )
    }).unknown()
  )
}).unknown()
