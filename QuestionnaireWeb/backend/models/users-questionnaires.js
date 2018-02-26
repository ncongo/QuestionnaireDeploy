var db = require('../dbconnection'); //reference of dbconnection.js

var UsersQuestionnaires = {
	getAllQuestionnaires : function(callback) {
		return db.query("SELECT q.id as questionnaire_id, q.name, q.description FROM `questionnaires` as q where q.active = 1", callback);
	},
	
	getQuestionnaireForUser : function(questionnaire_id, user_id, callback) {
		if(questionnaire_id != undefined){
			return db.query("SELECT 0 as UserId, q.id, q.name as QuestionnairesName,q.description as QuestionnairesDescription,qq.id as QuestionnairesQuestionsId,qu.id as QuestionId,qu.text as QuestionText,qu.question_type_id as QuestionTypeId,qa.id as QuestionsAnswersId,a.text as AnswerText,(CASE WHEN (SELECT uq2.id FROM `users_questionnaires` as uq2 where uq2.user_id = " + db.escape(user_id) + " and uq2.questionnaire_id = q.id ) > 0 THEN 1 ELSE 0 END) as isAnsweredQuestionnaire, (CASE WHEN (SELECT ua2.id FROM `users_questionnaires` as uq2 left join `users_answers` as ua2 on ua2.users_questionnaire_id = uq2.id where uq2.user_id = " + db.escape(user_id) + " and uq2.questionnaire_id = q.id and ua2.question_answer_id = qa.id) > 0 THEN 1 ELSE 0 END) as isAnsweredQuestion, (SELECT ua2.text_answer FROM `users_questionnaires` as uq2 left join `users_answers` as ua2 on ua2.users_questionnaire_id = uq2.id  left join `questions_answers` as qa2 on qa2.id = ua2.question_answer_id left join `questions` as q2 on q2.id = qa2.question_id where uq2.user_id = " + db.escape(user_id) + " and uq2.questionnaire_id = q.id and ua2.question_answer_id = qa.id and q2.question_type_id = 1) as TextAnswer FROM `questionnaires` as q  left join `questionnaires_questions` as qq on qq.questionnaire_id = q.id  left join `questions` as qu on qu.id = qq.question_id  left join `questions_answers` as qa on qa.question_id = qu.id  left join `answers` as a on a.id = qa.answer_id WHERE q.active=1 and qq.active = 1 and qa.active=1 and q.id = " + db.escape(questionnaire_id), callback);
		}
		return;
	},
	
	saveQuestionnaire : function(data, callback) {
		var user_id = data[0].UserId;
		var questionnaire_id = data[0].id;
		
		var insertData = "START TRANSACTION; INSERT INTO users_questionnaires SET user_id=" + db.escape(user_id) + ",questionnaire_id=" + db.escape(questionnaire_id) + "; SET @lastUsersQuestionnaireId = LAST_INSERT_ID(); ";
		var values = "";
		
		for(var i = 0; i < data.length; i++) {
			if(data[i].isAnsweredQuestion) {
				if(data[i].TextAnswer==null)
					values = values + " (" + data[i].QuestionsAnswersId + "," + data[i].TextAnswer + ",@lastUsersQuestionnaireId),";
				else
					values = values + " (" + data[i].QuestionsAnswersId + ",'" + data[i].TextAnswer + "',@lastUsersQuestionnaireId),";
			}
		}
		
		values = values.substring(0, values.length-1);
		
		var insertData = insertData + "INSERT INTO users_answers(question_answer_id,text_answer,users_questionnaire_id) VALUES " + values + "; COMMIT;";
		console.log(insertData);
		
		db.query(insertData, callback);
		
		// db.beginTransaction(function(err) {
			// if(err) throw err;
			// var values = { "user_id": userId, "questionnaire_id": questionnaire_id };
			// db.query("INSERT INTO users_questionnaires SET ?", values, function(err, result) {
				// if(err) {
					// console.log("1 " + err);
					// return db.rollback(function() {
						// throw err;
					// });
				// }
				
				// var usersQuestionnaireInsertedId = result.insertId;
				// console.log(usersQuestionnaireInsertedId);
				// //var insertQuery = 
				
				// return connection.commit(function(err) {
				// if (err) {
					// return connection.rollback(function() {
						// console.log("2 " + err);
						// throw err;
					// });
				// }
				// console.log('success!');
				// });
			// });
		// });
	},
}

module.exports = UsersQuestionnaires;