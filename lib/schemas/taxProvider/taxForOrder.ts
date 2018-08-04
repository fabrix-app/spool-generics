import * as joi from 'joi'

// TODO schema
export const taxForOrder = joi.object().keys({
  nexus_addresses: joi.array().items(
    joi.object().keys({
      product_ids: joi.array().items(joi.number()),
      country_code: joi.string().required(),
      province_code: joi.string().required(),
      postal_code: joi.string().required()
    }).unknown()
  ),
  to_address: joi.object().keys({
    country_code: joi.string().required(),
    province_code: joi.string().required(),
    postal_code: joi.string().required()
  }).unknown(),
  subtotal_price: joi.number().required(),
  total_shipping: joi.number().required(),
  line_items: joi.array().items(
    joi.object().keys({
      id: joi.number(),
      price: joi.number(),
      calculated_price: joi.number(),
      tax_code: joi.string()
    }).unknown()
  )
})
