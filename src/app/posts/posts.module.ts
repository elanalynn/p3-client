import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostComponent, PostsComponent } from './';
import { PostService } from './posts.service';
import { POSTS_ROUTES } from './routes';

@NgModule({
  declarations: [
    PostComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(POSTS_ROUTES)
  ],
  providers: [
    PostService
  ],
  exports: [
    PostComponent,
    PostComponent
  ]
})
export class PostsModule { }
