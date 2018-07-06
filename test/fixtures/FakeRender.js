'use strict'
// const _ = require('lodash')
module.exports = class FakeRenderService {
  constructor(config) {
    this.config = config
  }
  render(data) {
    return Promise.resolve({document: data})
  }
  renderSync(data) {
    return { document: data }
  }
}
