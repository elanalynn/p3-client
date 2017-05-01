import { Component, OnInit } from '@angular/core';
import { WritingService } from './';
import { IPost } from './post/post.model';
import * as moment from 'moment';

@Component({
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.scss']
})
export class WritingComponent implements OnInit {

  posts: IPost[];

  constructor(
    private writingSvc: WritingService
  ) { }

  ngOnInit() {
    const posts: any[] = [];
    this.writingSvc.getPosts()
    .subscribe(p => {
      p.map(post => {
        const date = moment(post.date).format('MMM DD');
        post.date = date;
        posts.push(post);
        this.posts = posts;
      });
    });
  }
}
