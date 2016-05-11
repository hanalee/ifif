
function ifif( condition, message, errorCode, report ) {

	if( arguments.length < 1 ) {
		console.error('condition is required');
		return;
	}

	if ( !! condition ) {
		report( message, errorCode );
	}
} 


function reportError( message, errorCode ) {

	if (message) {

		console.error(message);

	} else {

		var msg = 'check your ifif code, something\'s wrong..';
		if (typeof condition === 'string') {
			msg += '\n' + condition;
		}

		console.error(msg);
	}
	if (errorCode) {
		throw errorCode;
	} else {
		throw 'DEFAULT_IFIF_ERROR';
	}
}

function reportWarn( message, errorCode ) {

	if (message) {

		console.warn(message);

	} else {

		var msg = 'check your ifif code, something\'s wrong..';
		if (typeof condition === 'string') {
			msg += '\n' + condition;
		}

		console.warn(msg);
	}
}

var _extends = function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];
		for (var key in source) {
			target[key] = source[key];
		}
	}
	return target;
}


exports['default'] = function( condition, message, errorCode ) {
	ifif( condition, message, errorCode, reportError );
}
exports.warn = function( condition, message, errorCode ) {
	ifif( condition, message, errorCode, reportWarn );
}

module.exports = _extends(exports['default'], exports);
