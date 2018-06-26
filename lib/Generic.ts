// tslint:disable no-unused-expression

import { EventEmitter } from 'events'
import { FabrixApp } from '@fabrix/fabrix'
import { FabrixGeneric } from '@fabrix/fabrix/dist/common'

export class Generic extends FabrixGeneric {
  private _app: FabrixApp

  constructor (app: FabrixApp) {
    super(app)

    if (!(app instanceof EventEmitter)) {
      throw new Error('The "app" argument must be of type EventEmitter')
    }
    this._app = app
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
   * Return a reference to the Fabrix configuration map.
   */
  get config (): FabrixApp['config'] {
    return this.app.config
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
