import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'Rxjs';

@Injectable()
export class MessageService {

  api = 'http://localhost:3000';

  constructor(private http: Http) { }

  public sendMessage(message) {
    console.log('in sendMessage');
    const url = `${this.api}/messages`;
    const msg = {
        name: message.name,
        email: message.email,
        note: message.note
      };
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    this.http.post(url, msg).subscribe(r => {
      console.log(r);
    })
    }
}
