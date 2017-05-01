import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IIllustration } from './illustration/illustration.model';
import 'rxjs/Rx';

@Injectable()
export class IllustrationsService {

    illustration: IIllustration;
    illustrations: IIllustration[];
    api = 'https://p3-server.herokuapp.com/illustrations';

    constructor (
        private http: Http
    ) {}

    public getIllustrations(): Observable<IIllustration[]> {
        const url = this.api;
        return this.http.get(url).map((response: Response) => {
            return <IIllustration[]>response.json();
        }).catch(this.handleError);
    }

    public getIllustration(id: number): Observable<Response> {
        const url = `${this.api}/${id}`;
        return this.http.get(url);
    }

    public handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
