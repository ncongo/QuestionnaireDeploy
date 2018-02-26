import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionnairesAdminService} from "../../../services/questionnaires-admin.service";
import {AlertService} from "../../../services/alert.service";

@Component({
  selector: 'app-answers-list',
  templateUrl: './answers-list.component.html',
  styleUrls: ['./answers-list.component.css']
})
export class AnswersListComponent implements OnInit {
  private sub: any;
  questionId: number;
  answersList: any = [];
  selectedAnswerForDelete: number;

  constructor(private route: ActivatedRoute,
              private questionnairesAdminService: QuestionnairesAdminService,
              private alertService: AlertService,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.questionId = +params['questionId'];

      if(!isNaN(this.questionId)) {
        this.getAllAnswers();
      }
    });
  }

  getAllAnswers() {
    this.questionnairesAdminService.getAllAnswersByQuestionId(this.questionId).subscribe(data => {
      this.answersList = data;
    });
  }

  deleteAnswer(questionAnswerId) {
    this.selectedAnswerForDelete = questionAnswerId;
    document.getElementById('openModalButton').click();
  }

  confirmedDelete(isConfirmed) {
    if(isConfirmed){
      this.questionnairesAdminService.deleteAnswer(this.selectedAnswerForDelete).subscribe((res) => {
        this.alertService.success("You have successfully deleted answer", false);
        this.getAllAnswers();
        setTimeout((router: Router) => {
          this.alertService.destroy();
        }, 2000);  //2s
      });
    }
    else {
      this.selectedAnswerForDelete = 0;
    }
  }
}
