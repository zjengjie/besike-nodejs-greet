var parseArgs = require('minimist')
module.exports = function greet(name, drunk) {
	if (drunk) {
		return "hello, " + name + ", you look sexy today";
	} else {
		return "hello, " + name;
	}
}
