import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-message',
  imports: [NgClass],
  templateUrl: './message.html',
  styleUrl: './message.css'
})
export class Message {
  content = input("");
  sentByUser = input(true);
}
