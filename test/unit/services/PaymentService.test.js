'use strict'
/* global describe, it */
const assert = require('assert')

describe('PaymentGenericService', () => {
  let PaymentGenericService, customerObj
  it('should exist', () => {
    assert(global.app.api.services['PaymentGenericService'])
    PaymentGenericService = global.app.services.PaymentGenericService
  })
  it('should authorize', (done) => {
    PaymentGenericService.authorize({
      amount: 100,
      payment_details: {
        gateway_token: '123'
      }
    })
      .then(transaction => {

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should capture', (done) => {
    PaymentGenericService.capture({
      authorization: '123'
    })
      .then(transaction => {

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should sale', (done) => {
    PaymentGenericService.sale({
      amount: 100,
      payment_details: {
        gateway_token: '123'
      }
    })
      .then(transaction => {

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should void', (done) => {
    PaymentGenericService.void({
      authorization: '123'
    })
      .then(transaction => {

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should refund', (done) => {
    PaymentGenericService.refund({
      authorization: '123'
    })
      .then(transaction => {

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should create customer', (done) => {
    PaymentGenericService.createCustomer({
      email: 'scott@awesome.com'
    })
      .then(customer => {
        customerObj = customer
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should get customer sources', (done) => {
    PaymentGenericService.getCustomerSources(customerObj)
      .then(sources => {

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should update customer', (done) => {
    PaymentGenericService.updateCustomer({
      email: 'scott@awesome.com',
      foreign_id: 1
    })
      .then(customer => {

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should create customer source', (done) => {
    PaymentGenericService.createCustomerSource({
      account_foreign_id: 1,
      gateway_token: 1
    })
      .then(source => {

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should update customer source', (done) => {
    PaymentGenericService.updateCustomerSource({
      account_foreign_id: 1,
      foreign_id: 1
    })
      .then(source => {

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should remove customer source', (done) => {
    PaymentGenericService.removeCustomerSource({
      account_foreign_id: 1,
      foreign_id: 1
    })
      .then(source => {

        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
