import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'Rxjs';
import { MessageService } from '../shared/providers/message.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent  {

  msg: string;

  constructor(
    private msgSvc: MessageService,
    private router: Router
  ) {}

  submitMessage(msg, valid): void {
    console.log(msg);
    this.msgSvc.sendMessage(msg);
    this.router.navigate(['success']);
  }
}
