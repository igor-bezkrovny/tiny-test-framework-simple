'use strict';

import {expect, eq, beGreaterThan} from './simple-tiny-test-framework'

console.log(  expect( 3 ).to( eq(3) )                                      ); // should return true
console.log(  expect( 3 ).not.to( eq(3) )                                  ); // should return false
console.log(  expect( 4 ).to( beGreaterThan(3) )                           ); // should return true

// additional tests
console.log(  expect( 4 ).to( beGreaterThan(4) )                           ); // should return false
console.log(  expect( 4 ).not.not.to( eq(4) )                              ); // should return true
console.log(  expect( expect( 2 ).not.to( eq(2) ) ).to( eq(false) )        ); // should return true
