import { DashboardComponent } from './dashboard/dashboard.component';

export const ADMIN_ROUTES = [
    { path: '', redirectTo: 'about', pathMatch: 'full'},
    { path: 'admin', component: DashboardComponent }
];
