import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class ModalService {
  activate:  (message?: string, title?: string) => Observable<boolean>;
  constructor() { }

}
