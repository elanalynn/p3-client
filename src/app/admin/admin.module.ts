import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateEditComponent } from './create-edit/create-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, CreateEditComponent]
})
export class AdminModule { }
