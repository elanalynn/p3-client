import { Routes } from '@angular/router';

import {
    AboutComponent,
    AuthComponent,
    ContactComponent,
    PageNotFoundComponent,
    ResumeComponent,
    ShadIsSmartComponent,
    SuccessComponent
} from './';

export const APP_ROUTES = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule'
    },
    { path: 'auth', component: AuthComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'resume', component: ResumeComponent},
    { path: 'shad', component: ShadIsSmartComponent },
    { path: 'success', component: SuccessComponent },
    { path: '**', component: PageNotFoundComponent }
];
