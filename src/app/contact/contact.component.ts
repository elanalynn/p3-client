import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent  {

  msg: string;
  confirmationMsg: string;
  contactForm: NgForm;

  constructor(
    private http: Http,
    private router: Router
  ) {}

  sendMessage(msg) {
    console.log(msg);
    this.confirmationMsg = 'Message sent!';
    this.contactForm.resetForm();
    this.router.navigate(['success']);
  }
}
