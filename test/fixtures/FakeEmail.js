'use strict'
// const _ = require('lodash')
module.exports = class FakeEmailProvider {
  constructor(options) {
    this.options = options
  }
  send(data) {
    return Promise.resolve([])
  }

  sendTemplate(data) {
    return Promise.resolve([])
  }
}
