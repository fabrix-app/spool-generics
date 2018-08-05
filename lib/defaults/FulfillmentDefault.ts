import { Generic } from '../Generic'

export class FulfillmentDefault extends Generic {
  createOrder(data) {
    return Promise.resolve({})
  }
  createOrders(data) {
    return Promise.resolve([])
  }
  updateOrder(data) {
    return Promise.resolve({})
  }
  updateOrders(data) {
    return Promise.resolve([])
  }
  destroyOrder(data) {
    return Promise.resolve({})
  }
  destroyOrders(data) {
    return Promise.resolve([])
  }
  getOrder(data) {
    return Promise.resolve({})
  }
  getOrders(data) {
    return Promise.resolve([])
  }
  holdOrder(data) {
    return Promise.resolve({})
  }
  holdOrders(data) {
    return Promise.resolve([])
  }
}
