import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IIllustration } from './illustration/illustration.model';
import * as i from './illustrations.json';
import 'rxjs/Rx';

@Injectable()
export class IllustrationsService {
    illustration: IIllustration;
    illustrations: IIllustration[];

    constructor () {}

    getIllustrations(): any {
        console.log('here', i);
        return i;
    }

    // getIllustration(id: number): Observable<Response> {
    //     const url = `${this.api}/${id}`;
    //     return this.http.get(url);
    // }

    // handleError(error: Response) {
    //     return Observable.throw(error.statusText);
    // }
}
