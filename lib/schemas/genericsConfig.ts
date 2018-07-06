import * as joi from 'joi'

export const genericsConfig = joi.object().keys({
  email_provider: joi.object().keys({
    adapter: joi.any().required(),
    config: joi.object(),
    api: joi.any()
  }).unknown(),
  payment_processor: joi.object().keys({
    adapter: joi.any().required(),
    config: joi.object(),
    api: joi.any()
  }).unknown(),
  tax_provider: joi.object().keys({
    adapter: joi.any().required(),
    config: joi.object(),
    api: joi.any()
  }).unknown(),
  shipping_provider: joi.object().keys({
    adapter: joi.any().required(),
    config: joi.object(),
    api: joi.any()
  }).unknown(),
  fulfillment_provider: joi.object().keys({
    adapter: joi.any().required(),
    config: joi.object(),
    api: joi.any()
  }).unknown(),
  data_store_provider: joi.object().keys({
    adapter: joi.any().required(),
    config: joi.object(),
    api: joi.any()
  }).unknown(),
  geolocation_provider: joi.object().keys({
    adapter: joi.any().required(),
    config: joi.object(),
    api: joi.any()
  }).unknown(),
  image_provider: joi.object().keys({
    adapter: joi.any().required(),
    config: joi.object(),
    api: joi.any()
  }).unknown(),
  render_service: joi.object().keys({
    adapter: joi.any().required(),
    config: joi.object(),
    api: joi.any()
  }).unknown()
}).unknown()
