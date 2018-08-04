'use strict'
// const _ = require('lodash')
const Generic = require('../../dist/Generic').Generic
module.exports = class FakeGeolocationProvider extends Generic {
  locate(data) {
    return Promise.resolve({
      latitude: 0.000000,
      longitude: 0.000000
    })
  }
}
