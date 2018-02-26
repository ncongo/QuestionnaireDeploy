import { Component, OnInit } from '@angular/core';
import {QuestionnairesAdminService} from "../../../../services/questionnaires-admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../../../../services/alert.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questionTypes: any = [];
  newQuestion: any = {};
  questionnaireId: number;
  sub: any;

  constructor(private questionnairesAdminService: QuestionnairesAdminService,
              private route: ActivatedRoute,
              private alertService: AlertService,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.questionnaireId = +params['questionnaireId'];
    });
    this.newQuestion['questionnaireId'] = this.questionnaireId;
    this.questionnairesAdminService.getAllQuestionTypes().subscribe(data => {
      this.questionTypes = data;
    });
  }

  changeType(param) {
    console.log(param);
  }

  addQuestion(){
    this.questionnairesAdminService.addQuestion(this.newQuestion).subscribe(data => {
      if(data){
        this.alertService.success("You have successfully added question", true);
        setTimeout((router: Router) => {
          this.router.navigate(['/admin-panel/questions/', this.questionnaireId]);
        }, 2000);  //2s
      }
    });
  }
}
