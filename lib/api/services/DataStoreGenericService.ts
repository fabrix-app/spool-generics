import { FabrixService as Service } from '@fabrix/fabrix/dist/common'
import { Validator } from '../../validator'

/**
 * @module DataStoreService
 * @description Data Store Generic
 */
export class DataStoreGenericService extends Service {
  /**
   * _init Initializes the Adapter
   */
  private _init(generic) {
    const Adapter = generic ? generic.adapter : this.app.config.get('generics.data_store_provider.adapter')
    return new Adapter(generic ? generic.options : this.app.config.get('generics.data_store_provider.options'))
  }

  /**
   *
   * @param files
   * @param adapter
   * @returns {Promise}
   */
  upload(buffer, adapter) {

    return Validator.validateDataStoreProvider.upload(buffer)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.upload(buffer)
          .then(response => {
            return Validator.validateDataStoreProvider.uploadSuccess(response)
          })
      })
  }

  /**
   *
   * @param file
   * @param adapter
   * @returns {*}
   */
  uploadFile(file, adapter) {

    return Validator.validateDataStoreProvider.uploadFile(file)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.uploadFile(file)
          .then(response => {
            return Validator.validateDataStoreProvider.uploadFileSuccess(response)
          })
      })
  }

  /**
   *
   * @param files
   * @param adapter
   * @returns {*}
   */
  uploadFiles(files, adapter) {
    return Validator.validateDataStoreProvider.uploadFiles(files)
      .then(values => {
        adapter = this._init(adapter)
        return adapter.uploadFiles(files)
          .then(responses => {
            return Validator.validateDataStoreProvider.uploadFilesSuccess(responses)
          })
      })
  }
}

