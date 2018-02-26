import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { appConfig } from "../app.config";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Response} from "@angular/http";

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(appConfig.apiUrl + appConfig.endpoints.userAuthenticate,JSON.stringify({ username: username, password: password }), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) } )
      .map(user => {
        console.log(user);
        if(user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
