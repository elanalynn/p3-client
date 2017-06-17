import { Routes } from '@angular/router';
import {
    ProjectComponent,
    ProjectsComponent,
} from './';

export const PROJECT_ROUTES: Routes = [
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/:id', component: ProjectComponent }
];
