import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProjectComponent, ProjectsComponent } from './';
import { ProjectService } from './project.service';
import { PROJECT_ROUTES } from './routes';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PROJECT_ROUTES),
    SharedModule
  ],
  providers: [
    ProjectService
  ],
  exports: [
    ProjectsComponent,
    ProjectComponent
  ]
})
export class ProjectsModule { }
