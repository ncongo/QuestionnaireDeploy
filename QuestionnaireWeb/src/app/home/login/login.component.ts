import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authenticaton.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  loading = false;
  model: any = {};

  constructor(protected authenticationService: AuthenticationService,
              protected route: ActivatedRoute,
              protected router: Router,
              protected alertService: AlertService) { }

  ngOnInit() {
    this.authenticationService.logout();
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(){
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          if(data.role_id == 1)//TODO: Change to enum
            this.router.navigate(['/admin-panel/questionnaires']);
          else if(data.role_id == 2)
            this.router.navigate(['/dashboard/questionnaires']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
