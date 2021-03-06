import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Modals } from 'src/app/app.component';

@Component({
  selector: 'app-modal-module',
  templateUrl: './modal-module.component.html',
  styleUrls: ['./modal-module.component.scss']
})
export class ModalModuleComponent implements OnInit {

  @Input() showModal: boolean = false;
  @Input() currentModal: Modals = Modals.NONE;

  @Input() connectionInfoPort: any = null;

  @Input() currentAddressIndex: number = 0;
  @Input() currentAccountAddress: string = 'loading';
  @Input() avaxBalance: string = '0';



  @Output() switchToNextAccount = new EventEmitter();
  @Output() switchToPreviousAccount = new EventEmitter();

  @Output() closeModalButton = new EventEmitter();
  @Output() deleteConnectionEvent = new EventEmitter<number>();

  modals = Modals;
  

  constructor() { }

  ngOnInit(): void {
  }

  nextAccount() {
    this.switchToNextAccount.emit();
  }
  previousAccount() {
    this.switchToPreviousAccount.emit();
  }

  closeModal() {
    console.log(this.connectionInfoPort);
    this.closeModalButton.emit();
  }
  deleteConnection(tabId: any) {
    this.deleteConnectionEvent.emit(tabId);
  }
}
