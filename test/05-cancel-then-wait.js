var tape    = require('tape');
var CondVar = require('../CondVar');

tape('05 - cancel() followed by wait()', t => {
  t.plan(4);

  var condVar1 = new CondVar();

  condVar1.cancel('05 - TEST #1');
  condVar1.wait((rejValue, resValue) => {
    t.equal(rejValue, '05 - TEST #1');
    t.equal(resValue, undefined);
  });

  var condVar2 = new CondVar();

  condVar2.cancel('05 - TEST #2');
  condVar2.wait(1000, (rejValue, resValue) => {
    t.equal(rejValue, '05 - TEST #2');
    t.equal(resValue, undefined);
  });
});
