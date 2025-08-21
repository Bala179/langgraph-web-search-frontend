import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { MarkdownComponent } from "ngx-markdown";

@Component({
  selector: 'app-message',
  imports: [NgClass, MarkdownComponent],
  templateUrl: './message.html',
  styleUrl: './message.css'
})
export class Message {
  content = input("");
  sentByUser = input(true);
  loaded = input(true);
}
