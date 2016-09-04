## You don't (may not) know Lodash/Underscore

In response to [You-Dont-Need-Lodash-Underscore](https://github.com/cht8687/You-Dont-Need-Lodash-Underscore) made by [@cht8687](https://github.com/cht8687), yes some of the methods could be replaced by native methods. This is not the case when things get a bit more complex. According to the [Lodash](https://lodash.com/) author, [@jdalton](https://github.com/jdalton):

> If you're only using a handful of methods on arrays and don't care about nullish guards, object iteration, smoothing over enviro/ES5/ES6 issues, FP goodies, iteratee shorthands, lazy evaluation, or other enhancements then built-ins are the way to go. Folks who use lodash know its 270+ modules work great combo'ed with ES6, enabling cleaner code and empowering beyond built-ins.


## ESLint?

[There is a plugin](https://github.com/wix/eslint-plugin-lodash#preference-over-native)


## Quick links

1. [_.each](#_each)
1. [_.map](#_map)
1. [_.every](#_every)
1. [_.some](#_every)
1. [_.reduce](#_reduce)
1. [_.reduceRight](#_reduceright)
1. [_.filter](#_filter)
1. [_.find](#_find)
1. [_.findIndex](#_find)
1. [_.indexOf](#_indexof)
1. [_.lastIndexOf](#_lastindexof)
1. [_.isNaN](#_isnan)

*Note: The unit in performance field is Ops/sec.*

## _.each

Underscore/Lodash may exit iteration early by explicitly returning `false`.

  ```js
  // Underscore/Lodash
  _.each([1, 2, 3], function(value, index) {
    console.log(value);
    return false;
  });
  // output: 1

  // Native
  [1, 2, 3].forEach(function(value, index) {
    console.log(value);
    return false; // does not exit the iteration!
  });
  // output: 1 2 3
  ```

### Performance

Lodash|Underscore|Native
--- | --- | ---
972,874|101,878|102,864 (**89% slower**)

**[⬆ back to top](#quick-links)**


## _.map

Native doesn't support the `_.property` iteratee shorthand.

  ```js
  // Underscore/Lodash
  var users = [
    { 'user': 'barney' },
    { 'user': 'fred' }
  ];
  var arr = _.map(users, 'user');
  console.log(arr);
  // output: ['barney', 'fred']

  // Native
  var users = [
    { 'user': 'barney' },
    { 'user': 'fred' }
  ];
  var arr = users.map('user');
  // error!
  ```

### Performance

Lodash|Underscore|Native
--- | --- | ---
1,214,010|1,171,239|192,404 (**94% slower**)

**[⬆ back to top](#quick-links)**


## _.every

Native doesn't support the `_.property` iteratee shorthand.

### Performance

Lodash|Underscore|Native
--- | --- | ---
1,342,410|1,373,736|1,410,766

**[⬆ back to top](#quick-links)**


## _.some

Native doesn't support the `_.matches` iteratee shorthand.

  ```js
  // Underscore/Lodash
  var users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false }
  ];

  // using the `_.matches` iteratee shorthand
  _.some(users, { 'user': 'barney', 'active': false });
  // output: false

  // Native
  var users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false }
  ];
  var result = array.some({ 'user': 'barney', 'active': false }); // error!
  ```

### Performance

Todo

**[⬆ back to top](#quick-links)**


## _.reduce

### Performance

Lodash|Underscore|Native
--- | --- | ---
8,734|5,481|7,467

**[⬆ back to top](#quick-links)**


## _.reduceRight

Todo

**[⬆ back to top](#quick-links)**


## _.filter

Native doesn't support the `_.matches` iteratee shorthand.

  ```js
  var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
  // using the `_.matches` iteratee shorthand
  _.filter(users, { 'age': 36, 'active': true });
  // output: objects for ['barney']

  // Native
  var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
  var filtered = users.filter({ 'age': 36, 'active': true }); // error!
  ```

### Performance

Todo

**[⬆ back to top](#quick-links)**


## _.find

### Performance

Todo

**[⬆ back to top](#quick-links)**


## _.findIndex

### Performance

Todo

**[⬆ back to top](#quick-links)**


## _.indexOf

### Performance

Todo

**[⬆ back to top](#quick-links)**


## _.lastIndexOf

### Performance

Todo

**[⬆ back to top](#quick-links)**


## _.isNaN

Native coerces the argument to a `Number`.

  ```js
  // Underscore/Lodash
  console.log(_.isNaN("blabla"));
  // output: false

  // Native
  // Confusing special-case behavior
  console.log(isNaN("blabla"));
  // output: true
  // surprise!

  // ES6
  console.log(Number.isNaN("blabla"));
  // output: false
  // but browser support maybe the problem
  ```

**[⬆ back to top](#quick-links)**


## References

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
* [Underscore.js](http://underscorejs.org)
* [Lodash.js](https://lodash.com/docs)
* [jsPerf](https://jsperf.com)


## Further reading

I'd like to quote [jQuery's browser bug workarounds](https://docs.google.com/document/d/1LPaPA30bLUB_publLIMF0RlhdnPx_ePXm7oW02iiT6o/edit#heading=h.fumxprdxo2gn) here:

> While the sentiment of youmightnotneedjquery is great, developers should be aware that ditching libraries, like jQuery, can easily require large amounts of research on their end to avoid bugs (even in modern browsers). The snippets provided by youmightnotneedjquery are a starting point but hardly scratch the surface of being a solid robust replacement to jQuery.

> The great thing about an established library, like jQuery, is it’s hammered on by lots of talented people, transparently improved, and refined by the community. 

> Concerned over file size? When it comes to page load time, count of HTTP requests (and placement) matter far more than total JS size. And heck, jQuery 1.9.x and 2.x allow custom builds, so you can minimize what of jQuery you end up shipping.

> This line from youmightnotneedjquery is worth repeating…
> “At the very least, make sure you know what jQuery is doing for you, and what it's not.”


> ~ John-David Dalton, Paul Irish

> Feb 6, 2014

To extend, you should also know what your library/framework is doing. Browser support/fixing bugs is one thing. Tons of features/performance improvements should also take into account.


# License

MIT
