
function a2a(args) {
  return Array.prototype.slice.call(args);
}

function noBind() {
  const args = a2a(arguments);
  const fn = args[0];
  args.splice(0, 1);

  return function call() {
    const args2 = a2a(arguments);
	  const merged = [].concat(args)
      .concat(args2);

    return fn.apply(fn, merged);
  }
}

module.exports = noBind;
