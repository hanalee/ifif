
function ifif( condition, message, errorCode, report ) {

	if( typeof condition === 'string' && errorCode === void 0 && message === void 0 ) {
		message = condition;
		condition = true;
	} else if( typeof condition === 'string' && message === void 0 ) {
		errorCode = message;
		message = condition;
		condition = true;
	}

	if ( !! condition ) {
		report( message, errorCode );
	}
} 


function reportError( message, errorCode ) {

	message = message || 'check your ifif code, something\'s wrong..';
	console.error(message);

	if (errorCode) {
		throw errorCode;
	} else {
		throw 'DEFAULT_IFIF_ERROR';
	}
}

function reportWarn( message, errorCode ) {

	message = message || 'check your ifif code, something\'s wrong..';
	console.warn(message);
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
