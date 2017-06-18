import { Injectable } from '@angular/core';
import * as p from './projects.json';

@Injectable()
export class ProjectService {

    constructor () {}

    public getProjects(): any {
        return p;
    }
}
