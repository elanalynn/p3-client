import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: any[];

  constructor(
    private projectSvc: ProjectService
  ) { }

  ngOnInit() {
    this.projects = this.projectSvc.getProjects();
    //  [
    //   {
    //     title: 'project1',
    //     url: 'https://github.com/elanalynn/lench_ui'
    //   }
    // ];
  }

}
