'use strict';

/**
 * module dependencies
 */
var getHandler = require( '../helpers/get-handler' );

/**
 * @param {string} path
 * '.'  is used for prefix handlers
 * '..' is used for suffix handlers
 *
 * @param {Function} handler
 * @param {string} method
 *
 * @constructor
 */
function RequestHandler( path, handler, method ) {
  /**
   * @type {string}
   */
  this.method = method;

  /**
   * @type {Function}
   */
  this.handler = getHandler( handler );

  /**
   * @type {string}
   */
  this.path = path;
}

module.exports = RequestHandler;
