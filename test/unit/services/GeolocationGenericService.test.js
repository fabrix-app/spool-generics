'use strict'
/* global describe, it */
const assert = require('assert')

describe('GeolocationGenericService', () => {
  let GeolocationGenericService
  it('should exist', () => {
    assert(global.app.api.services['GeolocationGenericService'])
    GeolocationGenericService = global.app.services.GeolocationGenericService
  })
  it('should locate an address', (done) => {
    GeolocationGenericService.locate({
      city: 'Cupertino',
      province_code: 'CA',
      country_code: 'US'
    })
      .then(response => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
