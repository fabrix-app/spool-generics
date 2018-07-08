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
    if (this.app.config.get('generics')) {
      const generics = this.app.config.get('generics')
      Object.keys(generics).forEach(generic => {
        if (generics[generic].hasOwnProperty('api')) {
          this.api = Object.assign(this.api, generics[generic].api)
        }
        if (generics[generic].hasOwnProperty('config')) {
          this.config = Object.assign(this.config, generics[generic].config)
        }
      })
    }
  }

  /**
   * Validates Configs
   */
  async validate () {
    const requiredSpools = ['router']
    const spools = Object.keys(this.app.spools)

    if (!spools.some(v => requiredSpools.indexOf(v) >= 0)) {
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
   * Configure
   */
  async configure () {
    return Promise.all([
      Generics.configure(this.app)
    ])
  }

  async unload() {
    return Promise.all([])
  }
}
