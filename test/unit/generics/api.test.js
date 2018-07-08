'use strict'
/* global describe, it */
const assert = require('assert')

describe('FakeGeneric', () => {
  let TestController, TestService
  it('should exist', () => {
    assert(global.app.api.controllers['TestController'])
    TestController = global.app.controllers.TestController
  })
  it('should have method foo', () => {
    assert.equal(TestController.foo(), 'bar')
  })
  it('should exist', () => {
    assert(global.app.api.services['TestService'])
    TestService = global.app.services.TestService
  })
  it('should have method foo', () => {
    assert.equal(TestService.foo(), 'bar')
  })
})
