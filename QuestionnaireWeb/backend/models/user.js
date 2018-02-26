var db = require('../dbconnection'); //reference of dbconnection.js
var bcrypt = require('bcrypt-nodejs');
var Q = require('q');
var jwt = require('jsonwebtoken');
var config = require('../config.json');

var User = {
	findByUsername : function(username, callback) {
		return db.query("SELECT * FROM users WHERE email = '" + username + "'", callback);
	},

	addUser : function(data, role_id, callback) {
		db.query("INSERT INTO users SET ?", data, function(err, result) {
			if (err) throw err;
			var userId = result.insertId;
			console.log(role_id);
			var values = { "user_id": userId, "role_id": role_id, "active": 1 };
			return db.query("INSERT INTO users_roles SET ?", values, callback);
		});
	},
	
	encrypt : function(data, callback) {
		bcrypt.genSalt(10, function(err, salt) {
			bcrypt.hash(data.password, salt, null, callback);
		})
	},
	
	sendResponse : function(success, res) {
		if(success) {
			res.send({ 'success': 'true'});
		}
		else {
			res.send({ 'success': 'false'});
		}
	},
	
	authenticate: function(username, password, callback) {
		var deferred = Q.defer();
		
		this.findByUsername(username, function(err, rows, fields) {		
			if(err) {
				deferred.reject(err.name + ': ' + err.message);
			}

			if(rows.length == 1 && bcrypt.compareSync(password, rows[0].hashedpassword)) {
				var user = rows[0];
				db.query("SELECT * FROM users_roles WHERE user_id = " + db.escape(user.id) + ";", function(err, results) {
					console.log(results);
					if(results.length != 0) {
						var roles = results[0];
						console.log(roles);
						deferred.resolve({
							id: user.id,
							firstName: user.firstName,
							lastName: user.lastName,
							username: user.email,
							role_id: roles.role_id,
							token: jwt.sign({ sub: user.id }, config.secret)
						});
					}
					else {
						deferred.resolve();
					}
				});
			}
			else {
				deferred.resolve();
			}
		});
		return deferred.promise;
	},
	
};
module.exports = User;
