import { FabrixService as Service } from '@fabrix/fabrix/dist/common'
import { Validator } from '../../validator'

/**
 * @module RenderGenericService
 * @description Render Generic Service
 */
export class RenderGenericService extends Service {
  /**
   * _init Initializes the Adapter
   * @param {Object} adapter
   * @private
   */
  _init(adapter) {
    const Adapter = adapter ? adapter.adapter : this.app.config.get('generics.render_service.adapter')
    return new Adapter(adapter ? adapter.options : this.app.config.get('generics.render_service.options'))
  }
  /**
   *
   * @param {Object} data
   * @param {Object} adapter
   * @returns {Promise<{document: string, meta:Object}>}
   */
  render(data, adapter) {
    return Validator.validateRenderService.render(data)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.render(data)
          .then(docObj => {
            return Validator.validateRenderService.renderSuccess(docObj)
          })
      })
  }
  renderSync(data, adapter) {
    adapter = this._init(adapter)
    return adapter.renderSync(data)
  }
}
