import { FabrixService as Service } from '@fabrix/fabrix/dist/common'
// import { Validator } from '../../validator'

/**
 * @module ImageGenericService
 * @description Image Generic Service
 */
export class ImageGenericService extends Service {
  /**
   * _init Initializes the Adapter
   * @param {Object} adapter
   * @private
   */
  _init(adapter) {
    const Adapter = adapter ? adapter.adapter : this.app.config.get('generics.image_processor.adapter')
    return new Adapter(adapter ? adapter.options : this.app.config.get('generics.image_processor.options'))
  }
}

