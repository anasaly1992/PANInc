import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  conversation = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),

  });

  constructor() { }

  ngOnInit(): void {
  }

  sendConversation(conversation:any) {
    // this.http.post('............', conversation.value)
    console.log(conversation.value)
  }

}
