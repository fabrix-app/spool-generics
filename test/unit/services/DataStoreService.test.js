'use strict'
/* global describe, it */
const assert = require('assert')

describe('DataStoreGenericService', () => {
  let DataStoreGenericService
  it('should exist', () => {
    assert(global.app.api.services['DataStoreGenericService'])
    DataStoreGenericService = global.app.services.DataStoreGenericService
  })
  it('should upload a buffer', (done) => {
    DataStoreGenericService.upload({
      mimetype: 'image/jpeg',
      oringalname: 'name',
      buffer: 'helloworld'
    })
      .then(image => {
        assert.equal(image.status, 'success')
        assert.ok(image.url)
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should upload a file', (done) => {
    DataStoreGenericService.uploadFile({
      src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
      url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150'
    })
      .then(file => {
        assert.equal(file.status, 'success')
        assert.ok(file.url)
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should upload files', (done) => {
    DataStoreGenericService.uploadFiles([{
      src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
      url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150'
    }])
      .then(files => {
        assert.equal(files.length, 1)
        assert.equal(files[0].url, 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150')
        assert.ok(files[0].url)
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
