var express = require('express');
var app = express();

var usersQuestionnaires = require('../models/users-questionnaires');

app.get('/', function(req, res) {
	usersQuestionnaires.getAllQuestionnaires(function(err, rows, fields) {
		if(err) throw err;
		res.json(rows);
	})
});

app.get('/details/:qId/:uId', function(req, res) {
	if(req.params) {
		usersQuestionnaires.getQuestionnaireForUser(req.params.qId, req.params.uId, function(err, rows, field) {
			if(err) throw err;
			res.json(rows);
		}) 
	}
});

app.post('/save', function(req, res) {
	var data = req.body;
	console.log(data);
	usersQuestionnaires.saveQuestionnaire(data, function(err, info) {
		if(err) throw err;
		res.json('success');
	});
});

module.exports = app;