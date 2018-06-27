import { FabrixService as Service } from '@fabrix/fabrix/dist/common'
// import { Validator } from '../../validator'

/**
 * @module ImageGenericService
 * @description Image Generic Service
 */
export class ImageGenericService extends Service {
  /**
   * _init Initializes the Adapter
   */
  private _init(generic) {
    const Adapter = generic ? generic.adapter : this.app.config.get('generics.image_processor.adapter')
    return new Adapter(generic ? generic.options : this.app.config.get('generics.image_processor.options'))
  }
}

