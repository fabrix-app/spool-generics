import { Spool } from '@fabrix/fabrix/dist/common'
import { Generics } from './generics'

import { Validator } from './validator'

import * as config from './config/index'
import * as pkg from '../package.json'
import * as api  from './api/index'

export class GenericsSpool extends Spool {

  constructor(app) {
    super(app, {
      config: config,
      pkg: pkg,
      api: api
    })
  }

  /**
   * Validates Configs
   */
  async validate () {
    const requiredSpools = ['router']
    const spools = Object.keys(this.app.config.get('main.spools'))

    if (requiredSpools.some(v => spools.indexOf(v) >= 0)) {
      return Promise.reject(new Error(`spool-generics requires spools: ${ requiredSpools.join(', ') }!`))
    }

    if (!this.app.config.get('generics')) {
      return Promise.reject(new Error('No configuration found at config.generics!'))
    }

    return Promise.all([
      Validator.validateGenericsConfig(this.app.config.get('generics'))
    ])
  }

  /**
   * Adds generics' APIs to fabrix api, Adds generics' routes to app.routes
   */
  configure () {
    this.app.api.generics = this.app.api.generics || {}

    return Promise.all([
      Generics.configure(this.app),
      Generics.loadGenericApis(this.app),
      Generics.addRoutes(this.app)
    ])
  }
}
