# noBind

No more `bind` in JSX

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
