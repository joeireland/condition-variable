var tape    = require('tape');
var CondVar = require('../CondVar');

tape('03 - wait() which is never complete() or cancel() (ie. times out)', t => {
  t.plan(2);

  var condVar = new CondVar();

  condVar.wait(1000, (rejValue, resValue) => {
    t.equal(rejValue, 'timeout');
    t.equal(resValue, undefined);
  });
});
