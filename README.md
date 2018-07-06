# spool-generics

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @FabrixApp on Twitter][twitter-image]][twitter-url]

## Install
```sh
$ npm install @fabrix/spool-generics --save
```

## An adapter protocol for common functions

Generics are common features that web applications need but implement differently. The result of a Generic is a normalized way of handling these different services.

A generic is a great way to implement 3rd parties. You can write your application to implement a single service but easily swap out the the 3rd party.

Generics can add their own Models, Controllers, Services, and Policies so they can support things like vendor specific webhooks or extend functionality of Fabrix.

Current Generics: Email Provider, Payment Processors, Tax Provider, Shipping Provider, Fulfillment, Geolocation, Image Manipulation, HTML rendering, whatever you need!

Can you think of a generic or method we missed? Create a PR!

## Usage

### Configure

```js
// config/main.js
module.exports = {
  // ...
  spools: [
    require('@fabrix/spool-generics').GenericsSpool
  ]
}
```

[npm-image]: https://img.shields.io/npm/v/@fabrix/spool-generics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/spool-generics
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/spool-generics/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/spool-generics/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/spool-generics.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/spool-generics
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/Lobby
[twitter-image]: https://img.shields.io/twitter/follow/FabrixApp.svg?style=social
[twitter-url]: https://twitter.com/FabrixApp
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/fabrix-app/spool-generics.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/fabrix-app/spool-generics/coverage

