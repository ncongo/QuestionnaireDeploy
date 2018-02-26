var express = require('express');
// var router = express.Router();
var app = express();

// Import User Module Containing Functions Related To User Data
var user = require('../models/user');

/* GET users listing. */
app.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

app.post('/authenticate', function(req, res, next) {
	var data = req.body;
	user.authenticate(data.username, data.password)
		.then(function(user) {
			if(user) {
				res.send(user);
			}
			else {
				res.status(400).send('Username or password is incorrect');
			}
		})
		.catch(function(err) {
			res.status(400).send(err);
		});
});

app.post('/register', function(req, res, next) {
	var data = req.body;
	var regularUserRoleID = 2; //ID for regular user role
	user.encrypt(data, function(err, hash) {
		data = {
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			hashedpassword: hash
		};
		user.addUser(data, regularUserRoleID, function(err, info) {
			if(err) throw err;
			//user.sendResponse(true, res);
			res.json('success');
		});
	});
});

app.post('/adduser', function(req, res, next) {
	var data = req.body;
	user.findByUsername(data.email, function(err, rows, fields) {
		//if (err) throw err;
		if(rows.length == 1) {
			user.sendResponse(false, res);
		} else {
			user.encrypt(data, function(err, hash) {
				data = {
					email: data.username,
					hashedpassword: hash
				};
				user.addUser(data, function(err, info) {
					//if(err) throw err;
					user.sendResponse(true, res);
				});
			});
		};
	});
});

module.exports = app;
