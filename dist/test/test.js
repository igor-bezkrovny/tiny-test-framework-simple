'use strict';

var _simpleTinyTestFramework = require('./simple-tiny-test-framework');

console.log((0, _simpleTinyTestFramework.expect)(3).to((0, _simpleTinyTestFramework.eq)(3))); // should return true
console.log((0, _simpleTinyTestFramework.expect)(3).not.to((0, _simpleTinyTestFramework.eq)(3))); // should return false
console.log((0, _simpleTinyTestFramework.expect)(4).to((0, _simpleTinyTestFramework.beGreaterThan)(3))); // should return true

// additional tests
console.log((0, _simpleTinyTestFramework.expect)(4).to((0, _simpleTinyTestFramework.beGreaterThan)(4))); // should return false
console.log((0, _simpleTinyTestFramework.expect)(4).not.not.to((0, _simpleTinyTestFramework.eq)(4))); // should return true
console.log((0, _simpleTinyTestFramework.expect)((0, _simpleTinyTestFramework.expect)(2).not.to((0, _simpleTinyTestFramework.eq)(2))).to((0, _simpleTinyTestFramework.eq)(false))); // should return true
//# sourceMappingURL=test.js.map