import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)//: Observable<boolean> | Promise<boolean> | boolean {
  {
    if(JSON.parse(localStorage.getItem('currentUser')).role_id == 1) { //If user is administrator TODO: Change to enum
      return true;
    }

    this.router.navigate(['/login']);
  }
}
