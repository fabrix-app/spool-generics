'use strict'
// const _ = require('lodash')
module.exports = class FakeEmailProvider {
  constructor(config) {
    this.config = config
  }
  send(data) {
    return Promise.resolve([])
  }

  sendTemplate(data) {
    return Promise.resolve([])
  }
}
