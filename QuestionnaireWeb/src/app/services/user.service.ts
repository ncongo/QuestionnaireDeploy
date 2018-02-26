import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../_models/user";
import {appConfig} from "../app.config";
import {Observable} from "rxjs";
import {Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  create(user: User) {
    return this.http.post(appConfig.apiUrl + appConfig.endpoints.userRegister, user)
      .map((response: Response) => {
        return response;
        //response.json();
      })
      .catch((error: Response) => {
        return Observable.throw(error.json());
      });
  }
}
