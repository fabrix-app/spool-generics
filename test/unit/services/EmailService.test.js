'use strict'
/* global describe, it */
const assert = require('assert')

describe('EmailGenericService', () => {
  let EmailGenericService
  it('should exist', () => {
    assert(global.app.api.services['EmailGenericService'])
    EmailGenericService = global.app.services.EmailGenericService
  })
  it('should send', (done) => {
    EmailGenericService.send({
      subject: 'Hello World',
      html: '<h1>Hello World</h1>',
      to: [
        {
          email: 'example@example.com',
          name: 'Test Receiver'
        }
      ],
      from: {
        email: 'example@example.com',
        name: 'Test Sender'
      }
    })
      .then(email => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should send template', (done) => {
    EmailGenericService.sendTemplate({
      subject: 'Hello World',
      to: [
        {
          email: 'example@example.com',
          name: 'Test Receiver'
        }
      ],
      from: {
        email: 'example@example.com',
        name: 'Test Sender'
      },
      template_name: 'welcome',
      template_content: {}
    })
      .then(email => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
