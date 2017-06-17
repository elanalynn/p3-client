import { Component, OnInit } from '@angular/core';
import { PostService } from './posts.service';
import { IPost } from './post/post.model';
import * as moment from 'moment';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  constructor(
    private postSvc: PostService
  ) { }

  ngOnInit() {
    // const posts: IPost[] = [];
    this.postSvc.getPosts()
    .map(p => p)
    .subscribe(p => {
      console.log(p);
    });
  }
}
