import K from 'kefir'
import Promise from 'bluebird'
Promise.config({
  // Enable cancellation
  cancellation: true
});
export class HoldablePoint {
  constructor() {
    this._holdingTimeout = null;
    this._holdingResolve = null;
    this._holdingPromise = null;
  }

  hold(milliseconds) {
    this._holdingPromise = new Promise((resolve) => {
      this._holdingResolve = resolve;
    });
    this._holdingTimeout = setTimeout(() => {
      this._holdingResolve(true);
    }, milliseconds);
    return this._holdingPromise;
  }

  isHeld() {
    return this._holdingPromise;
  }

  release() {
    clearTimeout(this._holdingTimeout);
    this._holdingPromise && this._holdingPromise.cancel();
  }

}