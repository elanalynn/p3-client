import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/components/editor/editor';
import { SharedModule } from 'primeng/components/common/shared';
import { AdminComponent, DashboardComponent, CreateEditComponent } from './';
import { ADMIN_ROUTES } from './routes';

@NgModule({
  imports: [
    CommonModule,
    EditorModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(ADMIN_ROUTES)
  ],
  declarations: [
    AdminComponent,
    CreateEditComponent,
    DashboardComponent
  ],
  exports: [
    AdminComponent,
    CreateEditComponent,
    DashboardComponent
  ]
})
export class AdminModule { }