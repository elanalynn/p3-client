import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectComponent, ProjectsComponent } from './';
import { ProjectsService } from './projects.service';
import { PROJECT_ROUTES } from './routes';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PROJECT_ROUTES)
  ],
  providers: [
    ProjectsService
  ],
  exports: [
    ProjectsComponent,
    ProjectComponent
  ]
})
export class ProjectsModule { }
