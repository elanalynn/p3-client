import { Routes } from '@angular/router';
import { CreateEditComponent, DashboardComponent } from './';

export const ADMIN_ROUTES: Routes = [
    { path: 'admin', component: DashboardComponent },
    { path: 'admin/new', component: CreateEditComponent }
];
