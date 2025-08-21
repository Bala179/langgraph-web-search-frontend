import { Component } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Message } from './message/message';
import { MessageInfo } from './message-info';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from './message-service';

@Component({
  selector: 'app-root',
  imports: [NgbModule, Message, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  messageList: MessageInfo[] = []

  newMessageForm = new FormGroup({
    newMessage: new FormControl(''),
  });
  
  constructor(private modalService: NgbModal, private messageService: MessageService) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  sendMessage() {
    let userMessage = this.newMessageForm.value.newMessage;
    if (userMessage && userMessage !== '') {
      this.messageList.push({
        content: userMessage,
        sentByUser: true,
        loaded: true
      })

      let newMsgObj: MessageInfo = {
        content: '',
        sentByUser: false,
        loaded: false
      }

      this.messageList.push(newMsgObj)

      this.messageService.getWebSearchAgentResponse(userMessage)
        .subscribe(aiMessage => {
          this.messageList.pop();
          
          newMsgObj.content = aiMessage.content;
          newMsgObj.loaded = true;
          
          this.messageList.push(newMsgObj);
        }
      )

      this.newMessageForm.setValue({ newMessage: '' })
    }

    
  }
}
