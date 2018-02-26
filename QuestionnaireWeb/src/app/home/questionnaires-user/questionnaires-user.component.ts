import { Component, OnInit } from '@angular/core';
import {QuestionnairesUserService} from "../../services/questionnaires-user.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-questionnaires-user',
  templateUrl: './questionnaires-user.component.html',
  styleUrls: ['./questionnaires-user.component.css']
})
export class QuestionnairesUserComponent implements OnInit {
  usersQuestionnaires: any = [];

  constructor(protected questionnairesUsersService: QuestionnairesUserService,
              protected router: Router) { }

  ngOnInit() {
    //var userId = JSON.parse(localStorage.getItem('currentUser')).id;
    this.questionnairesUsersService.getAllQuestionnairesForUser().subscribe(data => {
      this.usersQuestionnaires = data;
    });
  }

  showQuestionnaire(questionnaire) {
    this.router.navigate(['/dashboard/fill-questionnaire/', questionnaire.questionnaire_id]);
  }
}
