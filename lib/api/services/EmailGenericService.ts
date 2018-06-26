import { FabrixService as Service } from '@fabrix/fabrix/dist/common'
import { Validator } from '../../validator'

/**
 * @module EmailService
 * @description Email Generic
 */
export class EmailGenericService extends Service {
  /**
   * _init Initializes the Adapter
   * @param {Object} adapter
   * @private
   */
  _init(adapter) {
    const Adapter = adapter ? adapter.adapter : this.app.config.get('generics.email_provider.adapter')
    return new Adapter(adapter ? adapter.options : this.app.config.get('generics.email_provider.options'))
  }

  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  send(data, adapter) {
    return Validator.validateEmailProvider.send(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.send(data)
          .then(response => {
            return Validator.validateEmailProvider.sendSuccess(response)
          })
      })
  }
  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise}
   */
  sendTemplate(data, adapter) {
    return Validator.validateEmailProvider.sendTemplate(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.sendTemplate(data)
          .then(response => {
            return Validator.validateEmailProvider.sendTemplateSuccess(response)
          })
      })
  }
}

