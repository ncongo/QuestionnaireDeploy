import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {QuestionnairesAdminService} from "../../services/questionnaires-admin.service";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-questionnaires-admin',
  templateUrl: './questionnaires-admin.component.html',
  styleUrls: ['./questionnaires-admin.component.css']
})
export class QuestionnairesAdminComponent implements OnInit {
  adminQuestionnaires: any = [];
  selectedQuestionnaireForDelete: number;

  constructor(private router: Router,
              private questionnairesAdminService: QuestionnairesAdminService,
              //private modalService: ModalService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.getAllQuestionnaires();
  }

  getAllQuestionnaires() {
    this.questionnairesAdminService.getAllQuestionnairesForAdmin().subscribe(data => {
      this.adminQuestionnaires = data;
    });
  }

  deleteQuestionnaire(questionnaireId) {
    this.selectedQuestionnaireForDelete = questionnaireId;
    document.getElementById('openModalButton').click();

    // this.modalService.activate("Are you sure you want to delete questionnaire?", "Confirmation").subscribe((responseOk) => {
    //   if(responseOk) {
    //     this.questionnairesAdminService.deleteQuestionnaire(questionnaireId).subscribe((res) => {
    //       this.alertService.success("You have successfully deleted questionnaire", true);
    //       setTimeout((router: Router) => {
    //         this.router.navigate(['/admin-panel/questionnaires']);
    //       }, 3000);  //3s
    //     });
    //   }
    // });
  }

  confirmedDelete(isConfirmed) {
    if(isConfirmed){
      this.questionnairesAdminService.deleteQuestionnaire(this.selectedQuestionnaireForDelete).subscribe((res) => {
              this.alertService.success("You have successfully deleted questionnaire", false);
              this.getAllQuestionnaires();
              setTimeout((router: Router) => {
                this.alertService.destroy();
              }, 2000);  //2s
            });
    }
    else {
      this.selectedQuestionnaireForDelete = 0;
    }
  }
}
