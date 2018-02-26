import {HttpInterceptor} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {HttpRequest} from "@angular/common/http";
import {HttpHandler} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpEvent} from "@angular/common/http";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).catch(errorResponse => {
      return Observable.throw(errorResponse.error)
    });
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};
