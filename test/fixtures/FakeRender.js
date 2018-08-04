'use strict'
// const _ = require('lodash')
const Generic = require('../../dist/Generic').Generic
module.exports = class FakeRenderService extends Generic {
  render(data) {
    return Promise.resolve({document: data})
  }
  renderSync(data) {
    return { document: data }
  }
}
