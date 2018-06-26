import { FabrixService as Service } from '@fabrix/fabrix/dist/common'
import { Validator } from '../../validator'

/**
 * @module GeolocationGenericService
 * @description Geolocation Generic Service
 */
export class GeolocationGenericService extends Service {
  /**
   * _init Initializes the Adapter
   * @param {Object} adapter
   * @private
   */
  _init(adapter) {
    const Adapter = adapter ? adapter.adapter : this.app.config.get('generics.geolocation_provider.adapter')
    return new Adapter(adapter ? adapter.options : this.app.config.get('generics.geolocation_provider.options'))
  }

  /**
   * Geo locate an address
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  locate(data, adapter) {
    return Validator.validateGeolocationProvider.locate(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.locate(data)
          .then(response => {
            return Validator.validateGeolocationProvider.locateSuccess(response)
          })
      })
  }
}
