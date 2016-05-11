module.exports = function(condition, message, code) {
	if (condition) {
		if (message) {
			console.error(message);
		} else {
			var msg = 'check your ifif code, something\'s wrong..';
			if (typeof condition === 'string') {
				msg += '\n' + condition;
			}

			console.error(msg);
		}
		if (code) {
			throw code;
		} else {
			throw 'DEFAULT_IFIF_ERROR';
		}
	}
}
