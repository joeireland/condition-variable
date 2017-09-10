var tape    = require('tape');
var CondVar = require('../CondVar');

tape('01 - wait() followed by complete()', t => {
  t.plan(4);

  var condVar1 = new CondVar();

  setTimeout(() => { condVar1.complete('01 - TEST #1') }, 1000);
  condVar1.wait((rejValue, resValue) => {
    t.equal(rejValue, null);
    t.equal(resValue, '01 - TEST #1');
  });

  var condVar2 = new CondVar();

  setTimeout(() => { condVar2.complete('01 - TEST #2') }, 1000);
  condVar2.wait(2000, (rejValue, resValue) => {
    t.equal(rejValue, null);
    t.equal(resValue, '01 - TEST #2');
  });
});
