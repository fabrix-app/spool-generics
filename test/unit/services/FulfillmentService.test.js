'use strict'
/* global describe, it */
const assert = require('assert')

describe('FulfillmentGenericService', () => {
  let FulfillmentGenericService
  it('should exist', () => {
    assert(global.app.api.services['FulfillmentGenericService'])
    FulfillmentGenericService = global.app.services.FulfillmentGenericService
  })
  it('should create an order', (done) => {
    FulfillmentGenericService.createOrder({})
      .then(orders => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should create orders', (done) => {
    FulfillmentGenericService.createOrders([])
      .then(orders => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should update an order', (done) => {
    FulfillmentGenericService.updateOrder({})
      .then(orders => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should update orders', (done) => {
    FulfillmentGenericService.updateOrders([])
      .then(orders => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should destroy an order', (done) => {
    FulfillmentGenericService.destroyOrder({})
      .then(orders => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should destroy orders', (done) => {
    FulfillmentGenericService.destroyOrders([])
      .then(orders => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should hold an order', (done) => {
    FulfillmentGenericService.holdOrder({})
      .then(orders => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should hold orders', (done) => {
    FulfillmentGenericService.holdOrders([])
      .then(orders => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
