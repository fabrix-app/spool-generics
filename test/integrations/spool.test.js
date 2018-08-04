'use strict'

const assert = require('assert')

describe('spool', () => {
  let spool
  before(() => {
    spool = global.app.spools['generics']
  })
  it('should be loaded into the app.spools collection', () => {
    assert(spool)
  })
  describe('#validate', () => {
    it.skip('TODO test')
  })
  describe('#configure', () => {
    it.skip('TODO test')
  })
  describe('#initialize', () => {
    it.skip('TODO test')
  })
})
