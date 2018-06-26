import { FabrixService as Service } from '@fabrix/fabrix/dist/common'
import { Validator } from '../../validator'

/**
 * @module ShippingService
 * @description Shipping Provider Generic
 */
export class ShippingGenericService extends Service {
  /**
   * _init Initializes the Adapter
   * @param {Object} adapter
   * @private
   */
  _init(adapter) {
    const Adapter = adapter ? adapter.adapter : this.app.config.get('generics.shipping_provider.adapter')
    return new Adapter(adapter ? adapter.options : this.app.config.get('generics.shipping_provider.options'))
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  validateAddress(data, adapter) {
    return Validator.validateShippingProvider.validateAddress(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.validateAddress(data)
          .then(_address => {
            return Validator.validateShippingProvider.validateAddressSuccess(_address)
          })
      })
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  getRate(data, adapter) {
    return Validator.validateShippingProvider.getRate(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.getRate(data)
          .then(_rate => {
            return Validator.validateShippingProvider.getRateSuccess(_rate)
          })
      })
  }
  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  getRates(data, adapter) {
    return Validator.validateShippingProvider.getRates(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.getRates(data)
          .then(rates => {
            return Validator.validateShippingProvider.getRatesSuccess(rates)
          })
      })
  }
}
