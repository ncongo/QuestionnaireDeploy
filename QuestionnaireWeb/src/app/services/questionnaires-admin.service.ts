import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {appConfig} from "../app.config";
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class QuestionnairesAdminService {

  constructor(private http: HttpClient) { }

  getAllQuestionnairesForAdmin(){
    return this.http.get(appConfig.apiUrl + appConfig.endpoints.getAllQuestionnairesForAdmin);
  }

  addQuestionnaire(questionnaire) {
    return this.http.post(appConfig.apiUrl + appConfig.endpoints.addQuestionnaire, questionnaire)
      .map((response: Response) => {
        return response;
      })
      .catch((error: Response) => {
        return Observable.throw(error);
      });
  }

  getAllQuestionsByQuestionnaireId(questionnaireId) {
    return this.http.get(appConfig.apiUrl + appConfig.endpoints.getAllQuestionsByQuestionnaireId + '/' + questionnaireId);
  }

  getAllQuestionTypes(){
    return this.http.get(appConfig.apiUrl + appConfig.endpoints.getAllQuestionTypes);
  }

  addQuestion(question) {
    return this.http.post(appConfig.apiUrl + appConfig.endpoints.addQuestion, question)
      .map((response: Response) => {
        return response;
      })
      .catch((error: Response) => {
        return Observable.throw(error);
      });
  }

  getAllAnswersByQuestionId(questionId) {
    return this.http.get(appConfig.apiUrl + appConfig.endpoints.getAllAnswersByQuestionId + '/' + questionId);
  }

  addAnswer(answer) {
    return this.http.post(appConfig.apiUrl + appConfig.endpoints.addAnswer, answer)
      .map((response: Response) => {
        return response;
      })
      .catch((error: Response) => {
        return Observable.throw(error);
      });
  }

  deleteQuestionnaire(questionnaireId) {
    return this.http.delete(appConfig.apiUrl + appConfig.endpoints.deleteQuestionnaire + '/' + questionnaireId);
  }

  deleteQuestion(questionnaireQuestionId) {
    return this.http.delete(appConfig.apiUrl + appConfig.endpoints.deleteQuestion + '/' + questionnaireQuestionId);
  }

  deleteAnswer(questionAnswerId) {
    return this.http.delete(appConfig.apiUrl + appConfig.endpoints.deleteAnswer + '/' + questionAnswerId);
  }

  getQuestionnaireById(questionnaireId) {
    return this.http.get(appConfig.apiUrl + appConfig.endpoints.getQuestionnaireById + '/' + questionnaireId);
  }
}
