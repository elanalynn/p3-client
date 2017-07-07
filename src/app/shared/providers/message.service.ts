import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';

@Injectable()
export class MessageService {

  constructor(private http: Http) { }

  public sendMessage(message): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const url = `${environment.baseApiUrl}/messages`;
    const msg = {
        name: message.name,
        email: message.email,
        note: message.note
      };
    return this.http.post(url, msg);
  }
}
