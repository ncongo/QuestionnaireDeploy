import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../services/authenticaton.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {
  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(protected authenticationService: AuthenticationService,
              protected router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
