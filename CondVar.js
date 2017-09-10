class CondVar {
  constructor() {
     var _res, _rej;

     this.promise = new Promise((res, rej) => {
       _res = res;
       _rej = rej;
     });

     this._resolve = _res;
     this._reject  = _rej;
     this._timer   = null;
  }

  wait(timeout, result) {
    if (typeof timeout === 'function') {
      result = timeout;
    }
    else {
      this._scheduleTimer(timeout);
    }

    this.promise.then(value => {
      this._cancelTimer();
      result(null, value);
    }).catch(value => {
      this._cancelTimer();
      result(value);
    });
  }

  complete(value) {
    this._resolve(value);
  }

  cancel(value) {
    this._reject(value);
  }

  _scheduleTimer(timeout) {
    if (timeout > 0) {
      this.timer = setTimeout(self => { self.cancel('timeout'); }, timeout, this);
    }
  }

  _cancelTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}

module.exports = CondVar;
