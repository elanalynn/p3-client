import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit {
  text = 'blarg';

  constructor() { }

  ngOnInit() {
  }

}
