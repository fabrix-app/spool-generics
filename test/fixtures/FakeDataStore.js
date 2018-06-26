'use strict'
const _ = require('lodash')
module.exports = class FakeDataStoreProvider {
  constructor(options) {
    this.options = options
  }

  upload(buffer) {
    const res = {
      status: 'success',
      url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150'
    }
    return Promise.resolve(res)
  }
  uploadFile(file) {
    const res = {
      status: 'success',
      url: file.url
    }
    return Promise.resolve(res)
  }
  uploadFiles(files) {
    const res = _.map(files, file => {
      return {
        status: 'success',
        url: file.url
      }
    })
    return Promise.resolve(res)
  }
}
