export const appConfig = {
  apiUrl: '',

  endpoints: {
    userAuthenticate: '/users/authenticate',
    userRegister: '/users/register',
    getAllQuestionnairesForUser: '/users-questionnaires',
    getQuestionnaireDetailsForUser: '/users-questionnaires/details',
    saveQuestionnaire: '/users-questionnaires/save',
    getAllQuestionnairesForAdmin: '/admin-questionnaires',
    addQuestionnaire: '/admin-questionnaires/add-questionnaire',
    getAllQuestionsByQuestionnaireId: '/admin-questionnaires/questions',
    getAllQuestionTypes: '/admin-questionnaires/question-types',
    addQuestion: '/admin-questionnaires/add-question',
    getAllAnswersByQuestionId: '/admin-questionnaires/answers',
    addAnswer: '/admin-questionnaires/add-answer',
    deleteQuestionnaire: '/admin-questionnaires/delete-questionnaire',
    deleteQuestion: '/admin-questionnaires/delete-question',
    deleteAnswer: '/admin-questionnaires/delete-answer',
    getQuestionnaireById: '/admin-questionnaires/questionnaire',
  }
};
