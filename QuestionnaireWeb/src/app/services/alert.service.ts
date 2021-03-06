import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { Router, NavigationStart } from "@angular/router";

@Injectable()
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router:Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.keepAfterNavigationChange = false;
      }
      else {
        this.subject.next();
      }
    });
  }

  success(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: message });
  }

  error(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'error', text: message });
  }

  destroy() {
    this.keepAfterNavigationChange = false;
    this.subject.next({ type: 'alert', text: null });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
