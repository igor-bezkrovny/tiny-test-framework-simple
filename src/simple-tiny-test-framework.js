
class Expect {

	constructor(value) {
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
	 * Negates the expression
	 * @returns {Expect}
	 */
	get not() {
		this._isNegate = !this._isNegate;
		return this;
	}

	/**
	 * Expects some operator (eq, beGreaterThan) to be called and a result of this call to be given as an argument
	 * @see {@link eq}
	 * @see {@link beGreaterThan}
	 * @param {function(baseValue:*) : boolean} callback
	 * @returns {boolean}
	 */
	to(callback) {
		if(typeof callback === "function") {
			const operatorResult = callback(this._value);
			return this._isNegate ? !operatorResult : operatorResult;
		}

		throw new Error(`Expect#to: argument should be a function, ${typeof callback} is given`);
	}
}

/**
 * @param {*} value base value
 */
export function expect(value) {
	return new Expect(value);
}

/**
 * @param {*} operatorValue operatorValue to check for equality
 */
export function eq (operatorValue) {
	return function(baseValue) {
		return baseValue === operatorValue;
	}
}

/**
 * @param {*} operatorValue value to check for being greater
 */
export function beGreaterThan (operatorValue) {
	return function(baseValue) {
		return baseValue > operatorValue;
	}
}

