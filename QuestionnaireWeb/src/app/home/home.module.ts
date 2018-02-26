import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HomeRoutingModule, routing } from './home-routing.module';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { QuestionnairesAdminComponent } from './questionnaires-admin/questionnaires-admin.component';
import { QuestionnaireComponent } from './questionnaires-admin/questionnaire/questionnaire.component';
import { QuestionnairesUserComponent } from './questionnaires-user/questionnaires-user.component';
import { QuestionnaireUserComponent } from './questionnaires-user/questionnaire-user/questionnaire-user.component';
import { PipesModule } from "../_pipes/pipes.module";
import { AlertComponent } from "../_directives/alert/alert.component";
import { QuestionsListComponent } from './questionnaires-admin/questions/questions-list.component';
import { QuestionComponent } from './questionnaires-admin/questions/question/question.component';
import { AnswersListComponent } from './questionnaires-admin/answers/answers-list.component';
import { AnswerComponent } from './questionnaires-admin/answers/answer/answer.component';
import {ModalComponent} from "../_directives/modal/modal.component";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    routing,
    FormsModule,
    PipesModule,
  ],
  declarations: [AlertComponent, ModalComponent, DashboardAdminComponent, LoginComponent, RegisterComponent, DashboardUserComponent, QuestionnairesAdminComponent, QuestionnaireComponent, QuestionnairesUserComponent, QuestionnaireUserComponent, QuestionsListComponent, QuestionComponent, AnswersListComponent, AnswerComponent]
})
export class HomeModule { }
