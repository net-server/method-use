'use strict';

/**
 * module dependencies
 * @type {Array}
 */
var methods = require( './methods' );

/**
 * @param {Array} user_methods
 * @returns {Array}
 */
function getMethods( user_methods ) {
  var result = [];

  // default if no user_method is provided
  if ( !Array.isArray( user_methods ) || user_methods.length === 0 ) {
    return [ 'GET' ];
  }

  // return all methods
  if ( user_methods.indexOf( '*' ) !== -1 ) {
    return methods;
  }

  // validate each user provided method and add to result if valid
  user_methods.forEach(
    /**
     * @param {string} method
     * @returns {undefined}
     */
    function ( method ) {
      if ( methods.indexOf( method.toUpperCase() ) !== -1 ) {
        result.push( method.toUpperCase() );
      }
    }
  );

  return result;
}

module.exports = getMethods;
