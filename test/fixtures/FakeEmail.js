'use strict'
// const _ = require('lodash')
const Generic = require('../../dist/Generic').Generic
module.exports = class FakeEmailProvider extends Generic {
  send(data) {
    return Promise.resolve([])
  }

  sendTemplate(data) {
    return Promise.resolve([])
  }
}
