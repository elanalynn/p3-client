import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/providers/posts.service';
import { IPost } from '../shared/models/post.model';
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
    this.postSvc.getPosts()
    // .map(p => p)
    .subscribe(posts => {
      this.posts = posts;
    });
  }
}
