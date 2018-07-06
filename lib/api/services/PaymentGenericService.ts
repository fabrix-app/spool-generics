import { FabrixService as Service } from '@fabrix/fabrix/dist/common'
import { Validator } from '../../validator'

/**
 * @module PaymentService
 * @description Payment Processor Generic
 */
export class PaymentGenericService extends Service {
  /**
   * _init Initializes the Adapter
   */
  private _init(generic) {
    const Adapter = generic ? generic.adapter : this.app.config.get('generics.payment_processor.adapter')
    return new Adapter(generic ? generic.config : this.app.config.get('generics.payment_processor.config'))
  }

  /**
   * authorization is the reserving of money that the customer has agreed to pay.
   * @param {Object} transaction
   * @param {Object} adapter
   * @returns {Promise}
   */
  authorize(transaction, adapter) {
    return Validator.validatePaymentProvider.authorize(transaction)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.authorize(transaction)
          .then(_transaction => {
            return Validator.validatePaymentProvider.authorizeSuccess(_transaction)
          })
      })
  }

  /**
   * capture is the transfer of the money that was reserved during the authorization stage.
   * @param {Object} transaction
   * @param {Object} adapter
   * @returns {Promise}
   */
  capture(transaction, adapter) {
    return Validator.validatePaymentProvider.capture(transaction)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.capture(transaction)
          .then(_transaction => {
            return Validator.validatePaymentProvider.captureSuccess(_transaction)
          })
      })
  }

  /**
   * sale is a combination of authorization and capture, performed in one step.
   * @param {Object} transaction
   * @param {Object} adapter
   * @returns {Promise}
   */
  sale(transaction, adapter) {
    return Validator.validatePaymentProvider.sale(transaction)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.sale(transaction)
          .then(_transaction => {
            return Validator.validatePaymentProvider.saleSuccess(_transaction)
          })
      })
  }
  /**
   * void is the cancellation of a pending authorization or capture.
   * @param {Object} transaction
   * @param {Object} adapter
   * @returns {Promise}
   */
  void(transaction, adapter) {
    return Validator.validatePaymentProvider.void(transaction)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.void(transaction)
          .then(_transaction => {
            return Validator.validatePaymentProvider.voidSuccess(_transaction)
          })
      })
  }
  /**
   * refund is the partial or full refund of the captured money to the sale.
   * @param {Object} transaction
   * @param {Object} adapter
   * @returns {Promise}
   */
  refund(transaction, adapter) {
    return Validator.validatePaymentProvider.refund(transaction)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.refund(transaction)
          .then(_transaction => {
            return Validator.validatePaymentProvider.refundSuccess(_transaction)
          })
      })
  }

  /**
   *
   * @param customer
   * @param adapter
   * @returns {*|Promise.<TResult>}
   */
  createCustomer(customer, adapter) {
    return Validator.validatePaymentProvider.createCustomer(customer)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.createCustomer(customer)
          .then(_customer => {
            return Validator.validatePaymentProvider.createCustomerSuccess(_customer)
          })
      })
  }

  /**
   *
   * @param customer
   * @param adapter
   * @returns {*|Promise.<TResult>}
   */
  findCustomer(customer, adapter) {
    return Validator.validatePaymentProvider.findCustomer(customer)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.findCustomer(customer)
          .then(_customer => {
            return Validator.validatePaymentProvider.findCustomerSuccess(_customer)
          })
      })
  }

  /**
   *
   * @param customer
   * @param adapter
   * @returns {*|Promise.<TResult>}
   */
  updateCustomer(customer, adapter) {
    return Validator.validatePaymentProvider.updateCustomer(customer)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.updateCustomer(customer)
          .then(_customer => {
            return Validator.validatePaymentProvider.updateCustomerSuccess(_customer)
          })
      })
  }

  /**
   *
   * @param customer
   * @param adapter
   * @returns {*|Promise.<TResult>}
   */
  getCustomerSources(customer, adapter) {
    return Validator.validatePaymentProvider.getCustomerSources(customer)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.getCustomerSources(customer)
          .then(_customer => {
            return Validator.validatePaymentProvider.getCustomerSourcesSuccess(_customer)
          })
      })
  }

  /**
   *
   * @param customer
   * @param adapter
   * @returns {*|Promise.<TResult>}
   */
  createCustomerSource(source, adapter) {
    return Validator.validatePaymentProvider.createCustomerSource(source)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.createCustomerSource(source)
          .then(_source => {
            return Validator.validatePaymentProvider.createCustomerSourceSuccess(_source)
          })
      })
  }
  /**
   *
   * @param customer
   * @param adapter
   * @returns {*|Promise.<TResult>}
   */
  findCustomerSource(source, adapter) {
    return Validator.validatePaymentProvider.findCustomerSource(source)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.findCustomerSource(source)
          .then(_source => {
            return Validator.validatePaymentProvider.findCustomerSourceSuccess(_source)
          })
      })
  }

  /**
   *
   * @param source
   * @param adapter
   * @returns {*|Promise.<TResult>}
   */
  updateCustomerSource(source, adapter) {
    return Validator.validatePaymentProvider.updateCustomerSource(source)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.updateCustomerSource(source)
          .then(_source => {
            return Validator.validatePaymentProvider.updateCustomerSourceSuccess(_source)
          })
      })
  }

  /**
   *
   * @param source
   * @param adapter
   * @returns {*|Promise.<TResult>}
   */
  removeCustomerSource(source, adapter) {
    return Validator.validatePaymentProvider.removeCustomerSource(source)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.removeCustomerSource(source)
          .then(_source => {
            return Validator.validatePaymentProvider.removeCustomerSourceSuccess(_source)
          })
      })
  }
}

