'use strict'
/* global describe, it */
const assert = require('assert')

describe('ShippingGenericService', () => {
  let ShippingGenericService
  it('should exist', () => {
    assert(global.app.api.services['ShippingGenericService'])
    ShippingGenericService = global.app.services.ShippingGenericService
  })
  it('should validate Address', (done) => {
    ShippingGenericService.validateAddress({})
      .then(address => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should get a rate', (done) => {
    ShippingGenericService.getRate({})
      .then(rate => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should get rates', (done) => {
    ShippingGenericService.getRates({})
      .then(rates => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
