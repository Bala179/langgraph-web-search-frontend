import { Component } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Message } from './message/message';
import { MessageInfo } from './message-info';

@Component({
  selector: 'app-root',
  imports: [NgbModule, Message],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  messageList: MessageInfo[] = [
    {
      content: 'Some quick example text to build on the card title and make up the bulk of the card’s content.',
      sentByUser: false
    },
    {
      content: 'Some quick example text to build on the card title and make up the bulk of the card’s content.',
      sentByUser: true
    },
  ]
  
  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
