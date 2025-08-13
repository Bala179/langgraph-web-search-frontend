import { Component } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Message } from './message/message';

@Component({
  selector: 'app-root',
  imports: [NgbModule, Message],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
