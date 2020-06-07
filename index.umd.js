(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.BeepBeepBoop = {}));
}(this, (function (exports) { 'use strict';

  (function() {
    let globalObject;

    // Detect the global object
    if (typeof (globalThis) !== 'undefined') {
      globalObject = globalThis;
    } else if (typeof (global) !== 'undefined') {
      globalObject = global;
    } else if (typeof (window) !== 'undefined') {
      globalObject = window;
    }

    if (typeof (globalObject.Opal) !== 'undefined') {
      console.warn('Opal already loaded. Loading twice can cause troubles, please fix your setup.');
      return globalObject.Opal
    }

    globalObject.Opal = {
      VERSION: '1.0.0'
    };
  })();

  Opal.BeepBeepBoop = {
    VERSION: '2.0.10'
  };

  const BeepBeepBoop = Opal.BeepBeepBoop;

  function hello () {
    console.log('Beep Beep Boop!');
  }

  BeepBeepBoop.hello = hello;

  exports.default = BeepBeepBoop;
  exports.hello = hello;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
