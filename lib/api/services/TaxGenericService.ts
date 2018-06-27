import { FabrixService as Service } from '@fabrix/fabrix/dist/common'
import { Validator } from '../../validator'

/**
 * @module TaxService
 * @description Tax Provider Generic
 */
export class TaxGenericService extends Service {
  /**
   * _init Initializes the Adapter
   */
  private _init(generic) {
    const Adapter = generic ? generic.adapter : this.app.config.get('generics.tax_provider.adapter')
    return new Adapter(generic ? generic.options : this.app.config.get('generics.tax_provider.options'))
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  getRate(data, adapter) {
    return Validator.validateTaxProvider.getRate(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.getRate(data)
          .then(rate => {
            return Validator.validateTaxProvider.getRateSuccess(rate)
          })
      })
  }
  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  taxForOrder(data, adapter) {
    return Validator.validateTaxProvider.taxForOrder(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.taxForOrder(data)
          .then(rate => {
            return Validator.validateTaxProvider.taxForOrderSuccess(rate)
          })
      })
  }
}
