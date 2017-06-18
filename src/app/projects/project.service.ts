import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IProject } from './project/project.model';
import * as p from './projects.json';
import 'rxjs/Rx';

@Injectable()
export class ProjectService {

    project: IProject;
    projects: IProject[];
    // api = 'https://p3-server.herokuapp.com/projects';

    constructor (
        private http: Http
    ) {}

    public getProjects(): any {
        return p;
        // const url = this.api;
        // return this.http.get(url).map((response: Response) => {
        //     return <IProject[]>response.json();
        // }).catch(this.handleError);
    }

    // public getProject(id: number): Observable<Response> {
    //     const url = `${this.api}/${id}`;
    //     return this.http.get(url);
    // }

    // public handleError(error: Response) {
    //     return Observable.throw(error.statusText);
    // }
}
