import { Component, OnInit } from '@angular/core';
import {QuestionnairesAdminService} from "../../../services/questionnaires-admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../../../services/alert.service";

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
  questionsList: any = [];
  questionnaireId: number;
  private sub: any;
  selectedQuestionForDelete: number;

  constructor(private questionnairesAdminService: QuestionnairesAdminService,
              private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.questionnaireId = +params['questionnaireId'];

      if(!isNaN(this.questionnaireId)) {
        this.getAllQuestionsForGrid();
      }
    });
  }

  getAllQuestionsForGrid(){
    this.questionnairesAdminService.getAllQuestionsByQuestionnaireId(this.questionnaireId).subscribe(data => {
      this.questionsList = data;
    });
  }

  deleteQuestion(questionnaireQuestionId) {
    this.selectedQuestionForDelete = questionnaireQuestionId;
    document.getElementById('openModalButton').click();
  }

  confirmedDelete(isConfirmed) {
    if(isConfirmed){
      this.questionnairesAdminService.deleteQuestion(this.selectedQuestionForDelete).subscribe((res) => {
        this.alertService.success("You have successfully deleted question", false);
        this.getAllQuestionsForGrid();
        setTimeout((router: Router) => {
          this.alertService.destroy();
        }, 2000);  //2s
      });
    }
    else {
      this.selectedQuestionForDelete = 0;
    }
  }
}
