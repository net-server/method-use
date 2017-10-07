/* eslint consistent-this: off */
/* eslint no-invalid-this: off */

'use strict';

/**
 * module dependencies
 */
var getMethods = require( './helpers/get-methods' );
var RequestHandler = require( './models/request-handler' );

/**
 * provides a method for adding request handlers to a net.Server
 *
 * @param {string} path
 * '.'  is used for prefix handlers
 * '..' is used for suffix handlers
 *
 * @param {Array} handlers
 *
 * @param {Array} user_methods
 * defaults to GET if no methods are provided
 * user_method[ '*' ] can be used to apply the handler to all http methods on the given path
 *
 * @returns {undefined}
 */
function use( path, handlers, user_methods ) {
  /**
   * @type {Array}
   */
  var methods = getMethods( user_methods );

  /**
   * @type {Object}
   *
   * @property {Object} request_handlers
   */
  var Server = this;

  methods.forEach(
    /**
     * @param {string} method
     *
     * @returns {undefined}
     */
    function ( method ) {
      if ( !Server.request_handlers[ method ][ path ] ) {
        Server.request_handlers[ method ][ path ] = [];
      }

      handlers.forEach(
        /**
         * @param {Function} handler
         *
         * @returns {undefined}
         */
        function ( handler ) {
          Server.request_handlers[ method ][ path ].push( new RequestHandler( path, handler, method ) );
        }
      );
    }
  );
}

module.exports = use;
