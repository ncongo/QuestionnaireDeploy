import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardAdminComponent} from "./dashboard-admin/dashboard-admin.component";
import {AuthGuard} from "../_guards/auth.guard";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {DashboardUserComponent} from "./dashboard-user/dashboard-user.component";
import {QuestionnairesAdminComponent} from "./questionnaires-admin/questionnaires-admin.component";
import {QuestionnaireComponent} from "./questionnaires-admin/questionnaire/questionnaire.component";
import {QuestionnairesUserComponent} from "./questionnaires-user/questionnaires-user.component";
import {QuestionnaireUserComponent} from "./questionnaires-user/questionnaire-user/questionnaire-user.component";
import {QuestionsListComponent} from "./questionnaires-admin/questions/questions-list.component";
import {QuestionComponent} from "./questionnaires-admin/questions/question/question.component";
import {AnswersListComponent} from "./questionnaires-admin/answers/answers-list.component";
import {AnswerComponent} from "./questionnaires-admin/answers/answer/answer.component";
import {RoleGuard} from "../_guards/role.guard";

const routes: Routes = [
  {
    path: 'admin-panel',
    component: DashboardAdminComponent,
    canActivate: [AuthGuard, RoleGuard],
    children: [
      { path: 'questionnaires',
        component: QuestionnairesAdminComponent,
      },
      { path: 'questionnaire/:questionnaireId',
        component: QuestionnaireComponent,
        pathMatch: 'full'
      },
      {
        path: 'questions/:questionnaireId',
        component: QuestionsListComponent,
        pathMatch: 'full'
      },
      {
        path: 'question/:questionnaireId',
        component: QuestionComponent,
        pathMatch: 'full'
      },
      {
        path: 'answers/:questionId',
        component: AnswersListComponent,
        pathMatch: 'full'
      },
      {
        path: 'answer/:questionId',
        component: AnswerComponent,
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'dashboard',
    component: DashboardUserComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'questionnaires',
        component: QuestionnairesUserComponent,
      },
      { path: 'fill-questionnaire/:id',
        component: QuestionnaireUserComponent,
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

export const routing = RouterModule.forRoot(routes);
