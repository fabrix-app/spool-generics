'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')
const Controller = require('@fabrix/fabrix/dist/common').FabrixController
const Service = require('@fabrix/fabrix/dist/common').FabrixService

module.exports = _.defaultsDeep({
  pkg: {
    name: require('../../package').name + '-test'
  },
  api: {},
  config: {
    main: {
      spools: [
        require('@fabrix/spool-router').RouterSpool,
        require('../../dist/index').GenericsSpool
      ]
    },
    generics: {
      payment_processor: {
        adapter: require('./FakePayment'),
        config: {}
      },
      email_provider: {
        adapter: require('./FakeEmail'),
        config: {}
      },
      data_store_provider: {
        adapter: require('./FakeDataStore'),
        config: {}
      },
      tax_provider: {
        adapter: require('./FakeTax'),
        config: {}
      },
      shipping_provider: {
        adapter: require('./FakeShipping'),
        config: {}
      },
      fulfillment_provider: {
        adapter: require('./FakeFulfillment'),
        config: {}
      },
      geolocation_provider: {
        adapter: require('./FakeGeolocation'),
        config: {}
      },
      render_service: {
        adapter: require('./FakeRender'),
        config: {}
      },
      fake_generic: {
        adapter: require('./FakeGeneric'),
        config: {
          foo: 'bar'
        },
        api: {
          controllers: {
            TestController: class TestController extends Controller {
              foo() {
                return 'bar'
              }
            }
          },
          services: {
            TestService: class TestService extends Service {
              foo() {
                return 'bar'
              }
            }
          }
        }
      }
    }
  }
}, smokesignals.FailsafeConfig)


