'use strict'
/* global describe, it */
const assert = require('assert')

describe('ImageGenericService', () => {
  let ImageGenericService
  it('should exist', () => {
    assert(global.app.api.services['ImageGenericService'])
    ImageGenericService = global.app.services.ImageGenericService
  })
})
