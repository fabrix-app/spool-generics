# spool-generics

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

## An adapter protocol for common functions

Generics are common features that web applications need but implement differently. The result of a Generic is a normalized way of handling these different services.

A generic is a great way to implement 3rd parties. You can write your application to implement a single service but easily swap out the the 3rd party.

Generics can add their own Models, Controllers, Services, and Policies so they can support things like vendor specific webhooks or extend functionality of Fabrix.

Current Generics: Email Provider, Payment Processors, Tax Provider, Shipping Provider, Fulfillment, Geolocation, Image Manipulation, HTML rendering, whatever you need!

Can you think of a generic or method we missed? Create a PR!

[npm-image]: https://img.shields.io/npm/v/@fabrix/spool-generics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/spool-generics
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/spool-generics/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/spool-generics/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/spool-generics.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/spool-generics
[codeclimate-image]: https://img.shields.io/codeclimate/github/fabrix-app/spool-generics.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/fabrix-app/spool-generics

