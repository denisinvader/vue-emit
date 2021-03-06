# Vue emit

Helper function to emit events from Vue.js functional components. Can be used in regular components too.
[CodeSandbox demo](https://codesandbox.io/s/71pnzj8qrq)

## Installation

```sh
yarn add vue-emit
# or
npm install vue-emit
```

## Usage

```js
import emit from 'vue-emit';

export default {
  functional: true,
  render (h, context) {
    return (
      <button
        onClick={e => emit(context.listeners, 'someEvent', e, 'additional param', 'etc')}
      >
        {context.children}
      </button>
    );
  },
};
```

## Params

```js
emit(handlers_list, event_name, [optional_payload]);
```

- `handlers_list` - object of functions. In Vue this is `this.$listeners` and `context.listeners` (for funtional components). Each value may be a function or an array of functions. In case of array `emit` will call all provided callbacks.

- `event_name` - name of the event to fire. The event may not be defined in the handlers list: in this case `emit` does nothing and do not throws an error (what is very handy)

- `optional_payload` - any amount of parameters that will be passed as arguments to the callback.
