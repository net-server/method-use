'use strict';

/**
 * @param {Function} handler
 *
 * @throws {Error}
 * @returns {Function}
 */
function getHandler( handler ) {
  if ( handler.constructor !== Function ) {
    throw new Error( 'RequestHandler.handler must be provided as a Function' );
  }

  return handler;
}

module.exports = getHandler;
