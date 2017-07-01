import { Routes } from '@angular/router';
import {
   AdminComponent,
   DashboardComponent
} from './';

export const ADMIN_ROUTES: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent }
        ]
    }
];
