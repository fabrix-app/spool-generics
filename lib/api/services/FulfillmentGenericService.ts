import { FabrixService as Service } from '@fabrix/fabrix/dist/common'
import { Validator } from '../../validator'


/**
 * @module FulfillmentService
 * @description Fulfillment Provider Generic
 */
export class FulfillmentGenericService extends Service {
  /**
   * _init Initializes the Adapter
   */
  private _init(generic) {
    const Adapter = generic ? generic.adapter : this.app.config.get('generics.fulfillment_provider.adapter')
    return new Adapter(this.app, generic ? generic.config : this.app.config.get('generics.fulfillment_provider.config'))
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  createOrder(data, adapter) {
    return Validator.validateFulfillmentProvider.createOrder(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.createOrder(data)
          .then(order => {
            return Validator.validateFulfillmentProvider.createOrderSuccess(order)
          })
      })
  }
  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  createOrders(data, adapter) {
    return Validator.validateFulfillmentProvider.createOrders(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.createOrders(data)
          .then(orders => {
            return Validator.validateFulfillmentProvider.createOrdersSuccess(orders)
          })
      })
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  updateOrder(data, adapter) {
    return Validator.validateFulfillmentProvider.updateOrder(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.updateOrder(data)
          .then(order => {
            return Validator.validateFulfillmentProvider.updateOrderSuccess(order)
          })
      })
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  updateOrders(data, adapter) {
    return Validator.validateFulfillmentProvider.updateOrders(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.updateOrders(data)
          .then(orders => {
            return Validator.validateFulfillmentProvider.updateOrdersSuccess(orders)
          })
      })
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  destroyOrder(data, adapter) {
    return Validator.validateFulfillmentProvider.destroyOrder(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.destroyOrder(data)
          .then(order => {
            return Validator.validateFulfillmentProvider.destroyOrderSuccess(order)
          })
      })
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  destroyOrders(data, adapter) {
    return Validator.validateFulfillmentProvider.destroyOrders(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.destroyOrders(data)
          .then(orders => {
            return Validator.validateFulfillmentProvider.destroyOrdersSuccess(orders)
          })
      })
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  getOrder(data, adapter) {
    return Validator.validateFulfillmentProvider.getOrder(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.getOrder(data)
          .then(order => {
            return Validator.validateFulfillmentProvider.getOrderSuccess(order)
          })
      })
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  getOrders(data, adapter) {
    return Validator.validateFulfillmentProvider.getOrders(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.getOrders(data)
          .then(orders => {
            return Validator.validateFulfillmentProvider.getOrderSuccess(orders)
          })
      })
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  holdOrder(data, adapter) {
    return Validator.validateFulfillmentProvider.holdOrder(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.holdOrder(data)
          .then(order => {
            return Validator.validateFulfillmentProvider.holdOrderSuccess(order)
          })
      })
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  holdOrders(data, adapter) {
    return Validator.validateFulfillmentProvider.holdOrders(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.holdOrders(data)
          .then(orders => {
            return Validator.validateFulfillmentProvider.holdOrdersSuccess(orders)
          })
      })
  }
}

