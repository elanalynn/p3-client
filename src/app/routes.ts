import {
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    ResumeComponent,
    ShadIsSmartComponent,
} from './';

export const APP_ROUTES = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'resume', component: ResumeComponent},
    { path: 'shad', component: ShadIsSmartComponent },
    { path: '**', component: PageNotFoundComponent }
];
