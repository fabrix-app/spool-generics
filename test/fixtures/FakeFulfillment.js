'use strict'
// const _ = require('lodash')
module.exports = class FakeFulfillmentProvider {
  constructor(options) {
    this.options = options
  }
  createOrder(data, adapter){
    return Promise.resolve({})
  }
  createOrders(data, adapter){
    return Promise.resolve([])
  }
  updateOrder(data){
    return Promise.resolve({})
  }
  updateOrders(data){
    return Promise.resolve([])
  }
  destroyOrder(data){
    return Promise.resolve({})
  }
  destroyOrders(data){
    return Promise.resolve([])
  }
  getOrder(data){
    return Promise.resolve({})
  }
  getOrders(data){
    return Promise.resolve([])
  }
  holdOrder(data){
    return Promise.resolve({})
  }
  holdOrders(data){
    return Promise.resolve([])
  }
}
