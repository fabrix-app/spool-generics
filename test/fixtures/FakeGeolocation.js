'use strict'
// const _ = require('lodash')
module.exports = class FakeGeolocationProvider {
  constructor(options) {
    this.options = options
  }

  locate(data) {
    return Promise.resolve({
      latitude: 0.000000,
      longitude: 0.000000
    })
  }
}
