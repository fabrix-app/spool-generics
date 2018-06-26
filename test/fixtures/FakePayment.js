'use strict'
const shortid = require('shortid')
const _ = require('lodash')
module.exports = class FakePaymentProcessor {
  constructor(options) {
    this.options = options
  }
  authorize(transaction) {

    transaction.kind = 'authorize'
    transaction.authorization = 'abc123'

    if (transaction.payment_details.length == 0) {
      transaction.error_code = 'processing_error'
      transaction.status = 'failure'
    }
    else {
      transaction.status = 'success'
      transaction.payment_details.avs_result_code = '123'
      transaction.payment_details.credit_card_iin = '123'
      transaction.payment_details.credit_card_company = 'visa'
      transaction.payment_details.credit_card_number = '**** **** **** 1234'
      transaction.payment_details.cvv_result_code = 'Y'
    }
    return Promise.resolve(transaction)
  }
  capture(transaction) {
    transaction.status = 'success'
    transaction.kind = 'capture'
    return Promise.resolve(transaction)
  }
  sale(transaction) {
    transaction.authorization = 'abc123'
    transaction.status = 'success'
    transaction.kind = 'sale'
    transaction.payment_details.avs_result_code = '123'
    transaction.payment_details.credit_card_iin = '123'
    transaction.payment_details.credit_card_company = 'visa'
    transaction.payment_details.credit_card_number = '**** **** **** 1234'
    transaction.payment_details.cvv_result_code = 'Y'

    return Promise.resolve(transaction)
  }
  void(transaction) {
    transaction.kind = 'void'
    transaction.status = 'success'
    return Promise.resolve(transaction)
  }
  refund(transaction) {
    transaction.kind = 'refund'
    transaction.status = 'success'
    return Promise.resolve(transaction)
  }
  createCustomer(customer) {
    const res = {
      gateway: 'payment_processor',
      foreign_key: 'customer',
      foreign_id: 'customer_' + shortid.generate(),
      data: customer
    }
    return Promise.resolve(res)
  }
  createCustomerSource(source) {
    const res = {
      gateway: 'payment_processor',
      account_foreign_key: 'customer',
      account_foreign_id: source.account_foreign_id,
      foreign_key: 'customer',
      foreign_id: 'source_' + shortid.generate(),
      payment_details: source
    }
    return Promise.resolve(res)
  }
  findCustomer(customer) {
    const res = {
      gateway: 'payment_processor',
      foreign_key: 'customer',
      foreign_id: customer.foreign_id,
      data: customer
    }
    return Promise.resolve(res)
  }
  findCustomerSource(source) {
    const res = {
      gateway: 'payment_processor',
      account_foreign_key: 'customer',
      account_foreign_id: source.account_foreign_id,
      foreign_key: 'source',
      foreign_id: source.foreign_key,
      payment_details: source
    }
    return Promise.resolve(res)
  }
  getCustomerSources(customer) {
    const res = {
      gateway: 'payment_processor',
      foreign_key: 'customer',
      foreign_id: customer.foreign_id,
      data: customer,
      sources: [
        {
          gateway: 'payment_processor',
          account_foreign_key: 'customer',
          account_foreign_id: customer.foreign_id,
          foreign_key: 'source',
          foreign_id: 'source_' + shortid.generate(),
          payment_details: {}
        }
      ]
    }
    return Promise.resolve(res)
  }
  updateCustomer(customer) {
    const res = {
      gateway: 'payment_processor',
      foreign_key: 'customer',
      foreign_id: customer.id,
      data: customer
    }
    return Promise.resolve(res)
  }
  updateCustomerSource(source) {
    const res = {
      gateway: 'payment_processor',
      account_foreign_id: source.account_foreign_id,
      account_foreign_key: 'customer',
      foreign_key: 'source',
      foreign_id: source.foreign_id,
      payment_details: source
    }
    return Promise.resolve(res)
  }
  removeCustomerSource(source) {
    const res = {
      gateway: 'payment_processor',
      account_foreign_id: source.account_foreign_id,
      account_foreign_key: 'customer',
      foreign_key: 'source',
      foreign_id: source.foreign_id,
      payment_details: source
    }
    return Promise.resolve(res)
  }
}
