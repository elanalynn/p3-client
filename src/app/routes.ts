import {
    AboutComponent,
    ContactComponent,
    IllustrationsComponent,
    ProjectsComponent,
    ResumeComponent,
    WritingComponent,
    ShadIsSmartComponent
} from './index';

export const APP_ROUTES = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'illustrations', component: IllustrationsComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'resume', component: ResumeComponent},
    { path: 'writing', component: WritingComponent},
    { path: 'shad', component: ShadIsSmartComponent }
];
