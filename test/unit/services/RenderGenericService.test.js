'use strict'
/* global describe, it */
const assert = require('assert')

describe('RenderGenericService', () => {
  let RenderGenericService
  it('should exist', () => {
    assert(global.app.api.services['RenderGenericService'])
    RenderGenericService = global.app.services.RenderGenericService
  })
  it('should render', (done) => {
    RenderGenericService.render('# Look at me as markup!')
      .then(obj => {
        assert.ok(obj.document)
        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('should render sync', (done) => {
    const doc = RenderGenericService.renderSync('# Look at me as markup!')
    assert.ok(doc)
    done()
  })
})
