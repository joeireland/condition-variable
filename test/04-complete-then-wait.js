var tape    = require('tape');
var CondVar = require('../CondVar');

tape('04 - complete() followed by wait()', t => {
  t.plan(4);

  var condVar1 = new CondVar();

  condVar1.complete('04 - TEST #1');
  condVar1.wait((rejValue, resValue) => {
    t.equal(rejValue, null);
    t.equal(resValue, '04 - TEST #1');
  });

  var condVar2 = new CondVar();

  condVar2.complete('04 - TEST #2');
  condVar2.wait(1000, (rejValue, resValue) => {
    t.equal(rejValue, null);
    t.equal(resValue, '04 - TEST #2');
  });
});
