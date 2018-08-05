'use strict'
/* global describe, it */
const assert = require('assert')

describe('FakeGeneric', () => {
  it('should exist', () => {
    assert.equal(global.app.config.get('fake_generic.foo'), 'bar')
  })
})
