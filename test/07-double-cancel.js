var tape    = require('tape');
var CondVar = require('../CondVar');

tape('07 - cancel() twice followed by wait()', t => {
  t.plan(4);

  var condVar1 = new CondVar();

  condVar1.cancel('07 - TEST #1');
  condVar1.cancel('07 - TEST BAD #1');
  condVar1.wait((rejValue, resValue) => {
    t.equal(rejValue, '07 - TEST #1');
    t.equal(resValue, undefined);
  });

  var condVar2 = new CondVar();

  condVar2.cancel('07 - TEST #2');
  condVar2.cancel('07 - TEST BAD #2');
  condVar2.wait(1000, (rejValue, resValue) => {
    t.equal(rejValue, '07 - TEST #2');
    t.equal(resValue, undefined);
  });
});
