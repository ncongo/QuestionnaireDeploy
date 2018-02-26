import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionnairesAdminService} from "../../../../services/questionnaires-admin.service";
import {AlertService} from "../../../../services/alert.service";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  private sub: any;
  questionId: number;
  newAnswer: any = {};


  constructor(private route: ActivatedRoute,
              private questionnairesAdminService: QuestionnairesAdminService,
              private alertService: AlertService,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.questionId = +params['questionId'];
    });
    this.newAnswer['questionId'] = this.questionId;
  }

  addAnswer(){
    this.questionnairesAdminService.addAnswer(this.newAnswer).subscribe(data => {
      if(data){
        this.alertService.success("You have successfully added answer", true);
        setTimeout((router: Router) => {
          this.router.navigate(['/admin-panel/answers/', this.questionId]);
        }, 2000);  //2s
      }
    });
  }
}
