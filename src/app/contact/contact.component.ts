import { Component } from '@angular/core';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent  {

  msg: string;
  confirmationMsg: string;

  sendMessage(msg) {
    console.log(msg);
  }
}
