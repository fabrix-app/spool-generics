import * as _ from 'lodash'
// const fabrixCore = require('fabrix/lib').Core

export const Generics = {
  /**
   * configure - Configure the Generics
   * @param app
   */
  configure: (app) => {

    // // Define New properties on app
    // Object.defineProperties(app, {
    //   generics: {
    //     enumerable: true,
    //     writable: false,
    //     value: {}
    //   }
    // })
    //
    // // Bind the Methods
    // Object.assign(app.generics, fabrixCore.bindMethods(app, 'generics'))
    return
  },
  /**
   * Add Generics APIs
   * @param app
   * @returns {Promise.<T>}
   */
  loadGenericApis: (app) => {
    const apisToMerge = []
    const generics = _.get(app.config, 'generics')
    _.each(generics, generic => {
      const api = _.get(generic, 'api')
      if (api) {
        apisToMerge.push(api)
      }
    })
    app.api = _.defaultsDeep({}, app.api, apisToMerge)
    return Promise.resolve()
  },
  /**
   * Add Generics Routes
   * @param app
   * @returns {Promise.<{}>}
   */
  addRoutes: (app) => {
    // const prefix = _.get(app.config, 'generics.prefix') || _.get(app.config, 'footprints.prefix')
    // const routerUtil = app.packs.router.util
    // let routesToMerge = []
    // const generics = _.get(app.config, 'generics')
    // _.each(generics, generic => {
    //   const routes = _.get(generic, 'routes')
    //   if (routes) {
    //     app.log.debug(routes)
    //     routesToMerge = routesToMerge.concat(routes)
    //   }
    // })
    //
    // if (prefix) {
    //   routesToMerge.forEach(route => {
    //     route.path = prefix + route.path
    //   })
    // }
    // app.config.routes = routerUtil.mergeRoutes(routesToMerge, app.config.routes)
    // app.config.routes.sort(routeOrder({order: 'asc'}))
    return Promise.resolve({})
  }
}
