var express = require('express');
var app = express();

var adminQuestionnaires = require('../models/admin-questionnaires');

app.get('/', function(req, res) {
	adminQuestionnaires.getAllQuestionnaires(function(err, rows, fields) {
		if(err) throw err;
		res.json(rows);
	})
});

app.post('/add-questionnaire', function(req, res, next) {
	var data = req.body;
	if(data.name.trim() && data.description.trim()) {
		adminQuestionnaires.addQuestionnaire(data, function(err, info) {
			if (err) throw err;
			res.send({ 'success': 'true'});
		});
	}
	else {
		res.status(500).send({ error: 'Bad parameters!' });
	}
});

app.get('/questions/:qId', function(req, res) {
	if(req.params) {
		adminQuestionnaires.getQuestionsByQuestionnaireId(req.params.qId, function(err, rows, field) {
			if(err) throw err;
			res.json(rows);
		}) 
	}
});

app.get('/question-types', function(req, res) {
	adminQuestionnaires.getAllQuestionTypes(function(err, rows, fields) {
		if(err) throw err;
		res.json(rows);
	})
});

app.post('/add-question', function(req, res, next) {
	var data = req.body;
	if(data.text.trim() && data.questionTypeId > 0) {
		adminQuestionnaires.addQuestion(data, function(err, info) {
			if (err) throw err;
			res.send({ 'success': 'true'});
		});
	}
	else {
		res.status(500).send({ error: 'Bad parameters!' });
	}
});

app.get('/answers/:qId', function(req, res) {
	if(req.params) {
		adminQuestionnaires.getAnswersByQuestionId(req.params.qId, function(err, rows, field) {
			if(err) throw err;
			res.json(rows);
		}) 
	}
});

app.post('/add-answer', function(req, res, next) {
	var data = req.body;
	if(data.text.trim()) {
		adminQuestionnaires.addAnswer(data, function(err, info) {
			if (err) throw err;
			res.send({ 'success': 'true'});
		});
	}
	else {
		res.status(500).send({ error: 'Bad parameters!' });
	}
});

app.delete('/delete-questionnaire/:qId', function(req, res, next) {
	if(req.params.qId) {
		adminQuestionnaires.deleteQuestionnaire(req.params.qId, function(err, rows, field) {
			if(err) throw err;
			res.json(rows);
		})
	}
});

app.delete('/delete-question/:qqId', function(req, res, next) {
	if(req.params.qqId) {
		adminQuestionnaires.deleteQuestion(req.params.qqId, function(err, rows, field) {
			if(err) throw err;
			res.json(rows);
		})
	}
});

app.delete('/delete-answer/:qaId', function(req, res, next) {
	if(req.params.qaId) {
		adminQuestionnaires.deleteAnswer(req.params.qaId, function(err, rows, field) {
			if(err) throw err;
			res.json(rows);
		})
	}
});

app.get('/questionnaire/:qId', function(req, res) {
	if(req.params) {
		adminQuestionnaires.getQuestionnaireById(req.params.qId, function(err, rows, field) {
			res.json(rows[0]);
			if(err) throw err;
		}) 
	}
});



module.exports = app;