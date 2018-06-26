
import * as joi from 'joi'

export const createOrder = joi.object().keys({
  order_id: joi.number(),
  order_items: joi.array()
}).unknown()
