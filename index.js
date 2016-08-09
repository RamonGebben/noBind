'use strict';

function noBind(fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('noBind - what is trying to be bound is not callable');
   }

  const aArgs = Array.prototype.slice.call(arguments, 1);

  return function call() {
	  const merged = aArgs.concat(Array.prototype.slice.call(arguments))
    return fn.apply(fn, merged);
  }
}

module.exports = noBind;
