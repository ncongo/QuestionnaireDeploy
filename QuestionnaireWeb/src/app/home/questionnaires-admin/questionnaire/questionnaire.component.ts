import { Component, OnInit } from '@angular/core';
import {QuestionnairesAdminService} from "../../../services/questionnaires-admin.service";
import {AlertService} from "../../../services/alert.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  model: any = {};
  private sub: any;
  private questionnaireId;
  title: string;

  constructor(private questionnairesAdminService: QuestionnairesAdminService,
              private alertService: AlertService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.questionnaireId = +params['questionnaireId'];
    });
    if(!isNaN(this.questionnaireId) && this.questionnaireId > 0) {
      this.title = "Edit questionnaire";
      this.questionnairesAdminService.getQuestionnaireById(this.questionnaireId).subscribe(data => {
        this.model = data;
      });
    }
    else
      this.title = "Add new questionnaire";
  }

  addQuestionnaire() {
    this.questionnairesAdminService.addQuestionnaire(this.model).subscribe(data => {
      if(data){
        let message = "";
        if(this.model.id && this.model.id > 0)
          message = "You have successfully edited questionnaire";
        else
          message = "You have successfully added questionnaire";
        this.alertService.success(message, true);
        setTimeout((router: Router) => {
          this.router.navigate(['/admin-panel/questionnaires']);
        }, 2000);  //2s
      }
    });
  }
}
