const tape = require('tape');
const emit = require('./emit');

tape('emits function in an object', assert => {
  let called = false;
  const listeners = {
    fake: () => {
      called = true;
    },
  };

  assert.notOk(called, '');
  emit(listeners, 'fake');
  assert.ok(called, '');

  assert.end();
});

tape('emits array of functions in an object', assert => {
  const called = [];
  const listeners = {
    fake: [
      () => called.push('apple'),
      () => called.push('pickle'),
      () => called.push('banana'),
    ],
  };

  assert.deepEqual(called, [], '');
  emit(listeners, 'fake');
  assert.deepEqual(called, ['apple', 'pickle', 'banana'], '');

  assert.end();
});

tape('passes all aditional arguments to handler', assert => {
  let lastCalledWith = [];
  const listeners = {
    one: param => { lastCalledWith = [param]; },
    two: (p1, p2) => { lastCalledWith = [p1, p2]; },
    few: (p1, p2, p3, p4) => { lastCalledWith = [p1, p2, p3, p4]; },
  };

  assert.deepEqual(lastCalledWith, [], '');
  emit(listeners, 'one', 42);
  assert.deepEqual(lastCalledWith, [42], '');
  emit(listeners, 'two', 37, 73);
  assert.deepEqual(lastCalledWith, [37, 73], '');
  emit(listeners, 'few', 37, 73, 'car', 'bike');
  assert.deepEqual(lastCalledWith, [37, 73, 'car', 'bike'], '');

  assert.end();
});

tape('passes all aditional arguments to array of handlers', assert => {
  const lastCalledWith = [];
  const listeners = {
    fake: [
      param => lastCalledWith.push([param]),
      (p1, p2) => lastCalledWith.push([p1, p2]),
      (p1, p2, p3, p4) => lastCalledWith.push([p1, p2, p3, p4]),
    ],
  };

  assert.deepEqual(lastCalledWith, [], '');
  emit(listeners, 'fake', 37, 73, 'car', 'bike');
  assert.deepEqual(lastCalledWith[0], [37], '');
  assert.deepEqual(lastCalledWith[1], [37, 73], '');
  assert.deepEqual(lastCalledWith[2], [37, 73, 'car', 'bike'], '');

  assert.end();
});

tape('does not throw for invalid arguments', assert => {
  assert.doesNotThrow(() => emit(null, null), '');
  assert.doesNotThrow(() => emit('', {}), '');
  assert.doesNotThrow(() => emit({}, 2), '');
  assert.doesNotThrow(() => emit('str', 'str'), '');

  assert.end();
});
