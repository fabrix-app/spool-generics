import { Generic } from '../Generic'

export class ShippingDefault extends Generic {
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
