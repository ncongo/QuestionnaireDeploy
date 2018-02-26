var db = require('../dbconnection'); //reference of dbconnection.js

var AdminQuestionnaires = {
	getAllQuestionnaires : function(callback) {
		return db.query("SELECT q.id, q.name, q.description FROM `questionnaires` as q where q.active = 1", callback);
	},
	
	addQuestionnaire : function(data, callback) {
		if(data.id > 0)
			return db.query("UPDATE questionnaires SET name = " + db.escape(data.name) + ",description = " + db.escape(data.description) + " WHERE id = " + db.escape(data.id), callback);
		return db.query("INSERT INTO questionnaires SET ?", data, callback);
	},
	
	getQuestionsByQuestionnaireId : function(questionnaire_id, callback) {
		if(questionnaire_id != undefined){//TODO All queries parameters change to insert as parameter (SQL Injection)
			return db.query("SELECT qq.id as QuestionnairesQuestionsId, qq.question_id as QuestionId, q.text as QuestionText, qt.id as QuestionTypeId, qt.name as QuestionTypeName FROM questionnaires_questions as qq inner join questions as q on q.id = qq.question_id inner join question_types as qt on qt.id = q.question_type_id WHERE qq.active = 1 and qq.questionnaire_id = " + db.escape(questionnaire_id), callback);
		}
		return;
	},
	
	getAllQuestionTypes : function(callback) {
		return db.query("SELECT qt.id, qt.name, qt.description FROM `question_types` as qt where qt.active = 1", callback);
	},
	
	addQuestion : function(data, callback) {
		var query = "";
		var query = ""
		
		if(data.questionTypeId == 2)//If question type is yes-no
			query = "START TRANSACTION; INSERT INTO questions SET text=" + db.escape(data.text) + ", question_type_id=" + db.escape(data.questionTypeId) + "; SET @lastQuestionId = LAST_INSERT_ID(); INSERT INTO questionnaires_questions SET questionnaire_id=" + db.escape(data.questionnaireId) + ", question_id=@lastQuestionId; INSERT INTO questions_answers SET question_id=@lastQuestionId, answer_id=1; INSERT INTO questions_answers SET question_id=@lastQuestionId,answer_id=2; COMMIT;";
		else if(data.questionTypeId == 1)//If question type is text
			query = "START TRANSACTION; INSERT INTO questions SET text=" + db.escape(data.text) + ", question_type_id=" + db.escape(data.questionTypeId) + "; SET @lastQuestionId = LAST_INSERT_ID(); INSERT INTO questionnaires_questions SET questionnaire_id=" + db.escape(data.questionnaireId) + ", question_id=@lastQuestionId; INSERT INTO questions_answers SET question_id=@lastQuestionId, answer_id=NULL; COMMIT;";
		else
			query = "START TRANSACTION; INSERT INTO questions SET text=" + db.escape(data.text) + ", question_type_id=" + db.escape(data.questionTypeId) + "; SET @lastQuestionId = LAST_INSERT_ID(); INSERT INTO questionnaires_questions SET questionnaire_id=" + db.escape(data.questionnaireId) + ", question_id=@lastQuestionId; COMMIT;";
		return db.query(query, callback);
	},
	
	getAnswersByQuestionId : function(question_id, callback) {
		if(question_id != undefined){//TODO All queries parameters change to insert as parameter (SQL Injection)
			return db.query("SELECT qa.id as QuestionsAnswersId, qa.answer_id as AnswerId, a.text as AnswerText FROM questions_answers as qa inner join answers as a on a.id = qa.answer_id WHERE qa.active = 1 and qa.question_id = " + db.escape(question_id), callback);
		}
		return;
	},
	
	addAnswer : function(data, callback) {
		var query = "START TRANSACTION; INSERT INTO answers SET text=" + db.escape(data.text) + "; SET @lastAnswerId = LAST_INSERT_ID(); INSERT INTO questions_answers SET question_id=" + db.escape(data.questionId) + ", answer_id=@lastAnswerId; COMMIT;";
		return db.query(query, callback);
	},
	
	deleteQuestionnaire : function(questionnaireId, callback) {
		return db.query("UPDATE questionnaires SET active = 0 WHERE id = ?", questionnaireId, callback);
	},
	
	deleteQuestion : function(questionnaireQuestionId, callback) {
		return db.query("UPDATE questionnaires_questions SET active = 0 WHERE id = ?", questionnaireQuestionId, callback);
	},
	
	deleteAnswer : function(questionAnswerId, callback) {
		return db.query("UPDATE questions_answers SET active = 0 WHERE id = ?", questionAnswerId, callback);
	},
	
	getQuestionnaireById : function(questionnaireId, callback) {
		db.query("SELECT id, name, description FROM questionnaires WHERE id = " + db.escape(questionnaireId) + " LIMIT 1;", callback);
	}
}

module.exports = AdminQuestionnaires;