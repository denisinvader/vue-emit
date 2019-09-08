const isFunction = obj => typeof obj === 'function';

const emit = function vueEmit (handlers, eventName, ...params) {
  if ((typeof handlers !== 'object') || (typeof eventName !== 'string')) {
    return;
  }

  const handler = handlers[eventName];

  if (isFunction(handler)) {
    handler(...params);
  } else if (Array.isArray(handler)) {
    handler.forEach(handlerFunction => {
      if (isFunction(handlerFunction)) {
        handlerFunction(...params);
      }
    });
  }
};

module.exports = emit;
