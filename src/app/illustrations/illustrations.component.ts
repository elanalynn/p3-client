import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.scss']
})
export class IllustrationsComponent implements OnInit {

  illustrations = [
    'a', 'b', 'c'
  ];

  constructor() { }

  ngOnInit() {
  }

}
