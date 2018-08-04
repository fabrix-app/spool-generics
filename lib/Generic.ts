// tslint:disable no-unused-expression

import { EventEmitter } from 'events'
import { FabrixApp } from '@fabrix/fabrix'
import { FabrixGeneric } from '@fabrix/fabrix/dist/common'

export class Generic extends FabrixGeneric {
  private _app: FabrixApp
  private _config: {[key: string]: any}

  constructor (app: FabrixApp, config) {
    super(app)
    if (!(app instanceof EventEmitter)) {
      throw new Error('The "app" argument must be of type EventEmitter')
    }
    this._app = app
    this._config = config
    this.app.emit(`generic:${this.id}:constructed`, this)
  }

  get __ () {
    if (this.app.__) {
      return this.app.__
    }
    else {
      throw new Error('Missing spool-i18n, make sure it is included in app.main.spools')
    }
  }

  // @enumerable(false)
  // @writable(false)
  get app(): FabrixApp {
    return this._app
  }

  /**
   * Return a reference to the Fabrix logger
   */
  get log (): FabrixApp['log'] {
    return this.app.log
  }

  /**
   * Return a reference to the Adapter's config.
   */
  get config () {
    return this._config
  }

  /**
   * Sets Adapter's config
   */
  set config (config) {
    this._config = config
  }


  /**
   * Return the id of this generic
   */
  get id () {
    return this.constructor.name.replace(/(\w+)Generic/, '$1').toLowerCase()
  }

  /**
   * Get's the name of the generic class
   */
  get name() {
    return this.constructor.name
  }
}
