var mysql = require('mysql');
var connection = mysql.createPool({
	host: 'localhost',
	user: 'mop',
	password: 'mopDB123!',
	database: 'mopquestionnaire',
	multipleStatements: true
});
module.exports = connection;