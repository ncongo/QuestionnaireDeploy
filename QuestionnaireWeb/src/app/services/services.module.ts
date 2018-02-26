import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from "./alert.service";
import { AuthenticationService } from "./authenticaton.service";
import { UserService } from "./user.service";
import { QuestionnairesUserService } from "./questionnaires-user.service";
import {QuestionnairesAdminService} from "./questionnaires-admin.service";
import {ModalService} from "./modal.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AlertService, AuthenticationService, UserService, QuestionnairesUserService, QuestionnairesAdminService, ModalService]
})
export class ServicesModule { }
