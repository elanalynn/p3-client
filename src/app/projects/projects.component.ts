import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { IProject } from './project/project.model';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: IProject[];

  constructor(
    private projectSvc: ProjectService
  ) { }

  ngOnInit() {
    this.projects = this.projectSvc.getProjects();
  }

}
