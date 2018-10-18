function emit (handlers = {}, eventName = '', ...params) {
  if (typeof handlers !== 'object') {
    return;
  }

  if (eventName in handlers) {
    const handler = handlers[eventName];

    if (typeof handler === 'function') {
      handler(...params);
    } else if (typeof handler === 'object' && handler instanceof Array) {
      for (let i = 0; i < handler.length; i++) {
        if (typeof handler[i] !== 'function') {
          continue;
        }

        handler[i](...params);
      }
    }
  }
}

module.exports = emit;
