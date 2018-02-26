import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authenticaton.service";

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
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
