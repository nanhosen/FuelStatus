var configValues = require('./config.json');

module.exports = {
	getDbConnectionString: function() {
		return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds061415.mlab.com:61415/fuels';
	}
}