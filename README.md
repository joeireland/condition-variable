# condition-variable

An asynchronous condition variable for JavaScript implemented internally using Promises.

[![License MIT](https://img.shields.io/npm/l/express.svg)](http://opensource.org/licenses/MIT)
[![tests](https://travis-ci.org/joeireland/condition-variable.svg?branch=master)](https://travis-ci.org/joeireland/condition-variable)
[![Coverage Status](https://img.shields.io/coveralls/joeireland/condition-variable.svg?branch=master)](https://coveralls.io/github/joeireland/condition-variable?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/joeireland/condition-variable/badge.svg)](https://snyk.io/test/github/joeireland/condition-variable)
[![npm](https://img.shields.io/npm/v/condition-variable.svg)](http://www.npmjs.org/condition-variable)
[![slack](https://img.shields.io/badge/slack-condition--variable-blue.svg)](https://joeireland.slack.com/messages/condition-variable)

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
