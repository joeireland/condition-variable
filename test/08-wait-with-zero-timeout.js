var tape    = require('tape');
var CondVar = require('../CondVar');

tape('08 - wait() with 0 or negative timeout', t => {
  t.plan(4);

  var condVar1 = new CondVar();

  setTimeout(() => { condVar1.complete('08 - TEST #1') }, 1000);
  condVar1.wait(0, (rejValue, resValue) => {
    t.equal(rejValue, null);
    t.equal(resValue, '08 - TEST #1');
  });

  var condVar2 = new CondVar();

  setTimeout(() => { condVar2.complete('08 - TEST #2') }, 1000);
  condVar2.wait(-1, (rejValue, resValue) => {
    t.equal(rejValue, null);
    t.equal(resValue, '08 - TEST #2');
  });
});
