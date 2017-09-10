var tape    = require('tape');
var CondVar = require('../CondVar');

tape('02 - wait() followed by cancel()', t => {
  t.plan(4);

  var condVar1 = new CondVar();

  setTimeout(() => { condVar1.cancel('02 - TEST #1') }, 1000);
  condVar1.wait((rejValue, resValue) => {
    t.equal(rejValue, '02 - TEST #1');
    t.equal(resValue, undefined);
  });

  var condVar2 = new CondVar();

  setTimeout(() => { condVar2.cancel('02 - TEST #2') }, 1000);
  condVar2.wait(2000, (rejValue, resValue) => {
    t.equal(rejValue, '02 - TEST #2');
    t.equal(resValue, undefined);
  });
});
