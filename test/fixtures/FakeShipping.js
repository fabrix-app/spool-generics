'use strict'
// const _ = require('lodash')
const Generic = require('../../dist/Generic').Generic
module.exports = class FakeShippingProvider extends Generic {
  validateAddress(data) {
    return Promise.resolve(data)
  }
  getRate(data) {
    return Promise.resolve({})
  }
  getRates(data) {
    return Promise.resolve([])
  }
}
