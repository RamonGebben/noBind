# noBind

[![Package Quality](http://npm.packagequality.com/shield/no-bind.svg)](http://packagequality.com/#?package=no-bind)
[![Build Status](https://travis-ci.org/RamonGebben/noBind.svg?branch=master)](https://travis-ci.org/RamonGebben/noBind)
[![npm version](https://badge.fury.io/js/no-bind.svg)](https://badge.fury.io/js/no-bind)

No more `bind` in JSX.

## Motivation

The reason why I started building this little utility was lead by one of the rules applied in the [React eslint config of Airbnb](https://github.com/airbnb/javascript/tree/master/react#methods).
There they point out that when using `.bind` inside of your `render` method will make the amount of memory used by your app bigger with each "rerender".
This is because `.bind` return a copy of the that bound function. This utility gives you the same behavior as `.bind` would without making a copy of your function. As so be more memory efficient.

## Usage

```javascript
import noBind from 'no-bind';

function clickHandler(id, e) {
  console.log(id, e);
}

function MyList(props) {
  const { listItems } = props;
  return listItems.map(item => (
    <button onClick={noBind(clickHandler, item.id)}>
      Click Me
    </button>
  ))
}
```
