import { Routes } from '@angular/router';

import {
    AboutComponent,
    ContactComponent,
    IllustrationsComponent,
    PageNotFoundComponent,
    ProjectsComponent,
    ResumeComponent,
    ShadIsSmartComponent,
    SuccessComponent
} from './views/index';

export const APP_ROUTES = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'illustrations', component: IllustrationsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'resume', component: ResumeComponent},
    { path: 'shad', component: ShadIsSmartComponent },
    { path: 'success', component: SuccessComponent },
    { path: '**', component: PageNotFoundComponent }
];
