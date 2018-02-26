import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { appConfig } from '../app.config';
import { Response} from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class QuestionnairesUserService {

  constructor(private http: HttpClient) { }

  getAllQuestionnairesForUser(){
    return this.http.get(appConfig.apiUrl + appConfig.endpoints.getAllQuestionnairesForUser);
  }

  getQuestionnaireDetailsForUser(questionnaireId: number, userId: number) {
    return this.http.get(appConfig.apiUrl + appConfig.endpoints.getQuestionnaireDetailsForUser + '/' + questionnaireId + '/' + userId);
  }

  saveQuestionnaire(data) {
    console.log(data);
    return this.http.post(appConfig.apiUrl + appConfig.endpoints.saveQuestionnaire, data)
      .map((response: Response) => {
        return response;
      })
      .catch((error: Response) => {
        return Observable.throw(error);
      });
  }
}
