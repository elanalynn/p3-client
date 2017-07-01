import {
   DashboardComponent
} from './';

export const APP_ROUTES = [
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent }
    // { path: '**', component: PageNotFoundComponent }
];
