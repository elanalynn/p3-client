import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateEditComponent } from './create-edit/create-edit.component';
import { RouterModule } from '@angular/router';
import { ADMIN_ROUTES } from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ADMIN_ROUTES)
  ],
  declarations: [
    CreateEditComponent,
    DashboardComponent
  ]
})
export class AdminModule { }
