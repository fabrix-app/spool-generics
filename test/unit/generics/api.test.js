'use strict'
/* global describe, it */
const assert = require('assert')

describe('FakeGeneric', () => {
  let TestController
  it('should exist', () => {
    assert(global.app.api.controllers['TestController'])
    TestController = global.app.controllers.TestController
  })
  it('should have method foo', () => {
    assert.equal(TestController.foo(), 'bar')
  })
})
