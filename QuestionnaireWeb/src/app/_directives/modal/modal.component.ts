import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { ModalService } from '../../services/modal.service';
import {Observable} from "rxjs";

const KEY_ESC = 27;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() confirmedDelete: EventEmitter<boolean> = new EventEmitter<boolean>();
  title: string = 'Confirmation';
  message: string = 'Are you sure you want to delete?';
  okText: string = 'Confirm';
  cancelText: string = 'Cancel';
  //negativeOnClick: (e: any) => void;
  //positiveOnClick: (e: any) => void;

  // private defaults = {
  //   title: 'Confirmation',
  //   message: 'Are you sure you want to delete?',
  //   cancelText: 'Cancel',
  //   okText: 'Confirm'
  // };
  private modalElement: any;
  private cancelButton: any;
  private okButton: any;

  constructor(private modalService: ModalService) {
    //modalService.activate = this.activate.bind(this);
  }

  btnOkClicked(){
    this.confirmedDelete.emit(true);
    document.getElementById('cancelButton').click();
  }

  btnCancelClicked(){
    this.confirmedDelete.emit(false);
  }

  // activate(message = this.defaults.message, title = this.defaults.title) {
  //   this.title = title;
  //   this.message = message;
  //   this.okText = this.defaults.okText;
  //   this.cancelText = this.defaults.cancelText;
  //
  //   let promise = new Observable<boolean>((resolve) => {
  //     this.negativeOnClick = (e: any) => false;
  //     this.positiveOnClick = (e: any) => true;
  //     this.show();
  //   });
  //   return promise;
  // }
  //
   ngOnInit() {
     // this.modalElement = document.getElementById('confirmationModal');
     // this.cancelButton = document.getElementsByName('cancelButton');
     // this.okButton = document.getElementById('okButton');
   }
  //
  //
  // private show() {
  //   document.onkeyup = null;
  //
  //   if(!this.modalElement || !this.cancelButton || !this.okButton) {
  //     return;
  //   }
  //
  //   this.cancelButton.onclick = ((e: any) => {
  //     e.preventDefault();
  //     if(!this.negativeOnClick(e)) {
  //       this.hideDialog();
  //     }
  //   });
  //
  //   this.okButton.onclick = ((e: any) => {
  //     e.preventDefault();
  //     if(!this.positiveOnClick(e)) {
  //       this.hideDialog();
  //     }
  //   });
  //
  //   this.modalElement.onclick = () => {
  //     this.hideDialog();
  //     return null //this.negativeOnClick(null);
  //   };
  //
  //   document.onkeyup = (e: any) => {
  //     if(e.which === KEY_ESC) {
  //       this.hideDialog();
  //     }
  //   };
  //
  //   document.getElementById('openModalButton').click();
  // }
  //
  // private hideDialog() {
  //   document.getElementById('cancelButton').click();
  // }

}
