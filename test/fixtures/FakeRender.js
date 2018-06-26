'use strict'
// const _ = require('lodash')
module.exports = class FakeRenderService {
  constructor(options) {
    this.options = options
  }
  render(data) {
    return Promise.resolve({document: data})
  }
  renderSync(data) {
    return { document: data }
  }
}
