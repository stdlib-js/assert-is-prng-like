<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isPRNGLike

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is PRNG-like.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-prng-like
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var isPRNGLike = require( '@stdlib/assert-is-prng-like' );
```

#### isPRNGLike( value )

Tests if a value is PRNG-like.

```javascript
var randu = require( '@stdlib/random-base-randu' );

var bool = isPRNGLike( randu );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function is **not** rigorous and only checks for the existence of particular properties which **should** be bound to a seedable pseudorandom number generator (PRNG) function. The function's main use case is for testing that a provided `value` (loosely) conforms to a particular interface.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var isPRNGLike = require( '@stdlib/assert-is-prng-like' );

var bool = isPRNGLike( randu );
// returns true

bool = isPRNGLike( [ 1, 2, 3, 4 ] );
// returns false

bool = isPRNGLike( {} );
// returns false

bool = isPRNGLike( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-prng-like.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-prng-like

[test-image]: https://github.com/stdlib-js/assert-is-prng-like/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-prng-like/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-prng-like/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-prng-like?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-prng-like.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-prng-like/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-prng-like/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-prng-like/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-prng-like/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-prng-like/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-prng-like/main/LICENSE

</section>

<!-- /.links -->
