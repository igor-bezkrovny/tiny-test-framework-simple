"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports.expect = expect;
exports.eq = eq;
exports.beGreaterThan = beGreaterThan;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Expect = (function () {
	function Expect(value) {
		_classCallCheck(this, Expect);

		/**
   * Base value
   * @type {*}
   * @private
   */
		this._value = value;

		/**
   * Is Expression Negated
   * @type {boolean}
   * @private
   */
		this._isNegate = false;
	}

	/**
  * @param {*} value base value
  */

	/**
  * Negates the expression
  * @returns {Expect}
  */

	_createClass(Expect, [{
		key: "to",

		/**
   * Expects some operator (eq, beGreaterThan) to be called and a result of this call to be given as an argument
   * @see {@link eq}
   * @see {@link beGreaterThan}
   * @param {function(baseValue:*) : boolean} callback
   * @returns {boolean}
   */
		value: function to(callback) {
			if (typeof callback === "function") {
				var operatorResult = callback(this._value);
				return this._isNegate ? !operatorResult : operatorResult;
			}

			throw new Error("Expect#to: argument should be a function, " + typeof callback + " is given");
		}
	}, {
		key: "not",
		get: function get() {
			this._isNegate = !this._isNegate;
			return this;
		}
	}]);

	return Expect;
})();

function expect(value) {
	return new Expect(value);
}

/**
 * @param {*} operatorValue operatorValue to check for equality
 */

function eq(operatorValue) {
	return function (baseValue) {
		return baseValue === operatorValue;
	};
}

/**
 * @param {*} operatorValue value to check for being greater
 */

function beGreaterThan(operatorValue) {
	return function (baseValue) {
		return baseValue > operatorValue;
	};
}
//# sourceMappingURL=simple-tiny-test-framework.js.map