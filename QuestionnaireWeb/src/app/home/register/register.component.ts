import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {AlertService} from "../../services/alert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loading = false;
  model: any = {};

  constructor(protected userService: UserService,
              protected alertService: AlertService,
              protected router: Router) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
