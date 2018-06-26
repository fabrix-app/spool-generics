'use strict'

const assert = require('assert')

describe('spool', () => {
  let pack
  before(() => {
    pack = global.app.spools['generics']
  })
  it('should be loaded into the app.packs collection', () => {
    assert(pack)
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
