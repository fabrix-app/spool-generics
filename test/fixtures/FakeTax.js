'use strict'
// const _ = require('lodash')
module.exports = class FakeTaxProvider {
  constructor(options) {
    this.options = options
  }
  getRate(data) {
    return Promise.resolve({
      amount: 1000,
      rate: 0.075,
      title: 'Sales Tax',
      tax_details: {}
    })
  }
  taxForOrder(data) {
    return Promise.resolve({
      total_taxes: 10,
      tax_lines: [
        {
          name: 'fake sales tax',
          price: data.line_items.length * 5
        }
      ],
      line_items: data.line_items.map(item => {
        return Object.assign({}, item, {
          total_taxes: 5,
          tax_lines: [
            {
              name: 'fake sales tax',
              price: 5
            }
          ]
        })
      })
    })
  }
}
