'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')
const Controller = require('@fabrix/fabrix/dist/common').FabrixController

module.exports = _.defaultsDeep({
  pkg: {
    name: require('../package').name + '-test'
  },
  api: {},
  config: {
    main: {
      spools: [
        require('@fabrix/spool-router').RouterSpool,
        require('../dist').GenericsSpool
      ]
    },
    generics: {
      payment_processor: {
        adapter: require('./fixtures/FakePayment'),
        config: {}
      },
      email_provider: {
        adapter: require('./fixtures/FakeEmail'),
        config: {}
      },
      data_store_provider: {
        adapter: require('./fixtures/FakeDataStore'),
        config: {}
      },
      tax_provider: {
        adapter: require('./fixtures/FakeTax'),
        config: {}
      },
      shipping_provider: {
        adapter: require('./fixtures/FakeShipping'),
        config: {}
      },
      fulfillment_provider: {
        adapter: require('./fixtures/FakeFulfillment'),
        config: {}
      },
      geolocation_provider: {
        adapter: require('./fixtures/FakeGeolocation'),
        config: {}
      },
      render_service: {
        adapter: require('./fixtures/FakeRender'),
        config: {}
      },
      fake_generic: {
        adapter: require('./fixtures/FakeGeneric'),
        config: {},
        api: {
          controllers: {
            TestController: class TestController extends Controller {
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


