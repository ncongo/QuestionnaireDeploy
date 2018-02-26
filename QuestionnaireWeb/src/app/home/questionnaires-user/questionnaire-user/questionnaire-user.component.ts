import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionnairesUserService} from "../../../services/questionnaires-user.service";
import {AlertService} from "../../../services/alert.service";

@Component({
  selector: 'app-questionnaire-user',
  templateUrl: './questionnaire-user.component.html',
  styleUrls: ['./questionnaire-user.component.css',]
})
export class QuestionnaireUserComponent implements OnInit {
  private questionnaire_id: number;
  private sub: any;
  questionnaire: any = [];
  isAnsweredQuestionnaire: boolean = false;
  private userId = JSON.parse(localStorage.getItem('currentUser')).id;;

  constructor(private route: ActivatedRoute,
              private questionnairesUsersService: QuestionnairesUserService,
              private alertService: AlertService,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.questionnaire_id = +params['id'];

      if(!isNaN(this.questionnaire_id)) {
        this.questionnairesUsersService.getQuestionnaireDetailsForUser(this.questionnaire_id, this.userId).subscribe(data => {
          console.log(data);
          this.questionnaire = data;
          this.isAnsweredQuestionnaire = data[0].isAnsweredQuestionnaire;
        });
      }
    });
  }

  onSelectionChange(answer) {
    for(let q of this.questionnaire){
      if(q.QuestionId == answer.QuestionId)
        //this.questionnaire.find(x => x.QuestionsAnswersId == q.QuestionsAnswersId).isAnsweredQuestion = false;
        q.isAnsweredQuestion = false;
    }
    this.questionnaire.find(x => x.QuestionsAnswersId == answer.QuestionsAnswersId).isAnsweredQuestion = true;
  }

  onTextChange(questionsAnswersId, text) {
    if(text.length > 0)
      this.questionnaire.find(x => x.QuestionsAnswersId == questionsAnswersId).isAnsweredQuestion = true;
    else
      this.questionnaire.find(x => x.QuestionsAnswersId == questionsAnswersId).isAnsweredQuestion = false;
  }

  saveQuestionnaire() {
    for(let q of this.questionnaire) {
      q.isAnsweredQuestionnaire = 1;
      q.UserId = this.userId;
    }
    console.log(this.questionnaire);
    this.questionnairesUsersService.saveQuestionnaire(this.questionnaire).subscribe(data => {
      if(data == 'success'){
        this.alertService.success("You have successfully filled your questionnaire", true);
        setTimeout((router: Router) => {
          this.router.navigate(['/dashboard/questionnaires']);
        }, 2000);  //2s
      }
    });
  }
}
