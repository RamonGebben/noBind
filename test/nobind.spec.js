const expect = require('chai').expect;
const noBind = require('../index');

function testFunction() {
  return Array.prototype.slice.call(arguments);
}

describe('noBind', function() {
  it('should pass atleast one argument', () => {
    const handler = noBind(testFunction, 'first');
    const called = handler();
    expect(called.length).to.equal(1);
  });
  it('should pass multiple argument', () => {
    const handler = noBind(testFunction, 'first', 'second', 'third');
    const called = handler();
    expect(called.length).to.equal(3);
  });
});
