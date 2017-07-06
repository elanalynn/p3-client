import { Routes } from '@angular/router';

import {
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    ResumeComponent,
    ShadIsSmartComponent,
    SuccessComponent
} from './';

export const APP_ROUTES = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'resume', component: ResumeComponent},
    { path: 'shad', component: ShadIsSmartComponent },
    { path: 'success', component: SuccessComponent },
    { path: '**', component: PageNotFoundComponent }
];
