import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.scss']
})

export class WritingComponent implements OnInit {

  posts_2016 = [
    {
      title: 'sdf',
      date: '123',
      blurb: 'sfsdf'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
