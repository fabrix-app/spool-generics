'use strict'
/* global describe, it */
const assert = require('assert')

describe('TaxGenericService', () => {
  let TaxGenericService
  it('should exist', () => {
    assert(global.app.api.services['TaxGenericService'])
    TaxGenericService = global.app.services.TaxGenericService
  })
  it('should get rate', (done) => {
    TaxGenericService.getRate({
      from_address: {
        postal_code: '46268',
        province_code: 'IN',
        country_code: 'US'
      },
      to_address: {
        postal_code: '46268',
        province_code: 'IN',
        country_code: 'US'
      },
      subtotal_price: 1000,
      total_shipping: 1000
    })
      .then(tax => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should get tax for order/cart/subscription', (done) => {
    TaxGenericService.taxForOrder({
      nexus_addresses: [{
        product_ids: [1, 2],
        postal_code: '46268',
        province_code: 'IN',
        country_code: 'US'
      }],
      to_address: {
        postal_code: '46268',
        province_code: 'IN',
        country_code: 'US'
      },
      line_items: [{
        id: 1,
        price: 100,
        calculated_price: 100,
        tax_code: 'P000000'
      }, {
        id: 2,
        price: 100,
        calculated_price: 100,
        tax_code: 'P000000'
      }],
      subtotal_price: 200,
      total_shipping: 0
    })
      .then(tax => {
        assert.deepEqual(tax, {
          total_taxes: 10,
          tax_lines: [ { name: 'fake sales tax', price: 10 } ],
          line_items: [
            { id: 1,
              price: 100,
              calculated_price: 100,
              tax_code: 'P000000',
              total_taxes: 5,
              tax_lines: [{ name: 'fake sales tax', price: 5 }]
            }, {
              id: 2,
              price: 100,
              calculated_price: 100,
              tax_code: 'P000000',
              total_taxes: 5,
              tax_lines: [{ name: 'fake sales tax', price: 5 }]
              }
            ]
        })
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
