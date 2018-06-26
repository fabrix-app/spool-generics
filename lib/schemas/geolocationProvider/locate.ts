
import * as joi from 'joi'

export const locate = joi.object().keys({
  prefix: [joi.string().allow('').optional(), joi.allow(null)],
  first_name: [joi.string().allow('').optional(), joi.allow(null)],
  last_name: [joi.string().allow('').optional(), joi.allow(null)],
  suffix: [joi.string().allow('').optional(), joi.allow(null)],
  address_1: [joi.string().allow('').optional(), joi.allow(null)],
  address_2: [joi.string().allow('').optional(), joi.allow(null)],
  address_3: [joi.string().allow('').optional(), joi.allow(null)],
  company: [joi.string().allow('').optional(), joi.allow(null)],
  city: joi.string(),
  province: joi.string(),
  province_code: joi.string(),
  country: joi.string(),
  country_code: joi.string(),
  country_name: joi.string(),
  postal_code: joi.string()
}).unknown()
