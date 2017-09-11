# condition-variable

An asynchronous condition variable for JavaScript implemented internally using Promises.

[![npm](https://img.shields.io/npm/v/condition-variable.svg)](http://www.npmjs.org/condition-variable)
[![tests](https://travis-ci.org/joeireland/condition-variable.svg?branch=master)](https://travis-ci.org/joeireland/condition-variable)
[![Coverage Status](https://coveralls.io/repos/github/joeireland/condition-variable/badge.svg?branch=master)](https://coveralls.io/github/joeireland/condition-variable?branch=master)

Install with:

```npm install condition-variable```

# Usage Example

```
var CondVar   = require('condition-variable');
var util      = require('util');
var condition = new CondVar();
var maxTime   = 10000; // 10 second maximum to wait for message

function notification(err, result) {
  if (err) {
    condition.cancel(err);
  }
  else {
    condition.complete(result);
  }
}

condition.wait(maxTime, (err, result) => {
  if (err) {
    console.log('FAILED: err=%s', util.inspect(err));
  }
  else {
    console.log('SUCCESS: result=%s', util.inspect(result));
  }
});

// TO SIMULATE COMPLETE WITH RESULT
// setTimeout(notification, 1000, null, 'IT WORKED!');

// TO SIMULATE AN ERROR
// setTimeout(notification, 1000, 'FAILED');
```
