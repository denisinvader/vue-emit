# Vue emit
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdenisinvader%2Fvue-emit.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdenisinvader%2Fvue-emit?ref=badge_shield)


Helper function to emit events from Vue.js functional components. Can be used in regular components too.

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
      >{context.children}</button>
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


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdenisinvader%2Fvue-emit.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdenisinvader%2Fvue-emit?ref=badge_large)