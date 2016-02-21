## You don't (may not) know about Lodash/Underscore 

In response to [You-Dont-Need-Lodash-Underscore](https://github.com/cht8687/You-Dont-Need-Lodash-Underscore) made by [@cht8687](https://github.com/cht8687), yes some of the methods could be replaced by native methods. This is not the case when things get a bit more complex. According to the [Lodash](https://lodash.com/) author, [@jdalton](https://github.com/jdalton):

> If you're only using a handful of methods on arrays and don't care about nullish guards, object iteration, smoothing over enviro/ES5/ES6 issues, FP goodies, iteratee shorthands, lazy evaluation, or other enhancements then built-ins are the way to go. Folks who use lodash know its 270+ modules work great combo'ed with ES6, enabling cleaner code and empowering beyond built-ins.

Here lists the differences. Note: the numbers in performance means Ops/sec.


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


# License

MIT
