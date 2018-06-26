
import * as joi from 'joi'

export const createOrders = joi.array().items(joi.object().keys({
  order_id: joi.number(),
  order_items: joi.array()
}).unknown())
